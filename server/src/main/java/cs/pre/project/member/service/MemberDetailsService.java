package cs.pre.project.member.service;

import cs.pre.project.member.entity.Member;
import cs.pre.project.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        log.info("email : " + email);

        Optional<Member> member = memberRepository.findByEmail(email);

        return new MemberDetails(member);
    }

    private class MemberDetails implements UserDetails {

        private Optional<Member> member;

        public MemberDetails(Optional<Member> member) {
            this.member = member;
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            Collection<GrantedAuthority> collect = new ArrayList<>();

            collect.add(new GrantedAuthority() {
                @Override
                public String getAuthority() {
                    return member.get().getRole();
                }
            });

            return collect;
        }

        @Override
        public String getUsername() {
            return member.get().getEmail();
        }

        @Override
        public String getPassword() {
            return member.get().getPassword();
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
