package yteintern.springdemo.authentication.controller;

import javax.validation.constraints.NotEmpty;
public record LoginRequest(

        @NotEmpty
        String username,
        @NotEmpty
        String password


) {
}