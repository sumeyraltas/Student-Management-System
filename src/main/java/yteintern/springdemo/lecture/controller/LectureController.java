package yteintern.springdemo.lecture.controller;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import yteintern.springdemo.Response;
import yteintern.springdemo.lecture.controller.request.AddLecture;
import yteintern.springdemo.lecture.controller.request.UpdateLecture;
import yteintern.springdemo.lecture.controller.response.LectureResponse;
import yteintern.springdemo.lecture.service.LectureService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/lectures")
@Validated
public class LectureController {

    private final LectureService lectureService;

    @PostMapping
    @PreAuthorize("hasAuthority('Admin')")
    public String addLecture(@RequestBody AddLecture addLectureRequest) {
        return lectureService.addLecture(addLectureRequest.toDomainEntity());
    }

    @PutMapping("{id}")
    @PreAuthorize("hasAnyAuthority('Admin','Lecturer','Assistant')")
    public String updateLecture(@Valid @RequestBody UpdateLecture updateLectureRequest, @PathVariable Long id) {
        return lectureService.updateLecture(updateLectureRequest.toDomainEntity(), id);
    }


    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('Admin')")
    public Response deleteLecture(@PathVariable Long id) {

        return lectureService.deleteLectureById(id);
    }


    @GetMapping()
    @PreAuthorize("hasAnyAuthority('Student','Admin','Lecturer','Assistant')")
    public List<LectureResponse> getAllLecture() {
        return lectureService.getAllLectures()
                .stream()
                .map(LectureResponse::new)
                .toList();
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAnyAuthority('Admin','Lecturer','Assistant')")
    public LectureResponse getLectureById(@PathVariable Long id) {
        return new LectureResponse(lectureService.getLectureById(id));
    }
}
