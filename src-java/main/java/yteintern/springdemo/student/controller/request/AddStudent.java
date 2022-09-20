package yteintern.springdemo.student.controller.request;

import yteintern.springdemo.authentication.entity.Authority;
import yteintern.springdemo.student.entity.Student;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;

public record AddStudent(


        String name,
        String surname,
        @Email
        String mail,
        @NotBlank
        String username,
        @NotBlank
        String password

) {
    public Student toEntity() {

        return new Student( name,surname,name+"."+surname+"@gmail.com", username,password, List.of(new Authority("Student")) );
    }


}