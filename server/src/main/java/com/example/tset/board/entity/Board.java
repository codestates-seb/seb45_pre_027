package com.example.tset.board.entity;


import com.example.tset.board.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;

import javax.persistence.*;

import java.sql.Timestamp;

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
//    @JoinColumn(name = "member-id")
//    private List<MemberBroad> memberBroads = new ArrayList<>();

//    @OneToMany
//    @JoinColumn(name = "anwser-id")

}
