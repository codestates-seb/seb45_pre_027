package cs.pre.project.domain.answer.entiry;

import com.fasterxml.jackson.annotation.JsonIgnore;
import cs.pre.project.domain.audit.Auditable;
import cs.pre.project.domain.board.entity.Board;
import cs.pre.project.domain.comment.entity.Comment;
import cs.pre.project.domain.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Answer extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "answer_id")
    private Long id;

    private String content;

    @ManyToOne
    @JoinColumn(name = "board_id")
    @JsonIgnore
    private Board board;

    @OneToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany
    @JoinColumn(name = "answer")
    private List<Comment> commentEntity = new ArrayList<>();
}
