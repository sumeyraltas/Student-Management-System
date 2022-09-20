package yteintern.springdemo.homework.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import yteintern.springdemo.homework.entity.Homework;

import java.util.List;
import java.util.Optional;

public interface HomeworkRepository extends JpaRepository<Homework, Long> {

}
