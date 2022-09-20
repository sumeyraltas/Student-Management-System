package yteintern.springdemo.homework.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import yteintern.springdemo.assistant.entity.Assistant;
import yteintern.springdemo.lecture.entity.Lecture;
import yteintern.springdemo.BaseEntity;

import javax.persistence.*;

@Entity(name = "homework")
@Getter
@Setter
@NoArgsConstructor
public class Homework extends BaseEntity {

    private String definition;
    private String PDF;
    private String deadline;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "assistant_id", referencedColumnName = "ID")
    private Assistant assistant;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "lecture_id", referencedColumnName = "ID")
    private Lecture lecture;

    public Homework(String definition, String PDF, String deadline,
                    Long assistantId, Long lectureId) {
        this.definition = definition;
        this.PDF = PDF;
        this.deadline = deadline;

        this.assistant=new Assistant();
        this.assistant.setId(assistantId);
        
        this.lecture=new Lecture();
        this.lecture.setId(lectureId);
    }

    public void update(Homework updateHomework) {
        this.definition = updateHomework.definition;
        this.PDF = updateHomework.PDF;
        this.deadline = updateHomework.deadline;
    }
}
