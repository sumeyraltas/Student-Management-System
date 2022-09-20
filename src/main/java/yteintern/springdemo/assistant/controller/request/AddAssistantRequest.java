package yteintern.springdemo.assistant.controller.request;

import yteintern.springdemo.assistant.entity.Assistant;
import yteintern.springdemo.authentication.entity.Authority;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

public record AddAssistantRequest(

        @NotBlank
        String name,
        @NotBlank
        String surname,
        String username,
        String password,
        Long lecturerId
) {

    public Assistant toDomainEntity() {
        return new Assistant(name, surname, name+"."+surname, password, lecturerId, List.of(new Authority("Assistant")));
    }
}