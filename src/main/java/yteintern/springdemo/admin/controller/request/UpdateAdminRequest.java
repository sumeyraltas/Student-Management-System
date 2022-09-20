package yteintern.springdemo.admin.controller.request;

import yteintern.springdemo.admin.entity.Admin;
import yteintern.springdemo.authentication.entity.Authority;

import java.util.List;

public record UpdateAdminRequest(
        String username,
        String password
) {
    public Admin toDomainEntity() {
        return new Admin(username, password, List.of(new Authority("Admin")));

    }

}