package com.example.tset.board.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Builder
@Getter
@Setter
public class BoardReponseDto {
    private long broadId;
    private String title;
    private String content;
}
