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
    @GetMapping("/listusers")
    public List<Resident> listAllResidents() {
        return residentService.listAllResidents();
    }

    //Find residents by ID
    @GetMapping("/listusers/{id}")
    public Resident listResidentById(@PathVariable("id") Long residentId) {
        return residentService.listResidentsById(residentId);
    }

    //Delete resident
    @DeleteMapping("/listusers/{id}")
    public String deleteResident (@PathVariable("id") Long residentId) {
        residentService.deleteResident(residentId);
        return "Residence has been deleted";
    }

    //Update resident
    @PutMapping("/updateuser/{id}")
    public Resident updateResident (@PathVariable("id") Long residentId,
                                    @RequestBody Resident resident) {
        return residentService.updateResident(residentId, resident);
    }

}
