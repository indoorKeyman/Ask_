package com.example.ask.service;

import com.example.ask.dto.CustomUserDetails;
import com.example.ask.entity.UserEntity;
import com.example.ask.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {


        UserEntity userData = userRepository.findByUsername(username);

        if (userData != null) {


            return new CustomUserDetails(userData);
        }

        return null;
    }
}