package com.chidiudoapp.residentapp.services;

import com.chidiudoapp.residentapp.model.Resident;
import com.chidiudoapp.residentapp.repository.ResidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidentServiceImpl implements ResidentService{

    @Autowired
    private ResidentRepository residentRepository;

    @Override
    public Resident addResident(Resident resident) {
        return residentRepository.save(resident);
    }

    @Override
    public List<Resident> listAllResidents() {
        return residentRepository.findAll();
    }

    @Override
    public Resident listResidentsById(Long residentId) {
        return residentRepository.findById(residentId).get();
    }

    @Override
    public void deleteResident(Long residentId) {
         residentRepository.deleteById(residentId);
    }
}
