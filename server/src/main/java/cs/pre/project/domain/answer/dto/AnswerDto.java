package cs.pre.project.domain.answer.dto;

import lombok.Getter;

import java.time.LocalDateTime;

public class AnswerDto {

    @Getter
    public static class Post {
        private String content;
    }

    @Getter
    public static class Patch {
        private String content;
    }

    @Getter
    public static class response {
        private Long answerId;

        private String content;

        private LocalDateTime createdAt;

        private LocalDateTime updateAt;

        private LocalDateTime deletedAt;
    }
}
