package cs.pre.project.domain.comment.repostitory;

import cs.pre.project.domain.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentResitory extends JpaRepository<Comment, Long> {

    List<Comment> findByBoard_BoardId(Long boardId);

    List<Comment> findByAnswer_Id(Long answerId);
}
