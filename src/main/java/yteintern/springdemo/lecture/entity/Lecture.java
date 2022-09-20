package yteintern.springdemo.lecture.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import yteintern.springdemo.assistant.entity.Assistant;
import yteintern.springdemo.lecturer.entity.Lecturer;
import yteintern.springdemo.BaseEntity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "lectures")
@Getter
@Setter
@NoArgsConstructor
public class Lecture extends BaseEntity {

    private String name;

    private String definition;

    private String type;

    private String lectureCode;

    private LocalDateTime time;

    private String lectureRoom;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "lecturer_id", referencedColumnName = "ID")
    private Lecturer lecturer;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "assistant_id",referencedColumnName = "ID")
    private Assistant assistant;


    public Lecture(String name,
                  String definition,
                  String type,
                  String lectureCode,
                  LocalDateTime time, //localtime
                  String lectureRoom,


                  Long lecturerId,
                  Long assistantId) {

        this.name = name;
        this.definition = definition;
        this.type = type;
        this.lectureCode = lectureCode;
        this.time = time;
        this.lectureRoom = lectureRoom;


        this.lecturer = new Lecturer();
        this.lecturer.setId(lecturerId);

        this.assistant = new Assistant();
        this.assistant.setId(assistantId);
    }


    public void update(Lecture updateLecture) {
        this.name = updateLecture.name;
        this.definition = updateLecture.definition;
        this.type = updateLecture.type;
        this.lectureCode = updateLecture.lectureCode;
        this.time = updateLecture.time;
        this.lectureRoom = updateLecture.lectureRoom;

        this.lecturer = updateLecture.lecturer;
        this.assistant=updateLecture.assistant;
    }
}

