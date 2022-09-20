package yteintern.springdemo.student.controller.response;

import yteintern.springdemo.student.entity.Student;

public record StudentResponse(

        Long id,
        String name,
        String surname,

        String email,
        String username,
        String password

) {
    public static StudentResponse fromEntity(Student student) {
        return new StudentResponse(
                student.getId(),
                student.getName(),
                student.getSurname(),
                student.getEmail(),
                student.getUsername(),
                student.getPassword()

        );
    }
}