package yteintern.springdemo.admin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import yteintern.springdemo.admin.entity.Admin;
public interface AdminRepository extends JpaRepository<Admin, Long> {
}