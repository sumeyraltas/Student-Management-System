package yteintern.springdemo.homework.controller.request;

import yteintern.springdemo.homework.entity.Homework;

public record AddHomeworkRequest(

        String definition,
        String PDF,
        String deadline,

        Long assistantId,
        Long lectureId

) {

    public Homework toDomainEntity(){
        return  new Homework(definition,PDF,deadline,assistantId,lectureId);
    }
}