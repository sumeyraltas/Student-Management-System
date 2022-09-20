package yteintern.springdemo.assistant.controller.response;


import yteintern.springdemo.assistant.entity.Assistant;


public record AssistantResponse(

        Long id,
        String name,
        String surname,
        String username,
        String password,
        Long lecturerId


) {

    public AssistantResponse(Assistant assistant) {
        this(
                assistant.getId(),
                assistant.getName(),
                assistant.getSurname(),
                assistant.getUsername(),
                assistant.getPassword(),
                assistant.getLecturer().getId()

        );
    }

}
