package cs.pre.project.member.controller;

import cs.pre.project.member.dto.MemberPostDto;
import cs.pre.project.member.entity.Member;
import cs.pre.project.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
@CrossOrigin("*")
@Slf4j
public class MemberController {

    private final MemberService memberService;

    @PostMapping
    public ResponseEntity signUp(@RequestBody MemberPostDto memberPostDto) {
        Member member = new Member(memberPostDto);

        Long memberId = memberService.createMember(member);

        return new ResponseEntity(memberId, HttpStatus.CREATED);
    }
}
