package yteintern.springdemo.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import yteintern.springdemo.exam.entity.Exam;

public interface ExamRepository extends JpaRepository<Exam,Long> {

}
