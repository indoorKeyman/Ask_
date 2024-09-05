package com.example.ask.service;


import com.example.ask.entity.JobsEntity;
import com.example.ask.repository.JobsRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class JobsService {

    private final JobsRepository jobsRepository;

    public JobsService(JobsRepository jobsRepository) {
        this.jobsRepository = jobsRepository;
    }

    public Page<JobsEntity> findEndRecruit(int page) {
        Pageable pageable = PageRequest.of(page, 10);

        LocalDateTime currentDate = LocalDateTime.now();

        return jobsRepository.findByEndDateBefore(currentDate,pageable);

    }

    public Page<JobsEntity> findRecruit(int page) {
        Pageable pageable = PageRequest.of(page, 10);
        LocalDateTime currentDate = LocalDateTime.now();

        return jobsRepository.findByStartDateBeforeAndEndDateAfter(currentDate, currentDate, pageable);
    }

    public Page<JobsEntity> findAllJobs(int page) {
        Pageable pageable = PageRequest.of(page, 10);
        return jobsRepository.findAll(pageable);
    }

    public JobsEntity findById(Integer id) {
        return jobsRepository.findById(id).get();
    }

}
