package yteintern.springdemo.lecturer.entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
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
@DiscriminatorValue("3")
public class Lecturer extends CustomUser {

    private String name;
    private String surname;

    public Lecturer(String name, String surname, String username, String password, List<Authority> authorities) {
        this.name = name;
        this.surname = surname;
        this.setAuthorities(authorities);
        this.setPassword(password);
        this.setUsername(username);
    }
    public void update(Lecturer updateLecturer) {
        this.name = updateLecturer.name;
        this.surname = updateLecturer.surname;
        this.setPassword(updateLecturer.getPassword());
    }

}
