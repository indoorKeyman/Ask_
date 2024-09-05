package com.example.ask.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "answer_index", schema = "public")
public class AnswerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer answer_index;

    @Column(columnDefinition = "TEXT")
    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    private LocalDateTime createDate  = LocalDateTime.now();

    @ManyToOne
    @JsonBackReference
    private QuestionEntity question;

    @ManyToOne
    @JsonIgnoreProperties("questionList")
    private UserEntity author;
}
