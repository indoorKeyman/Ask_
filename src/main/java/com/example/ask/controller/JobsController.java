package com.example.ask.controller;


import com.example.ask.entity.JobsEntity;
import com.example.ask.service.JobsService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
@RequestMapping("/jobs")
public class JobsController {

    private final JobsService jobsService;

    public JobsController(JobsService jobsService) {

        this.jobsService = jobsService;

    }

    @GetMapping("/endrecruit")
    public ResponseEntity<Page<JobsEntity>> endRecruit(@RequestParam(value="page", defaultValue="0") int page) {
        Page<JobsEntity> paging = this.jobsService.findEndRecruit(page);

        System.out.println("=====================================찡긋^^==================================");
        System.out.println(paging);

        return ResponseEntity.ok(paging);
    }

    @GetMapping("/recruit")
    public ResponseEntity<Page<JobsEntity>> recruit(@RequestParam(value="page", defaultValue="0") int page) {
        Page<JobsEntity> paging = this.jobsService.findRecruit(page);

        System.out.println("=====================================찡긋^^==================================");
        System.out.println(paging);

        return ResponseEntity.ok(paging);
    }

    @GetMapping("/list")
    public ResponseEntity<Page<JobsEntity>> getAllJobsList(@RequestParam(value="page", defaultValue="0") int page) {
        Page<JobsEntity> paging = this.jobsService.findAllJobs(page);

        System.out.println("=====================================찡긋^^==================================");
        System.out.println(paging);

        return ResponseEntity.ok(paging);
    }

    @GetMapping("/{jobs_index}")
    public ResponseEntity<JobsEntity> getJobsById(@PathVariable("jobs_index") int jobsIndex) {
        JobsEntity jobsEntity = jobsService.findById(jobsIndex);

        return ResponseEntity.ok(jobsEntity);
    }

}
