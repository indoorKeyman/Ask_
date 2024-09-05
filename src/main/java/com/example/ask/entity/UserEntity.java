package com.example.ask.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "user_entity", schema = "public")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_index")
    private Integer user_index;

    @Column(name = "username", nullable = false, length = 30, unique = true)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Column(name = "role", nullable = false)
    private String role;

    @Column( nullable = false)
    private LocalDateTime createDate = LocalDateTime.now();

    @JsonManagedReference
    @OneToMany(mappedBy = "author", cascade = CascadeType.REMOVE)
    private List<QuestionEntity> questionList;

}
