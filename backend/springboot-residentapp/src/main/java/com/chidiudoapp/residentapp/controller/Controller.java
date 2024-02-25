package com.chidiudoapp.residentapp.controller;

import com.chidiudoapp.residentapp.model.Resident;
import com.chidiudoapp.residentapp.repository.ResidentRepository;
import com.chidiudoapp.residentapp.services.ResidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/residents")
public class Controller {

    @Autowired
    private ResidentService residentService;


    //Add resident
    @PostMapping()
    public Resident addResident(@RequestBody Resident resident) {
        return residentService.addResident(resident);
    }

    //List all residents
    @GetMapping()
    public List<Resident> listAllResidents() {
        return residentService.listAllResidents();
    }

    //Find residents by ID
    @GetMapping("/{id}")
    public Resident listResidentById(@PathVariable("id") Long residentId) {
        return residentService.listResidentsById(residentId);
    }

    //Delete resident
    @DeleteMapping("/{id}")
    public String deleteResident (@PathVariable("id") Long residentId) {
        residentService.deleteResident(residentId);
        return "Residence has been deleted";
    }

    //Update resident
    @PutMapping("/{id}")
    public Resident updateResident (@PathVariable("id") Long residentId,
                                    @RequestBody Resident resident) {
        return residentService.updateResident(residentId, resident);
    }

}
