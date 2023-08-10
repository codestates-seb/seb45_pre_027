package com.example.tset.board.dto;


import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
public class BoardPatchDto {

    private long boardId;

    private String title;

    private String problem;

    private String expecting;

    private Timestamp updatedat;

    public void setBroadId(long boardId) {
        this.boardId = boardId;
    }

}
