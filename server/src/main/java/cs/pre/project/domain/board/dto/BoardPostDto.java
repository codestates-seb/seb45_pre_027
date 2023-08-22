package cs.pre.project.domain.board.dto;


import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
public class BoardPostDto {

    @NotBlank(message = "title은 비어 있으면 안됩니다")
    private String title;
    @NotBlank(message = "content은 비어 있으면 안됩니다")
    private String content;
    @NotBlank(message = "expecting는 비어 있으면 안됩니다")
    private String expecting;

    private LocalDateTime createdAt;

    private LocalDateTime updateAt;

    private LocalDateTime deletedAt;

}


