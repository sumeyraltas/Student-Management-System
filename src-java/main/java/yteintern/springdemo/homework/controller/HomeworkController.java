package yteintern.springdemo.homework.controller;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import yteintern.springdemo.Response;
import yteintern.springdemo.homework.controller.request.AddHomeworkRequest;
import yteintern.springdemo.homework.controller.request.UpdateHomeworkRequest;
import yteintern.springdemo.homework.controller.response.HomeworkResponse;
import yteintern.springdemo.homework.service.HomeworkService;

import javax.validation.Valid;
import java.util.List;
@RestController
@RequestMapping("/homeworks")
@Validated
@RequiredArgsConstructor
public class HomeworkController {
    private final HomeworkService homeworkService;

    @PostMapping
    @PreAuthorize("hasAnyAuthority('Lecturer','Assistant','Admin')")
    public String addHomework(@Valid @RequestBody AddHomeworkRequest addExamRequest) {
        return homeworkService.addHomework(addExamRequest.toDomainEntity());
    }

    @PutMapping("{id}")
    @PreAuthorize("hasAnyAuthority('Lecturer','Assistant')")
    public String updateHomework(@Valid @RequestBody UpdateHomeworkRequest updateExamRequest, @PathVariable Long id) {
        return homeworkService.updateHomework(id, updateExamRequest.toDomainEntity());

    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAnyAuthority('Lecturer','Assistant','Admin')")
    public String deleteHomeworkById(@PathVariable Long id) {

        return homeworkService.deleteHomeworkById(id);
    }

    @GetMapping
    @PreAuthorize("hasAnyAuthority('Lecturer','Admin','Assistant','Student')")
    public List<HomeworkResponse> getAllHomework() {
        return homeworkService.getAllHomework()
                .stream()
                .map(HomeworkResponse::new)
                .toList();
    }

    @GetMapping("{id}")
   @PreAuthorize("hasAnyAuthority('Lecturer','Admin','Assistant','Student')")
    public HomeworkResponse getById(@PathVariable Long id) {
        return new HomeworkResponse(homeworkService.getById(id));
    }

}

