package com.example.tset.board.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class BroadEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long broadId;

    private String title;

    private String content;

//    private LocalDateTime localDateTime;

//    @ManyToOne
//      @JoinColumn(name = "member-id")
//    private List<MemberBroad> memberBroads = new ArrayList<>();

}
