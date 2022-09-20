package yteintern.springdemo.lecture.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import yteintern.springdemo.lecture.entity.Lecture;

public interface LectureRepository extends JpaRepository<Lecture, Long> {
}
