package cs.pre.project.domain.board.controller;


import cs.pre.project.domain.answer.entiry.Answer;
import cs.pre.project.domain.answer.mapper.AnswerMapper;
import cs.pre.project.domain.answer.service.AnswerService;
import cs.pre.project.domain.board.dto.BoardPatchDto;
import cs.pre.project.domain.board.dto.BoardPostDto;
import cs.pre.project.domain.board.entity.Board;
import cs.pre.project.domain.board.mapper.BoardMapper;
import cs.pre.project.domain.board.reponse.MultiResponseDto;
import cs.pre.project.domain.board.reponse.SingleResponseDto;
import cs.pre.project.domain.board.service.BoardService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/board")
@CrossOrigin("*")
@Validated
public class BoardController {
    private BoardService boardService;
    private BoardMapper boardMapper;

    public BoardController(BoardService boardService, BoardMapper boardMapper, AnswerService answerService, AnswerMapper answerMapper) {
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
    @CrossOrigin(origins = "https://localhost:8080", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS})
    public ResponseEntity getBoard(@PathVariable("board-id") @Positive long boardId) {
        Board board = boardService.readBoard(boardId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(boardMapper.boardToBoardResponse(board)), HttpStatus.OK);
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
