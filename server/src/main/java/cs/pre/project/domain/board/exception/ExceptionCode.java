package cs.pre.project.domain.board.exception;

import lombok.Getter;

public enum ExceptionCode {
    TITLE_NOT_FOUND(404, "Title not found"),
    TITLE_EXISTS(409, "Title exists");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
