package com.example.tset.board.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardPatchDto {

    private long broadId;

    private String title;

    private String problem;

    private String expecting;

    public void setBroadId(long broadId) {
        this.broadId = broadId;
    }

}
