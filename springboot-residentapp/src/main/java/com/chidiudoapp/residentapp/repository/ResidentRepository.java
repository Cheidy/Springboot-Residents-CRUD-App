package com.chidiudoapp.residentapp.repository;

import com.chidiudoapp.residentapp.model.Resident;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResidentRepository extends JpaRepository<Resident, Long> {
}
