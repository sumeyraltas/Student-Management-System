package yteintern.springdemo.homework.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import yteintern.springdemo.assistant.entity.Assistant;
import yteintern.springdemo.assistant.service.AssistantService;
import yteintern.springdemo.homework.entity.Homework;
import yteintern.springdemo.homework.repository.HomeworkRepository;
import yteintern.springdemo.lecture.entity.Lecture;
import yteintern.springdemo.lecture.service.LectureService;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HomeworkService {
    private  final HomeworkRepository homeworkRepository;

    private  final AssistantService assistantService;

    private final LectureService lectureService;


    public String addHomework(Homework homework) {
        Lecture lecture = lectureService.getLectureById(homework.getLecture().getId());
        homework.setLecture(lecture);

        Assistant assistant=assistantService.getAssistantById(homework.getAssistant().getId());
        homework.setAssistant(assistant);

        homeworkRepository.save(homework);
        return "Success";
    }

    public String updateHomework(Long id, Homework updateHomework) {
        Homework homework = (Homework) homeworkRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No Records Found"));

        homeworkRepository.save(updateHomework);

        updateHomework.update(homework);
        return"Updated";
    }

    public String deleteHomeworkById(Long id) {
        homeworkRepository.deleteById(id);
        return "Deleted";
    }

    public List<Homework> getAllHomework() {
        return homeworkRepository.findAll();
    }


    public Homework getHomeworkById(Long id) {
        return (Homework) homeworkRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No Records Found"));
    }

    @GetMapping("{id}")
    public Homework getById(@PathVariable Long id) {
        return (Homework) homeworkRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No Records Found"));

    }
}
