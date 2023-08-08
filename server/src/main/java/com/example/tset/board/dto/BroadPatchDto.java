package com.example.tset.board.dto;


import lombok.Getter;

@Getter
public class BroadPatchDto {

    private long broadId;

    private String title;

    private String content;

    public void setBroadId(long broadId) {
        this.broadId = broadId;
    }
}
