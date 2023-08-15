package cs.pre.project.member.entity;

import cs.pre.project.member.dto.MemberPostDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter @Setter
@NoArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    private String password;
    private String role;

    public Member(MemberPostDto memberPostDto) {
        email = memberPostDto.getEmail();
        password = memberPostDto.getPassword();
    }
}
