package yteintern.springdemo.student.controller.request;


import yteintern.springdemo.authentication.entity.Authority;
import yteintern.springdemo.student.entity.Student;

import java.util.List;

public record UpdateStudent(
        String name,
        String surname,
        String email,
        String username,
        String password
) {

    public Student toEntity() {
        return new Student(name, surname, email, username, password, List.of(new Authority("STUDENT")));
    }
}