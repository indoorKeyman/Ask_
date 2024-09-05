package com.example.ask.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;


@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "jobs", schema = "public")
public class JobsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer jobs_index;

    @Column(name = "title")
    private String title;

    @Column(name = "location")
    private String location;

    @Column(name = "level")
    private String level;

    @Column(name = "responsibilities")
    private String responsibilities;

    @Column(name = "qualifications")
    private String qualifications;

    @Column(name = "preferences")
    private String preferences;

    @Column(name = "createDate")
    private LocalDateTime createDate = LocalDateTime.now();

    @Column(name = "startDate")
    private LocalDateTime startDate;

    @Column(name = "endDate")
    private LocalDateTime endDate;

}
