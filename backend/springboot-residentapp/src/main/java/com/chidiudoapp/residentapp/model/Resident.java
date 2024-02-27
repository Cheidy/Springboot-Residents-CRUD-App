package com.chidiudoapp.residentapp.model;


import lombok.Data;

import javax.persistence.*;

//@Entity shows it's a database class, @Data removes the need to write getters and setters, @Table creates a table with the class name, @Column are columns of the table

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

//    @Column(name = "age")
//    private int age;

}
