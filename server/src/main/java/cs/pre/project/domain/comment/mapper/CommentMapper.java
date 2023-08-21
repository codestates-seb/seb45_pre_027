package cs.pre.project.domain.comment.mapper;


import cs.pre.project.domain.comment.dto.CommentDto;
import cs.pre.project.domain.comment.entity.Comment;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommentMapper {

    Comment commentPostToComment(CommentDto.Post commentPostDto);
    Comment commentPatchToComment(CommentDto.Patch commentPatchDto);
    CommentDto.Reponse commnetToCommentResponse(Comment comment);
}
