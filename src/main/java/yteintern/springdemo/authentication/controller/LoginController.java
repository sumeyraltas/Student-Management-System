package yteintern.springdemo.authentication.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import yteintern.springdemo.Response;
import yteintern.springdemo.authentication.service.LoginService;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @PostMapping("/login")
    public Response login(@RequestBody @Valid LoginRequest loginRequest) {
        return loginService.login(loginRequest);
    }


}