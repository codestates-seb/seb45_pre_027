package cs.pre.project.domain.comment.dto;

import lombok.Getter;

import java.time.LocalDateTime;

public class CommentDto {

    @Getter
    public static class Post {
        private String content;
    }

    @Getter
    public static class Patch {
        private String content;
    }

    @Getter
    public static class Reponse {
        private Long commentId;

        private String content;

        private LocalDateTime createdAt;

        private LocalDateTime updateAt;

        private LocalDateTime deletedAt;

    }
}
