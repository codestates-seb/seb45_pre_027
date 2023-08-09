package com.example.tset.board.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

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

    private LocalDateTime localDateTime;

//    @ManyToOne
//      @JoinColumn(name = "member-id")
//    private List<MemberBroad> memberBroads = new ArrayList<>();

}
