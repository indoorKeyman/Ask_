package com.example.ask.controller;

import com.example.ask.dto.AnswerDTO;
import com.example.ask.dto.QuestionDTO;
import com.example.ask.entity.QuestionEntity;
import com.example.ask.service.QuestionService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@ResponseBody
@RequestMapping("/question")
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {

        this.questionService = questionService;
    }

    @GetMapping("/{question_index}")
    public ResponseEntity<QuestionEntity> getQuestionById(@PathVariable("question_index") int questionIndex){

        QuestionEntity questionEntity =  questionService.findById(questionIndex);

        return ResponseEntity.ok(questionEntity);
    }



    @GetMapping("/response")
    public ResponseEntity<Page<QuestionEntity>> getResponse(@RequestParam(value="page", defaultValue="0") int page){

        Page<QuestionEntity> paging = this.questionService.findResponse(page);


        System.out.println("=====================================찡긋^^==================================");
        System.out.println(paging);

        return ResponseEntity.ok(paging);
    }

    @GetMapping("/noresponse")
    public ResponseEntity<Page<QuestionEntity>> getNoResponse(@RequestParam(value="page", defaultValue="0") int page){

        Page<QuestionEntity> paging = this.questionService.findNoResponse(page);


        System.out.println("=====================================찡긋^^==================================");
        System.out.println(paging);

        return ResponseEntity.ok(paging);
    }

    @GetMapping("/list")
    public ResponseEntity<Page<QuestionEntity>> getAllQuestions(@RequestParam(value="page", defaultValue="0") int page){

        Page<QuestionEntity> paging = this.questionService.findAllQuestion(page);


        System.out.println("=====================================찡긋^^==================================");
        System.out.println(paging);

        return ResponseEntity.ok(paging);
    }

    @PostMapping("/create")
    public String createQuestion(@ModelAttribute QuestionDTO questionDTO) {

        System.out.println("=====================================찡긋^^==================================");

        questionService.createQuestion(questionDTO);

        return "Successful createQuestion";
    }

}
