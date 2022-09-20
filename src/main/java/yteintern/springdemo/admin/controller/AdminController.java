package yteintern.springdemo.admin.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import yteintern.springdemo.Response;
import yteintern.springdemo.admin.controller.request.AddAdminRequest;
import yteintern.springdemo.admin.controller.request.UpdateAdminRequest;
import yteintern.springdemo.admin.controller.response.AdminResponse;
import yteintern.springdemo.admin.service.AdminService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
@Validated
public class AdminController {
    private final AdminService adminService;

    @PostMapping
    public Response addAdmin(@Valid @RequestBody AddAdminRequest addAdminRequest) {
        return adminService.addAdmin(addAdminRequest.toDomainEntity());

    }

    @PutMapping("{id}")
    public Response updateAdmin(@Valid @RequestBody UpdateAdminRequest updateAdminRequest, @PathVariable Long id) {
        return adminService.updateAdmin(id, updateAdminRequest.toDomainEntity());
    }

    @DeleteMapping("{id}")
    public Response deleteAdmin(@PathVariable Long id) {
        return adminService.deleteAdminById(id);
    }

    @GetMapping("{id}")
    public AdminResponse getAdminById(@PathVariable Long id) {
        return new AdminResponse(adminService.getById(id));
    }

    @GetMapping
    public List<AdminResponse> getAllAdmins() {

        return adminService.getAllAdmin()
                .stream()
                .map(AdminResponse::new)
                .toList();
    }

}