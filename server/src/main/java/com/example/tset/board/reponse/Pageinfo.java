package com.example.tset.board.reponse;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class Pageinfo {

    private int page;
    private int size;
    private int totalElements;
    private int totalPages;
}
