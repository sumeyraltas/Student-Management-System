package yteintern.springdemo.assistant.entity;

import lombok.Getter;
import lombok.Setter;
import yteintern.springdemo.authentication.entity.Authority;
import yteintern.springdemo.authentication.entity.CustomUser;
import yteintern.springdemo.lecturer.entity.Lecturer;
import yteintern.springdemo.BaseEntity;

import javax.persistence.*;
import java.util.List;

@Entity
@Setter
@Getter
@DiscriminatorValue("4")
public class Assistant extends CustomUser {
    private String name;
    private String surname;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "lecturer_id", referencedColumnName = "ID")
    private Lecturer lecturer;

    public Assistant() {
    }

    public Assistant(String name, String surname, String username, String password, Long academicianId, List<Authority> authorities) {
        this.name = name;
        this.surname = surname;
        this.setAuthorities(authorities);
        this.setPassword(password);
        this.setUsername(username);
        this.lecturer = new Lecturer();
        this.lecturer.setId(academicianId);
    }

    public void update(Assistant updateAssistant) {
        this.name = updateAssistant.name;
        this.surname = updateAssistant.surname;
        this.setPassword(updateAssistant.getPassword());
        this.lecturer = updateAssistant.lecturer;
    }


}
