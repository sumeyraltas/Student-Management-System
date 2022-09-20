package yteintern.springdemo.exam.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import yteintern.springdemo.lecture.entity.Lecture;
import yteintern.springdemo.BaseEntity;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Exam extends BaseEntity {

    private String name;
    private String room;
    private String time;
    private String information;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "lecture_id", referencedColumnName = "ID")
    private Lecture lecture;

    public Exam(String name, String room, String time, String information, Long lectureId) {
        this.name = name;
        this.room = room;
        this.time = time;
        this.information = information;

        this.lecture =new Lecture();
        this.lecture.setId(lectureId);
    }

    public void update(Exam updateExam) {
        this.name = updateExam.name;
        this.room = updateExam.room;
        this.time = updateExam.time;
        this.information = updateExam.information;

    }
}
