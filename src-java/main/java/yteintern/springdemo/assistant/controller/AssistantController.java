package yteintern.springdemo.assistant.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import yteintern.springdemo.Response;
import yteintern.springdemo.assistant.controller.request.AddAssistantRequest;
import yteintern.springdemo.assistant.controller.request.UpdateAssistantRequest;
import yteintern.springdemo.assistant.controller.response.AssistantResponse;
import yteintern.springdemo.assistant.service.AssistantService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/assistant")
@Validated
public class AssistantController {

    private final AssistantService assistantService;

    @PostMapping
    //@PreAuthorize("hasAuthority('Admin')")
    public Response addAssistant(@Valid @RequestBody AddAssistantRequest addAssistantRequest) {
        return assistantService.addAssistant(addAssistantRequest.toDomainEntity());
    }

    @PutMapping("{id}")
    @PreAuthorize("hasAuthority('Admin')")
    public Response updateAssistant(@Valid @RequestBody UpdateAssistantRequest updateAssistantRequest, @PathVariable Long id) {
        return assistantService.updateAssistant(id, updateAssistantRequest.toDomainEntity());

    }

    @DeleteMapping("{id}")
    public Response deleteAssistantById(@PathVariable Long id) {
        return assistantService.deleteAssistantById(id);
    }


    @GetMapping
    public List<AssistantResponse> getAllAssistants() {
        return assistantService.getAllAssistant()
                .stream()
                .map(assistant -> new AssistantResponse(assistant))
                .toList();
    }

    @GetMapping("{id}")
    public AssistantResponse getById(@PathVariable Long id) {
        return new AssistantResponse(assistantService.getById(id));
    }
}
