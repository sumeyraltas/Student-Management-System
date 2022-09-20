package yteintern.springdemo.lecturer.controller.request;

import yteintern.springdemo.authentication.entity.Authority;
import yteintern.springdemo.lecturer.entity.Lecturer;

import java.util.List;

public record AddLecturer(
    String name,

    String surname,

    String username,

    String password
){
        public Lecturer toDomainEntity(){

            return new Lecturer(name, surname, name+"."+surname , password, List.of(new Authority("Lecturer")));
        }
    }