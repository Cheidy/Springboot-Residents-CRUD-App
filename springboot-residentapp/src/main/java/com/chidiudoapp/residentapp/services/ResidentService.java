package com.chidiudoapp.residentapp.services;

import com.chidiudoapp.residentapp.model.Resident;

import java.util.List;

public interface ResidentService {

    public Resident addResident(Resident resident);

    public List<Resident> listAllResidents();

    public Resident listResidentsById(Long residentId);

    public void deleteResident(Long residentId);

    public Resident updateResident(Long residentId, Resident resident);
}
