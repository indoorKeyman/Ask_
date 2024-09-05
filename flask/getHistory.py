from langchain_community.chat_message_histories import ChatMessageHistory
from dotenv import load_dotenv
import os


# API KEY 정보로드
load_dotenv(dotenv_path='.env')

# 세션 번호에 대한 히스토리를 저장할 딕셔너리
session_histories = {}

def get_chat_history(session_id):
    # 세션이 존재하지 않으면 새로운 ChatMessageHistory 인스턴스 생성
    if session_id not in session_histories:
        session_histories[session_id] = ChatMessageHistory()
    
    return session_histories[session_id]

# 예시: 세션 ID로 메시지 추가 및 조회
session_id = "rag5"

# 메시지 추가
session_histories[session_id].add_user_message("안녕하세요!")
session_histories[session_id].add_assistant_message("안녕하세요! 어떻게 도와드릴까요?")

# 특정 세션의 히스토리 가져오기
history = get_chat_history(session_id)
print("-----------------------------------------------")
print(history)
