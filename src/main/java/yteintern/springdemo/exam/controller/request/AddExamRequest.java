package yteintern.springdemo.exam.controller.request;

import yteintern.springdemo.exam.entity.Exam;

public record AddExamRequest(
        String name,
        String room,
        String time,
        String information,
        Long lectureId
) {
    public Exam toDomainEntity() {
        return new Exam(name, room,time,information,lectureId);

    }
}