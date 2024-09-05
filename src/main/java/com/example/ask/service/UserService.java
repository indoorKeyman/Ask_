package com.example.ask.service;

import com.example.ask.entity.UserEntity;
import com.example.ask.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public UserEntity getUserByUsername(String username) {

        return userRepository.findByUsername(username);
    }

}
