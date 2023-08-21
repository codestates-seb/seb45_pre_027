package cs.pre.project.domain.comment.comtroller;


import cs.pre.project.domain.answer.service.AnswerService;
import cs.pre.project.domain.board.service.BoardService;
import cs.pre.project.domain.comment.dto.CommentDto;
import cs.pre.project.domain.comment.entity.Comment;
import cs.pre.project.domain.comment.mapper.CommentMapper;
import cs.pre.project.domain.comment.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/comment")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CommentController {

    private final CommentService commentService;

    private final AnswerService answerService;

    private final BoardService boardService;

    private final CommentMapper commentMapper;

    @PostMapping("/board/{board-id}")
    public ResponseEntity addboardComment(@PathVariable("board-id") Long boardId,
        @RequestBody CommentDto.Post requestBody) {

        Comment comment = commentMapper.commentPostToComment(requestBody);
        comment.setBoard(boardService.findVerifiedBoard(boardId));

        return new ResponseEntity<>(commentService.createComment(comment), HttpStatus.OK);
    }

    @PostMapping("/answer/{answer-id}")
    public ResponseEntity addanswerComment(@PathVariable("answer-id") Long answerId,
                                          @RequestBody CommentDto.Post requestBody) {
        Comment comment = commentMapper.commentPostToComment(requestBody);

        comment.setAnswer(answerService.findVerifiedAnswer(answerId));

        return new ResponseEntity<>(commentService.createComment(comment), HttpStatus.OK);
    }

    @PatchMapping("/board/{comment-id}")
    public void patchboardComment(@PathVariable("comment-id") Long commentId,
                             @RequestBody CommentDto.Patch requestBody) {

        Comment comment = commentMapper.commentPatchToComment(requestBody);
        comment.setId(commentId);

        commentService.updateComment(comment);
    }
    @PatchMapping("/answer/{comment-id}")
    public void patchanswerComment(@PathVariable("comment-id") Long commentId,
                             @RequestBody CommentDto.Patch requestBody) {

        Comment comment = commentMapper.commentPatchToComment(requestBody);
        comment.setId(commentId);

        commentService.updateComment(comment);
    }

    @DeleteMapping("/{comment-id}")
    public void deleteComment(@PathVariable("comment-id") Long commentId) {
        commentService.deleteComment(commentId);
    }
}
