package yteintern.springdemo.student.entity;


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
@NoArgsConstructor
@Setter
@DiscriminatorValue("1")
public class Student extends CustomUser {

    private String name;
    private String surname;
    private String email;

    public Student(String name, String surname, String email, String username, String password, List<Authority> authorities) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.setAuthorities(authorities);
        this.setPassword(password);
        this.setUsername(username);
    }

    public void update(Student updatedStudent) {
        this.name = updatedStudent.name;
        this.surname = updatedStudent.surname;
        this.email = updatedStudent.email;
    }

}