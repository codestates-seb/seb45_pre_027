package com.example.tset.board.dto;


import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class BoardReponseDto {
    private long broadId;
    private String title;
    private String content;
//    private LocalDateTime localDateTime;
}
