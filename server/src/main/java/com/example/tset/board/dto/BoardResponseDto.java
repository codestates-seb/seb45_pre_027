package com.example.tset.board.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Builder
@Getter
@Setter
public class BoardResponseDto {
    private long boardId;

    private String title;

    private String content;

    private String expecting;

}
