package yteintern.springdemo.authentication.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import yteintern.springdemo.Response;
import yteintern.springdemo.ResponseType;
import yteintern.springdemo.authentication.controller.LoginRequest;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final AuthenticationManager authenticationManager;
    public  String authority = " ";
    public Response login(LoginRequest loginRequest) {


        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(loginRequest.username(), loginRequest.password());

        Authentication authenticatedAuthentication = authenticationManager.authenticate(token);

        SecurityContext newContext = SecurityContextHolder.createEmptyContext();
        newContext.setAuthentication(authenticatedAuthentication);
        SecurityContextHolder.setContext(newContext);
        System.out.println(newContext.getAuthentication().getAuthorities());
        authority = newContext.getAuthentication().getAuthorities().stream().toList().get(0).getAuthority();
        return new Response(ResponseType.SUCCESS, "Login is successful", authority);
    }
}