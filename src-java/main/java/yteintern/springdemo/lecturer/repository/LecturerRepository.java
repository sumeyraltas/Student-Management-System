package yteintern.springdemo.lecturer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import yteintern.springdemo.lecturer.entity.Lecturer;

import java.util.List;
import java.util.Optional;

public interface  LecturerRepository extends JpaRepository<Lecturer, Long> {

    Optional<Lecturer> findLecturerById(Long id);
}
