package com.example.tset.board.dto;


import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Builder
@Getter
public class BroadReponseDto {
    private long broadId;
    private String title;
    private String content;
//    private LocalDateTime localDateTime;
}
