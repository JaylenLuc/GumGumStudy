package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity // <--- THIS IS THE MISSING KEY
@Table(name = "users") // Good practice to avoid conflict with SQL keywords
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    // IMPORTANT: JPA requires a no-args constructor
    public User() {}

    public User(String name) {
        this.name = name;
    }

    // Getters and Setters (REQUIRED for JPA to work)
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
