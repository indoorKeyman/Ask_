package com.example.ask.controller;

import com.example.ask.dto.AnswerDTO;
import com.example.ask.entity.AnswerEntity;
import com.example.ask.entity.QuestionEntity;
import com.example.ask.service.AnswerService;
import com.example.ask.service.QuestionService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/answer")
@ResponseBody
public class AnswerController {

    private final AnswerService answerService;
    private final QuestionService questionService;

    public AnswerController(AnswerService answerService, QuestionService questionService) {

        this.answerService = answerService;
        this.questionService = questionService;

    }

    @GetMapping("/list")
    public ResponseEntity<List<AnswerEntity>> getAllAnswer(HttpServletRequest request, HttpServletResponse response,
                                                              Model model){

        List<AnswerEntity> answerList = answerService.findAllAnswer();

        System.out.println("=====================================찡긋^^==================================");
        System.out.println(answerList);

        return ResponseEntity.ok(answerList);
    }

    @Transactional(rollbackFor = Exception.class)
    @PostMapping("/create/{question_index}")
    public String createAnswer(@ModelAttribute AnswerDTO answerDTO, @PathVariable("question_index") Integer question_index) {

        System.out.println("Question_index : " + (question_index));

        answerService.createAnswer(answerDTO, question_index);

        return "Successful createAnswer";
    }

}
