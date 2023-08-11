package com.example.tset.board.entity;


import com.example.tset.board.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;          // 엔티티 클래스마다 공통으로 존재하는 엔티티 생성일, 수정일, 작성자 등의
                                     // 필드를 공통화한 뒤, 엔티티에 대한 이벤트 발생 시 해당 필드의 값을 자동으로 채워주는 기능을 합니다.
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
    private String problem;

    @Column(length = 1000, nullable = false)
    private String expecting;

    private Timestamp createdat;

    private Timestamp deletedat;

    private Timestamp updatedat;

    private int view;


    //    @ManyToOne
//    @JoinColumn(name = "member-id")
//    private List<MemberBroad> memberBroads = new ArrayList<>();

}
