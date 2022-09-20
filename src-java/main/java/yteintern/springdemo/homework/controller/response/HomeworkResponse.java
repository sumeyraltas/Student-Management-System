package yteintern.springdemo.homework.controller.response;

import yteintern.springdemo.homework.entity.Homework;

public record HomeworkResponse(
        Long id,
        String definition,
        String PDF,
        String deadline,
        Long assistantId,
        Long lectureId
) {
    public HomeworkResponse(Homework homework) {
        this(
                homework.getId(),
                homework.getDefinition(),
                homework.getPDF(),
                homework.getDeadline(),
                homework.getLecture().getId(),
                homework.getAssistant().getId()

        );
    }
}