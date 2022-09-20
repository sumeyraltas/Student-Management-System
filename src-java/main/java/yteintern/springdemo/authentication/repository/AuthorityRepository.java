package yteintern.springdemo.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import yteintern.springdemo.authentication.entity.Authority;

import java.util.Optional;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {

    Optional<Authority> findByAuthority(String authority);

}