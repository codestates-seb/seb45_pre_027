package com.example.tset.board.dto;


import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;

@Getter
@Setter
public class BoardPatchDto {

    private long boardId;

    @NotBlank(message = "title은 비어 있으면 안됩니다")
    private String title;
    @NotBlank(message = "problem은 비어 있으면 안됩니다")
    private String problem;
    @NotBlank(message = "expecting는 비어 있으면 안됩니다")
    private String expecting;

    public void setBroadId(long boardId) {
        this.boardId = boardId;
    }

}
