package com.example.ask.service;

import com.example.ask.dto.QuestionDTO;
import com.example.ask.exceptions.QuestionNotFoundException;
import com.example.ask.repository.QuestionRepository;
import com.example.ask.repository.UserRepository;
import com.example.ask.entity.QuestionEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final UserService userService;

    public QuestionService(QuestionRepository questionRepository, UserService userService)  {

        this.questionRepository = questionRepository;
        this.userService = userService;
    }

    public Page<QuestionEntity> findResponse(int page) {
        Pageable pageable = PageRequest.of(page, 10);
        return questionRepository.findByAnswerListIsNotEmpty(pageable);

    }

    public Page<QuestionEntity> findNoResponse(int page) {
        Pageable pageable = PageRequest.of(page, 10);
        return questionRepository.findByAnswerListEmpty(pageable);

    }

    public Page<QuestionEntity> findAllQuestion(int page) {
        Pageable pageable = PageRequest.of(page, 10);
        return questionRepository.findAll(pageable);

    }

    public QuestionEntity findById(Integer id) {
        return questionRepository.findById(id).get();
    }

    public void createQuestion(QuestionDTO questionDTO) {

        // Null 체크
        if (questionDTO.getContent() == null || questionDTO.getContent().isEmpty()
            || questionDTO.getTitle() == null || questionDTO.getTitle().isEmpty()
                || questionDTO.getUsername() == null
        ) {
            throw new IllegalArgumentException("AnswerDTO fields must not be null or empty");
        }

        // 로그인 기능이 생기면 author에 작성자 추가
        // UserEntity 조회

        QuestionEntity data = new QuestionEntity();

        data.setContent(questionDTO.getContent());
        data.setTitle(questionDTO.getTitle());
        data.setAuthor(userService.getUserByUsername(questionDTO.getUsername()));


        questionRepository.save(data);
    }


}
