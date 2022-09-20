package yteintern.springdemo.homework.controller.request;

import yteintern.springdemo.homework.entity.Homework;

public record UpdateHomeworkRequest(

        String definition,
        String PDF,
        String deadline,
        Long lectureId,
        Long assistantId

) {

    public Homework toDomainEntity(){
        return  new Homework(definition,PDF,deadline,lectureId,assistantId);
    }
}


