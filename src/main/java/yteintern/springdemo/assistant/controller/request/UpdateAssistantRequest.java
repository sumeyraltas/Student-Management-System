package yteintern.springdemo.assistant.controller.request;


import yteintern.springdemo.assistant.entity.Assistant;
import yteintern.springdemo.authentication.entity.Authority;

import java.util.List;

public record UpdateAssistantRequest(

        String name,
        String surname,
        String username,
        String password,
        Long lecturerId
) {
    public Assistant toDomainEntity() {
        return new Assistant(name, surname, username, password,lecturerId, List.of(new Authority("Assistant")));
    }

}

