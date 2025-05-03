package com.example.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/login")
    public boolean login(@RequestBody Admin admin) {
        Admin found = adminRepository.findByUsername(admin.getUsername());
        return found != null && found.getPassword().equals(admin.getPassword());
    }
}
