package com.example.ask.service;

import com.example.ask.dto.AnswerDTO;
import com.example.ask.entity.AnswerEntity;

import com.example.ask.entity.QuestionEntity;
import com.example.ask.repository.AnswerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final QuestionService questionService;

    public AnswerService (AnswerRepository answerRepository, QuestionService questionService) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
    }

    public List<AnswerEntity> findAllAnswer() {
        List<AnswerEntity> answerList = answerRepository.findAll();
        return answerList;
    }

    public void createAnswer(AnswerDTO answerDTO, Integer question_index) {
        // Null 체크
        if (answerDTO.getContent() == null || answerDTO.getContent().isEmpty()) {

            throw new IllegalArgumentException("AnswerDTO fields must not be null or empty");
        }

        AnswerEntity data = new AnswerEntity();

//        QuestionEntity questionEntity = questionService.getQuestion(question_index);

        data.setContent(answerDTO.getContent());
//        data.setQuestion(questionEntity);

        answerRepository.save(data);
    }

}
