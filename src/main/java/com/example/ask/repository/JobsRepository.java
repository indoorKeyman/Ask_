package com.example.ask.repository;

import com.example.ask.entity.JobsEntity;
import com.example.ask.entity.QuestionEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;

public interface JobsRepository extends JpaRepository<JobsEntity, Integer> {

    Page<JobsEntity> findAll(Pageable pageable);

    Page<JobsEntity> findByStartDateBeforeAndEndDateAfter(LocalDateTime startDate, LocalDateTime endDate, Pageable pageable);

    Page<JobsEntity> findByEndDateBefore(LocalDateTime endDate, Pageable pageable);

}
