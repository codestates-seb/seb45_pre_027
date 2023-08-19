package cs.pre.project.domain.member.entity;

import cs.pre.project.domain.answer.entiry.Answer;
import cs.pre.project.domain.board.entity.Board;
import cs.pre.project.domain.member.dto.MemberPostDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    private String username;
    private String email;
    private String password;

    @OneToMany(mappedBy = "member")
    private List<Board> boards = new ArrayList<>();

    @OneToOne(mappedBy = "member")
    private Answer answer;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    public Member(MemberPostDto memberPostDto) {
        email = memberPostDto.getEmail();
        password = memberPostDto.getPassword();
    }
}
