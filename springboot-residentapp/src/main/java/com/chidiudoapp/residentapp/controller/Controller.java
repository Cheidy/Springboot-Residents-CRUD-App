package com.chidiudoapp.residentapp.controller;

import com.chidiudoapp.residentapp.model.Resident;
import com.chidiudoapp.residentapp.repository.ResidentRepository;
import com.chidiudoapp.residentapp.services.ResidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class Controller {

    @Autowired
    private ResidentService residentService;


    //Add resident
    @PostMapping("/adduser")
    public Resident addResident(@RequestBody Resident resident) {
        return residentService.addResident(resident);
    }

    //List all residents
    @GetMapping("listusers")
    public List<Resident> listAllResidents() {
        return residentService.listAllResidents();
    }


}
