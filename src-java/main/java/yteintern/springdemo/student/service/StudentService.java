package yteintern.springdemo.student.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import yteintern.springdemo.Response;
import yteintern.springdemo.ResponseType;
import yteintern.springdemo.student.entity.Student;
import yteintern.springdemo.student.repository.StudentRepository;


import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository studentRepository;

    public Response addStudent(Student student) {
        studentRepository.save(student);
        return new Response(ResponseType.SUCCESS, "Student has been added successfully","Student");
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Student not found"));
    }

    public Response deleteStudent(Long id) {
        studentRepository.deleteById(id);
        return new Response(ResponseType.SUCCESS, "Student has been deleted successfully","Student");
    }

    public Response updateStudent(Long id, Student updatedStudent) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Student not found"));
        student.update(updatedStudent);
        studentRepository.save(student);
        return new Response(ResponseType.SUCCESS, "Student has been updated successfully","Student");
    }
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Student with ID %d not found".formatted(id)));
    }

}