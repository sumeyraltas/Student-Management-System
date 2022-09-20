package yteintern.springdemo.lecturer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import yteintern.springdemo.Response;
import yteintern.springdemo.lecture.controller.response.LectureResponse;
import yteintern.springdemo.lecturer.controller.request.AddLecturer;
import yteintern.springdemo.lecturer.controller.request.UpdateLecturer;
import yteintern.springdemo.lecturer.controller.response.LecturerResponse;
import yteintern.springdemo.lecturer.service.LecturerService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/lecturers")
@RequiredArgsConstructor
@Validated
public class LecturerController {

        private final LecturerService lecturerService;
      //  private final AuthenticationService authenticationService;

    @PostMapping()
   // @PreAuthorize("hasAuthority('Admin')")
    public Response addLecturer(@Valid @RequestBody AddLecturer addLecturer) {

        return lecturerService.addLecturer(addLecturer.toDomainEntity());
    }

    @PutMapping("{id}")
    @PreAuthorize("hasAuthority('Admin')")
    public Response updateLecturer(@Valid @RequestBody UpdateLecturer updateLecturer, @PathVariable Long id) {
        return lecturerService.updateLecturer(id, updateLecturer.toDomainEntity());
    }

    @DeleteMapping("{id}")
    //@PreAuthorize("hasAuthority('Admin')")
    public Response deleteLecturer(@PathVariable Long id) {

        return lecturerService.deleteLecturer(id);
    }


    @GetMapping
    //@PreAuthorize("hasAuthority('Admin')")
    public List<LecturerResponse> getAllLecturer() {
        return lecturerService.getAllLecturer()
                .stream()
                .map(LecturerResponse::new)
                .toList();
    }

    @GetMapping("{id}")
    public LecturerResponse getLecturerById(@PathVariable Long id) {
        return new LecturerResponse(lecturerService.getById(id));
    }

}
