package cs.pre.project.domain.board.reponse;


import lombok.AllArgsConstructor;
import lombok.Getter;


@AllArgsConstructor
@Getter
public class SingleResponseDto<T> {
    private T board;
}
