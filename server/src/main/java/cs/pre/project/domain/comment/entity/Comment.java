package cs.pre.project.domain.comment.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import cs.pre.project.domain.answer.entiry.Answer;
import cs.pre.project.domain.audit.Auditable;
import cs.pre.project.domain.board.entity.Board;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Comment extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private long id;

    private String content;

    @ManyToOne
    @JoinColumn(name = "board_id")
    @JsonIgnore
    private Board board;

    @ManyToOne
    @JoinColumn(name = "answer_id")
    @JsonIgnore
    private Answer answer;
}
