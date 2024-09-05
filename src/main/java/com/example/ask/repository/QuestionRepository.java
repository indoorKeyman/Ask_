package com.example.ask.repository;

import com.example.ask.entity.QuestionEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<QuestionEntity, Integer> {

    Page<QuestionEntity> findAll(Pageable pageable);

    Page<QuestionEntity> findByAnswerListEmpty(Pageable pageable);

    Page<QuestionEntity> findByAnswerListIsNotEmpty(Pageable pageable);

}
