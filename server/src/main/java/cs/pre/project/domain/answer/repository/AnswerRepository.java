package cs.pre.project.domain.answer.repository;

import cs.pre.project.domain.answer.entiry.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {

    List<Answer> findByBoard_BoardId(Long boardId);
}
