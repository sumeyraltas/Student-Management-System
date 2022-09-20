package yteintern.springdemo.admin.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import yteintern.springdemo.Response;
import yteintern.springdemo.ResponseType;
import yteintern.springdemo.admin.entity.Admin;
import yteintern.springdemo.admin.repository.AdminRepository;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminService {
    private final AdminRepository adminRepository;
    public Response addAdmin(Admin admin) {
        adminRepository.save(admin);
        return new Response(ResponseType.SUCCESS, "SUCCESS","Admin");
    }
    public Response updateAdmin(Long id, Admin updateAdmin){
        Admin admin = adminRepository.findById(id)
                .orElseThrow(()->new EntityNotFoundException("No record"));

        adminRepository.save(updateAdmin);

        admin.update(updateAdmin);
        return new Response(ResponseType.SUCCESS,"Updated","Admin");
    }
    public Response deleteAdminById(Long id){
        adminRepository.deleteById(id);
        return new
                Response(ResponseType.SUCCESS,"Deleted","Admin");
    }
    public List<Admin> getAllAdmin(){
        return adminRepository.findAll();
    }

    public Admin getAdminById(Long id){
        return adminRepository.findById(id)
                .orElseThrow(()->new EntityNotFoundException("No records find"));
    }
    @GetMapping("{id}")
    public Admin getById(@PathVariable Long id) {
        return adminRepository.findById(id)
                .orElseThrow(()->new EntityNotFoundException("No records find"));
    }

}