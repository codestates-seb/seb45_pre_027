package cs.pre.project.domain.board.entity;


import cs.pre.project.domain.board.audit.Auditable;
import cs.pre.project.domain.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;

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

//    @ManyToOne
//    @JoinColumn(name = "member_id")
//    private Member member;

}
