package yteintern.springdemo.student.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import yteintern.springdemo.Response;
import yteintern.springdemo.Role;
import yteintern.springdemo.authentication.entity.CustomUser;
import yteintern.springdemo.student.controller.request.AddStudent;
import yteintern.springdemo.student.controller.request.UpdateStudent;
import yteintern.springdemo.student.controller.response.StudentResponse;
import yteintern.springdemo.student.service.StudentService;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
@Validated

public class StudentController {

    private final StudentService studentService;

    @PostMapping
//  @PreAuthorize("hasAuthority('Admin')")
    public Response addStudent(@RequestBody @Valid AddStudent request) {
        System.out.println("fdjsfhs");
        return studentService.addStudent(request.toEntity());
    }

    @GetMapping
    //  @PreAuthorize("hasAuthority('Admin')")
    public List<StudentResponse> getAllStudents() {
        return studentService.getAllStudents()
                .stream()
                .map(StudentResponse::fromEntity)
                .toList();
    }

    @GetMapping("/{id}")
    //  @PreAuthorize("hasAuthority('Admin')")
    public StudentResponse getStudentById(@PathVariable Long id) {
        return StudentResponse.fromEntity(studentService.getStudentById(id));
    }

    @PutMapping("/{id}")
    //  @PreAuthorize("hasAuthority('Admin')")
    public Response updateStudent(@RequestBody @Valid UpdateStudent request, @PathVariable Long id) {
        return studentService.updateStudent(id, request.toEntity());
    }

    @DeleteMapping("/{id}")
    //  @PreAuthorize("hasAuthority('Admin')")
    public Response deleteStudent(@PathVariable Long id) {

        return studentService.deleteStudent(id);
    }

}