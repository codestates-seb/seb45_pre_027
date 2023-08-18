package com.example.tset.board.controller;



import com.example.tset.board.dto.BoardPatchDto;
import com.example.tset.board.dto.BoardPostDto;
import com.example.tset.board.entity.Board;
import com.example.tset.board.mapper.BoardMapper;
import com.example.tset.board.reponse.MultiResponseDto;
import com.example.tset.board.reponse.SingleResponseDto;
import com.example.tset.board.service.BoardService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.io.Console;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/board")
@CrossOrigin("*")
@Validated
public class BoardController {
    private BoardService boardService;
    private BoardMapper boardMapper;

    public BoardController(BoardService boardService, BoardMapper boardMapper) {
        this.boardService = boardService;
        this.boardMapper = boardMapper;
    }

    @PostMapping
    public ResponseEntity postBoard(@Valid @RequestBody BoardPostDto boardPostDto) {
        Board board = boardMapper.boardPostToBoard(boardPostDto);

        Board createBoard = boardService.createBoard(board);

        return new ResponseEntity<>(boardMapper.boardToBoardResponse(createBoard), HttpStatus.CREATED);
    }

    @PatchMapping("/{board-id}")
    public ResponseEntity patchBoard(@PathVariable("board-id") @Positive long boardId, @RequestBody BoardPatchDto boardPatchDto) {

        boardPatchDto.setBroadId(boardId);

        Board board = boardService.updateBoard(boardMapper.boardPatchToBoard(boardPatchDto));

        return new ResponseEntity<>(new SingleResponseDto<>(boardMapper.boardToBoardResponse(board)), HttpStatus.OK);
    }

    @GetMapping("/{board-id}")
    public ResponseEntity getBoard(@PathVariable("board-id") @Positive long boardId) {
        Board board = boardService.readBoard(boardId);

        return new ResponseEntity<>(new SingleResponseDto<>(boardMapper.boardToBoardResponse(board)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getBoards(@Positive @RequestParam int page,
                                 @Positive @RequestParam int size) {
       Page<Board> pageBoards = boardService.readBoards(page -1 , size);
       List<Board> boards = pageBoards.getContent();

       return new ResponseEntity<>(
               new MultiResponseDto<>(boardMapper.boardsToBoardResponseDto(boards), pageBoards), HttpStatus.OK);
    }

    @DeleteMapping("/{board-id}")
    public ResponseEntity softdeleteBoard(@PathVariable("board-id") @Positive long boardId) {
        Board board = boardService.readBoard(boardId);

        if (board == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        board.setDeletedAt(LocalDateTime.now());

        Board deletedBoard = boardService.updateBoard(board);

        if (deletedBoard == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PostMapping("/like/{board-id}")
    public ResponseEntity likeBoard(@PathVariable("board-id") @Positive long boardId) {
        Board likedBoard = boardService.likeBoard(boardId);
        return new ResponseEntity<>(new SingleResponseDto<>(boardMapper.boardToBoardResponse(likedBoard)), HttpStatus.OK);
    }

    @PostMapping("/dislike/{board-id}")
    public ResponseEntity dislikeBoard(@PathVariable("board-id") @Positive long boardId) {
        Board dislikedBoard = boardService.dislikeBoard(boardId);
        return new ResponseEntity<>(new SingleResponseDto<>(boardMapper.boardToBoardResponse(dislikedBoard)), HttpStatus.OK);
    }

//    @DeleteMapping("/{board-id}/hard")
//    public ResponseEntity harddeleteBoard(@PathVariable("board-id") long boardId) {
//        boardService.deleteBoard(boardId);
//
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
//@GetMapping("/{board-id}/edit")
//public ResponseEntity<BoardDetailDto> editBoard(@PathVariable("board-id") @Positive long boardId) {
//    Board board = boardService.readBoard(boardId);
//
//    if (board == null) {
//        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//
//    // Board 엔티티를 BoardDetailDto로 변환
//    BoardDetailDto boardDetailDto = boardMapper.boardToBoardDetailDto(board);
//
//    return new ResponseEntity<>(boardDetailDto, HttpStatus.OK);
//}

}
