package yteintern.springdemo.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import yteintern.springdemo.authentication.entity.CustomUser;

import java.util.Optional;

public interface UserRepository extends JpaRepository<CustomUser, Long> {
    Optional<CustomUser> findByUsername(String username);
}