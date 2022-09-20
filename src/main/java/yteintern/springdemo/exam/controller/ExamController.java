package yteintern.springdemo.exam.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import yteintern.springdemo.Response;
import yteintern.springdemo.exam.controller.request.AddExamRequest;
import yteintern.springdemo.exam.controller.request.UpdateExamRequest;
import yteintern.springdemo.exam.controller.response.ExamResponse;
import yteintern.springdemo.exam.service.ExamService;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("/exams")
public class ExamController {

    private final ExamService examService;

    @PostMapping
    //@PreAuthorize("hasAnyAuthority('Lecturer','Assistant')")
    public String addExam(@Valid @RequestBody AddExamRequest addExamRequest) {
        return examService.addExam(addExamRequest.toDomainEntity());
    }

    @PutMapping("{id}")
   // @PreAuthorize("hasAnyAuthority('Lecturer','Assistant')")
    public String updateExam(@Valid @RequestBody UpdateExamRequest updateExamRequest, @PathVariable Long id) {
        return examService.updateExam(id, updateExamRequest.toDomainEntity());

    }

    @GetMapping("{id}")
    //@PreAuthorize("hasAnyAuthority('Lecturer','Assistant')")
    public ExamResponse getExamById(@PathVariable Long id) {
        return new ExamResponse(examService.getById(id));
    }

    @GetMapping
    //@PreAuthorize("hasAnyAuthority('Lecturer','Assistant','Student')")
    public List<ExamResponse> getAllExam() {
        return examService.getAllExam()
                .stream()
                .map(ExamResponse::new)
                .toList();
    }

    @DeleteMapping("{id}")
    //@PreAuthorize("hasAuthority('Admin')")
    public String deleteExam(@PathVariable Long id) {
        return examService.deleteExamById(id);
    }
/*

    @DeleteMapping("{id}")
   // @PreAuthorize("hasAnyAuthority('Lecturer','Assistant')")
    public Response deleteExamById(@PathVariable  Long id) {
        return examService.deleteExamById(id);
    }
    */
/*
    @GetMapping("{id}")
    public ExamResponse getById(@PathVariable Long id) {

        return new ExamResponse(examService.getById(id));
    }

 */
}
