package cs.pre.project.domain.answer.service;

import cs.pre.project.domain.answer.entiry.Answer;
import cs.pre.project.domain.answer.repository.AnswerRepository;
import cs.pre.project.domain.board.entity.Board;
import cs.pre.project.domain.board.exception.BusinessLogicException;
import cs.pre.project.domain.board.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class AnswerService {

    private final AnswerRepository answerRepository;

    public List<Answer> readAnswers(Long boardId) {
        List<Answer> findAnswers = answerRepository.findByBoard_BoardId(boardId);

        return findAnswers;
    }

    @Transactional
    public Answer createAnswer(Answer answer) {
        Answer saveAnswer = answerRepository.save(answer);

        return saveAnswer;
    }

    @Transactional
    public void updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getId());

        findAnswer.setContent(answer.getContent());
        findAnswer.setUpdateAt(LocalDateTime.now());
    }

    @Transactional
    public void deleteAnswer(Long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.setDeletedAt(LocalDateTime.now());
    }


    public Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> findAnswer = answerRepository.findById(answerId);

        if (findAnswer.isPresent())
            return findAnswer.get();
        else throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND);
    }
}
