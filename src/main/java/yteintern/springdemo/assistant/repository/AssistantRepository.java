package yteintern.springdemo.assistant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import yteintern.springdemo.assistant.entity.Assistant;

import java.util.Optional;

public interface AssistantRepository extends JpaRepository<Assistant, Long> {

    Optional<Assistant> findAssistantById(Long id);
}