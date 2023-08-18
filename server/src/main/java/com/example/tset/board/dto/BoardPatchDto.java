package com.example.tset.board.dto;


import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@Setter
public class BoardPatchDto {

    private long boardId;

    @NotBlank(message = "title은 비어 있으면 안됩니다")
    private String title;
    @NotBlank(message = "content은 비어 있으면 안됩니다")
    private String content;
    @NotBlank(message = "expecting는 비어 있으면 안됩니다")
    private String expecting;

    private LocalDateTime updateAt;

    public void setBroadId(long boardId) {
        this.boardId = boardId;
    }

}
