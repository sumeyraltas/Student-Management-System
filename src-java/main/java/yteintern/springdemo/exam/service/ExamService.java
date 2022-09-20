package yteintern.springdemo.exam.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import yteintern.springdemo.Response;
import yteintern.springdemo.exam.entity.Exam;
import yteintern.springdemo.exam.repository.ExamRepository;
import yteintern.springdemo.lecture.entity.Lecture;
import yteintern.springdemo.lecture.service.LectureService;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ExamService {
    private final ExamRepository examRepository;
    private final LectureService lectureService;

    public String addExam(Exam exam) {
        Lecture lecture = lectureService.getLectureById(exam.getLecture().getId());
        exam.setLecture(lecture);

        examRepository.save(exam);
        return"Success";
    }

    public String updateExam(Long id, Exam updateExam) {
        Exam exam = examRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No record"));

        examRepository.save(updateExam);

        updateExam.update(exam);
        return "Updated";
    }

    public String deleteExamById(Long id) {
        examRepository.deleteById(id);
        return"Assistant";
    }

    public List<Exam> getAllExam() {
        return examRepository.findAll();
    }


    public Exam getExamById(Long id) {
        return examRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No record"));
    }

    @GetMapping("{id}")
    public Exam getById(@PathVariable Long id) {
        return examRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No record"));

    }
}
