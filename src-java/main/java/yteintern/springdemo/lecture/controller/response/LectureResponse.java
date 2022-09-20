package yteintern.springdemo.lecture.controller.response;


import yteintern.springdemo.lecture.entity.Lecture;


import java.time.LocalDateTime;

public record LectureResponse(
        Long id,
        String name,
        String definition,
        String type,
        String code,

        LocalDateTime time,
        String room

) {
    public LectureResponse(Lecture lecture) {
        this(
                lecture.getId(),
                lecture.getName(),
                lecture.getDefinition(),
                lecture.getType(),
                lecture.getLectureCode(),
                lecture.getTime(),
                lecture.getLectureRoom()
        );
    }


}