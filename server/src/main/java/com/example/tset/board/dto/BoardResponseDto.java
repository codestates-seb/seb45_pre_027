package com.example.tset.board.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class BoardResponseDto {
    private long boardId;

    private String title;

    private String problem;

    private String expecting;

}
