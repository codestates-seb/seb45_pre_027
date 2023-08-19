package cs.pre.project.domain.member.service;

import cs.pre.project.auth.MemberAuthority;
import cs.pre.project.domain.member.entity.Member;
import cs.pre.project.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;
    private final MemberAuthority memberAuthority;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Member> member = memberRepository.findByEmail(email);

        Member findMember = member.orElseThrow();

        return new MemberDetails(findMember);
    }

    private class MemberDetails extends Member implements UserDetails {

        MemberDetails(Member member) {
            setEmail(member.getEmail());
            setPassword(member.getPassword());
        }


        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return memberAuthority.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() {
            return getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}
