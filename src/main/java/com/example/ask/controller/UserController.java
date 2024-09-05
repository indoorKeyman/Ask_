package com.example.ask.controller;

import com.example.ask.dto.AnswerDTO;
import com.example.ask.entity.UserEntity;
import com.example.ask.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{username}")
    public ResponseEntity<UserEntity> getUserInfo(@PathVariable("username") String username, Model model) {

        System.out.println("username : " + username);


        UserEntity userEntity =userService.getUserByUsername(username);

        return ResponseEntity.ok(userEntity);
    }
}