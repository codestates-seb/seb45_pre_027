package cs.pre.project.domain.board.mapper;


import cs.pre.project.domain.board.dto.BoardDto;
import cs.pre.project.domain.board.dto.BoardPatchDto;
import cs.pre.project.domain.board.entity.Board;
import cs.pre.project.domain.board.dto.BoardPostDto;
import cs.pre.project.domain.board.dto.BoardResponseDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardMapper {
    Board boardPostToBoard(BoardPostDto boardPostDto);
    Board boardPatchToBoard(BoardPatchDto boardPatchDto);
    BoardDto.Reponse boardToBoardResponse(Board board);
    List<BoardResponseDto> boardsToBoardResponseDto(List<Board> boards);

//    BoardDetailDto boardToBoardDetailDto(Board board);
}
