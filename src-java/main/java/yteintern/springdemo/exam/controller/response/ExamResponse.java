package yteintern.springdemo.exam.controller.response;


import yteintern.springdemo.exam.entity.Exam;

public record ExamResponse(

        Long id,
        String name,
        String room,
        String time,
        String info,
        Long lectureId
) {


    public ExamResponse(Exam exam) {
        this(
                exam.getId(),
                exam.getName(),
                exam.getRoom(),
                exam.getTime(),
                exam.getInformation(),
                exam.getLecture().getId()

        );
    }


}