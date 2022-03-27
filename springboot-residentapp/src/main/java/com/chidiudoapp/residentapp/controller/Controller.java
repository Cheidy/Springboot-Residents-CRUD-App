package com.chidiudoapp.residentapp.controller;

import com.chidiudoapp.residentapp.model.Resident;
import com.chidiudoapp.residentapp.repository.ResidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class Controller {

    @Autowired
    private ResidentRepository residentRepository;

    //Get all users
    @GetMapping(value = "/getusers")
    public List<Resident> getUsers() {
        return residentRepository.findAll();
    }

    //Add user
    @PostMapping(value = "/adduser")
    public String addResident(@RequestBody Resident resident) {
        residentRepository.save(resident);
        return "Resident has been saved succesully";
    }

    //Update user
    @PutMapping(value = "/updateuser/{id}")
    public Resident updateResident(@PathVariable long id, @RequestBody Resident resident) {
        Resident updatedResident = residentRepository.findById(id).get();
        updatedResident.setName(resident.getName());
        updatedResident.setRole(resident.getRole());
        updatedResident.setGender(resident.getGender());
        updatedResident.setAge(resident.getAge());
        residentRepository.save(updatedResident);
        return updatedResident;
    }

    //Delete User
    @DeleteMapping(value = "/deleteuser/{id}")
    public String deleteResident(@PathVariable long id) {
        Resident deletedResident = residentRepository.findById(id).get();
        residentRepository.delete(deletedResident);
        return "Resident with ID: " +id +" has been deleted";
    }
}
