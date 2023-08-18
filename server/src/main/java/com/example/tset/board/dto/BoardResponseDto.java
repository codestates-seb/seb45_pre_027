package com.example.tset.board.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Builder
@Getter
@Setter
public class BoardResponseDto {

    private long boardId;

    private String title;
    private String content;
    private String expecting;
    private int view;
    private int likes;
    private int dislikes;

    private LocalDateTime createdAt;

    private LocalDateTime updateAt;

    private LocalDateTime deletedAt;

}
