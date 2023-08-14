package com.example.tset.board.mapper;


import com.example.tset.board.dto.*;
import com.example.tset.board.entity.Board;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardMapper {
    Board boardPostToBoard(BoardPostDto boardPostDto);
    Board boardPatchToBoard(BoardPatchDto boardPatchDto);
    BoardDto.Reponse boardToBoardResponse(Board board);
    List<BoardResponseDto> boardsToBoardResponseDto(List<Board> boards);

    BoardDetailDto boardToBoardDetailDto(Board board);
}
