package com.example.tset.board.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class BoardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long broadId;

    private String title;

    private String content;

    private Timestamp createdat;

    private Timestamp deletedat;

    private Timestamp updatedat;

    private int view;




    //    @ManyToOne
//    @JoinColumn(name = "member-id")
//    private List<MemberBroad> memberBroads = new ArrayList<>();

}
