package com.example.ask.repository;

import com.example.ask.entity.AnswerEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AnswerRepository extends JpaRepository<AnswerEntity, Integer> {
}
