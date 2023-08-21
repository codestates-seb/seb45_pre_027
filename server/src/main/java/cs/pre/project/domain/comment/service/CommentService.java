package cs.pre.project.domain.comment.service;

import cs.pre.project.domain.board.exception.BusinessLogicException;
import cs.pre.project.domain.board.exception.ExceptionCode;
import cs.pre.project.domain.comment.entity.Comment;
import cs.pre.project.domain.comment.repostitory.CommentResitory;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
@RequiredArgsConstructor
@Slf4j
public class CommentService {
    private final CommentResitory commentResitory;

    public List<Comment> readboardComments(Long boardId) {
        List<Comment> findComments = commentResitory.findByBoard_BoardId(boardId);

        return findComments;
    }

    public List<Comment> readanswerComments(Long answerId) {
        List<Comment> findComments = commentResitory.findByAnswer_Id(answerId);

        return findComments;
    }

    @Transactional
    public Comment createComment(Comment comment) {
        Comment saveComment = commentResitory.save(comment);

        return saveComment;
    }

    @Transactional
    public void updateComment(Comment comment) {
        Comment findComment = findVerifiedAnswer(comment.getId());

        findComment.setContent(comment.getContent());
        findComment.setUpdateAt(LocalDateTime.now());
    }

    @Transactional
    public void deleteComment(Long commentId) {
        Comment findCommnet = findVerifiedAnswer(commentId);
        findCommnet.setDeletedAt(LocalDateTime.now());
    }

    public Comment findVerifiedAnswer(Long commentId) {
        Optional<Comment> findComment = commentResitory.findById(commentId);

        if (findComment.isPresent())
            return findComment.get();
        else throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND);
    }


}
