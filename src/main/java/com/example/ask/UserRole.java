package com.example.ask;

import lombok.Getter;

@Getter
public enum UserRole {
//    USER, ADMIN;

    ADMIN("ROLE_ADMIN"),
    USER("ROLE_USER");

    UserRole(String value) {
        this.value = value;
    }

    private String value;

}