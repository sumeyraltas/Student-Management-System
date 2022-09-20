package yteintern.springdemo.lecture.service;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import yteintern.springdemo.Response;
import yteintern.springdemo.ResponseType;
import yteintern.springdemo.assistant.entity.Assistant;
import yteintern.springdemo.assistant.service.AssistantService;
import yteintern.springdemo.lecture.entity.Lecture;
import yteintern.springdemo.lecture.repository.LectureRepository;
import yteintern.springdemo.lecturer.entity.Lecturer;
import yteintern.springdemo.lecturer.service.LecturerService;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class LectureService {

    private final LectureRepository lectureRepository;
    private final LecturerService lecturerService;
    private final AssistantService assistantService;

    public List<Lecture> getAllLectures() {
        return lectureRepository.findAll();
    }
    public Response deleteLectureById(Long id) {
        lectureRepository.deleteById(id);
        return new Response(ResponseType.SUCCESS, "has been deleted successfully"," ");
    }

    public Lecture getLectureById(Long id) {
        return lectureRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No records found"));

    }

    public String addLecture(Lecture lecture) {

        Lecturer lecturer = lecturerService.getById(lecture.getLecturer().getId());
        lecture.setLecturer(lecturer);

        Assistant assistant = assistantService.getById(lecture.getAssistant().getId());
        lecture.setAssistant(assistant);

        lectureRepository.save(lecture);
        return "SUCCESS";
    }

    public String updateLecture(Lecture updateLecture, Long id) {
        Lecture lecture = lectureRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No records found"));

        Lecturer academician = lecturerService.getById(lecture.getLecturer().getId());

        lecture.setLecturer(academician);

        lecture.update(updateLecture);

        lectureRepository.save(lecture);

        return "Updated";
    }
}
