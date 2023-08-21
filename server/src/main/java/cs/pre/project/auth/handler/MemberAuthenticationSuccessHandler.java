package cs.pre.project.auth.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class MemberAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        log.info("로그인 성공");
        log.info("request : " + request);
        log.info("response : " + response);
        log.info("authentication.getName() : " + authentication.getName());
        log.info("authentication.getPrincipal() : " + authentication.getPrincipal());
        log.info("authentication.getDetails() : " + authentication.getDetails());
    }
}
