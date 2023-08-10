package com.example.tset.board.dto;


import lombok.Getter;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
public class BoardPostDto {

    private String title;

    private String problem;

    private String expecting;

    private Timestamp createdat;
}


