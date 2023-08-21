package cs.pre.project.domain.answer.mapper;

import cs.pre.project.domain.answer.dto.AnswerDto;
import cs.pre.project.domain.answer.entiry.Answer;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    Answer answerPostToAnswer(AnswerDto.Post answerPostDto);
    Answer answerPatchToAnswer(AnswerDto.Patch answerPostDto);
}
