package yteintern.springdemo.lecture.controller.request;

import yteintern.springdemo.lecture.entity.Lecture;

import java.time.LocalDateTime;

public record AddLecture(

         String name,

         String definition,

         String type,

         String lectureCode,

         LocalDateTime time,

         String lectureRoom,

         String source,

         Long lecturerId,

         Long assistantId) {

    public Lecture toDomainEntity(){
        return new Lecture
                (name, definition,type,lectureCode,time,lectureRoom,lecturerId,assistantId);
    }
}
