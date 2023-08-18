package cs.pre.project.member.service;

import cs.pre.project.member.entity.Member;
import cs.pre.project.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public Long createMember(Member member) {
        member.setPassword(passwordEncoder.encode(member.getPassword()));

        return memberRepository.save(member).getId();
    }
}
