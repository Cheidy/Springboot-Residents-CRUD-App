package com.chidiudoapp.residentapp.model;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table
public class Resident {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id ;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "role")
    private String role;

    @Column(name = "gender")
    private String gender;

    @Column(name = "age")
    private int age;

}
