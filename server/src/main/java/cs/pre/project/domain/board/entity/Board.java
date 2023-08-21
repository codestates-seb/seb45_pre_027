package cs.pre.project.domain.board.entity;


import cs.pre.project.domain.answer.entiry.Answer;
import cs.pre.project.domain.audit.Auditable;
import cs.pre.project.domain.comment.entity.Comment;
import cs.pre.project.domain.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Board extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long boardId;

    @Column(length = 50, nullable = false)
    private String title;

    @Column(length = 1000, nullable = false)
    private String content;

    @Column(length = 1000, nullable = false)
    private String expecting;

    private int view;

    public void incrementView() {
        this.view++;
    }

    private int likes = 0;

    private int dislikes = 0;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "board")
    private List<Answer> answer = new ArrayList<>();

    @OneToMany(mappedBy = "board")
    private List<Comment> commentEntitiy = new ArrayList<>();
}
