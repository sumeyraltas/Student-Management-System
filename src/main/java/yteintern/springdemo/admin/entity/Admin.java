package yteintern.springdemo.admin.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import yteintern.springdemo.BaseEntity;
import yteintern.springdemo.authentication.entity.Authority;
import yteintern.springdemo.authentication.entity.CustomUser;


import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@DiscriminatorValue("2")
public class Admin extends CustomUser {

    public Admin(String username, String password, List<Authority> authorities) {
        this.setAuthorities(authorities);
        this.setPassword(password);
        this.setUsername(username);
    }

    public void update(Admin updateAdmin) {
        this.setUsername(updateAdmin.getUsername());
        this.setPassword(updateAdmin.getPassword());
    }
}