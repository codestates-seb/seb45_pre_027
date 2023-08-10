package com.example.tset.board.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;

public class BoardDto {

    @Getter
    @AllArgsConstructor
    public static class Post {
        private String title;

        private String problem;

        private String expecting;

        private Timestamp createdat;
    }

    @Getter
    public static class Patch {
        private long boardId;

        private String title;

        private String problem;

        private String expecting;

        private Timestamp updatedat;

        public void setBroadId(long boardId) {
            this.boardId = boardId;
        }
    }

    @Builder
    @Getter
    public static class Reponse {
        private long boardId;

        private String title;

        private String problem;

        private String expecting;
    }
}
