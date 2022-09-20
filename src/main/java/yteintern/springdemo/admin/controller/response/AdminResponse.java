package yteintern.springdemo.admin.controller.response;

import yteintern.springdemo.admin.entity.Admin;
public record AdminResponse(
        Long id,
        String username,
        String password
) {
    public AdminResponse(Admin admin) {
        this(
                admin.getId(),
                admin.getUsername(),
                admin.getPassword()
        );
    }
}