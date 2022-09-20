package yteintern.springdemo.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import yteintern.springdemo.student.entity.Student;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {

    Optional<Student> findStudentById(Long id);
}