package com.chidiudoapp.residentapp.repository;

import com.chidiudoapp.residentapp.model.Resident;
import org.springframework.data.jpa.repository.JpaRepository;

//Nothing serious here this is just an implementation of JPA repository. Don't waste too much time on this
public interface ResidentRepository extends JpaRepository<Resident, Long> {
}
