package cs.pre.project.domain.answer.controller;

import cs.pre.project.domain.answer.dto.AnswerDto;
import cs.pre.project.domain.answer.entiry.Answer;
import cs.pre.project.domain.answer.mapper.AnswerMapper;
import cs.pre.project.domain.answer.service.AnswerService;
import cs.pre.project.domain.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/answer")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin("*")
public class AnswerController {

    private final AnswerService answerService;

    private final BoardService boardService;

    private final AnswerMapper answerMapper;

    @GetMapping("/{board-id}")
    public ResponseEntity getAnswers(@PathVariable("board-id") Long boardId) {

        return new ResponseEntity<>(answerService.readAnswers(boardId), HttpStatus.OK);
    }

    @PostMapping("/{board-id}")
    public ResponseEntity addAnswer(@PathVariable("board-id") Long boardId,
                       @RequestBody AnswerDto.Post requestBody) {

        Answer answer = answerMapper.answerPostToAnswer(requestBody);

        answer.setBoard(boardService.findVerifiedBoard(boardId));


        return new ResponseEntity<>(answerService.createAnswer(answer), HttpStatus.OK);
    }

    @PatchMapping("/{answer-id}")
    public void patchAnswer(@PathVariable("answer-id") Long answerId,
                       @RequestBody AnswerDto.Patch requestBody) {

        Answer answer = answerMapper.answerPatchToAnswer(requestBody);
        answer.setId(answerId);

        answerService.updateAnswer(answer);

    }

    @DeleteMapping("/{answer-id}")
    public void deleteAnswer(@PathVariable("answer-id") Long answerId) {
        answerService.deleteAnswer(answerId);
    }

}
