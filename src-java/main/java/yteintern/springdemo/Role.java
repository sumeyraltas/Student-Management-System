package yteintern.springdemo;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
    Lecturer,
    Student,
    Admin,
    Assistant;

    @Override
    public String getAuthority() {
        return name();
    }
}