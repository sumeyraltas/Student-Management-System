package yteintern.springdemo.exam.controller.request;

import yteintern.springdemo.exam.entity.Exam;

public record UpdateExamRequest(


        String name,
        String room,
        String time,
        String info,
        Long lectureId
) {
    public Exam toDomainEntity() {
        return new Exam(name, room, time, info,lectureId);
    }

}