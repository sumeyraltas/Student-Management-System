package yteintern.springdemo.lecturer.controller.response;

import yteintern.springdemo.lecturer.entity.Lecturer;

public record LecturerResponse(
        Long id,
        String name,
        String surname,
        String username,
        String password
) {
    public LecturerResponse(Lecturer lecturer){
        this(
                lecturer.getId(),
                lecturer.getName(),
                lecturer.getSurname(),
                lecturer.getUsername(),
                lecturer.getPassword()
        );
    }

}
