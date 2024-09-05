from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PDFPlumberLoader
from langchain_openai import OpenAIEmbeddings
from langchain_teddynote import logging
from langchain.vectorstores import Chroma
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.chat_message_histories import ChatMessageHistory
from operator import itemgetter
from langchain import hub

from langchain_teddynote import logging
from dotenv import load_dotenv
import os


# API KEY 정보로드
load_dotenv(dotenv_path='.env')

# 프로젝트 이름을 입력합니다.
logging.langsmith("ask2")



def makeChain():
        
    # 단계 5: Chroma DB 로드(Load DB)
    persist_directory = './chroma_db'  # 저장된 디렉토리 경로
    vectorstore = Chroma(
        persist_directory=persist_directory,
        embedding_function=OpenAIEmbeddings(),
        collection_name="my_db",
    )

    # 단계 6: 검색기(Retriever) 생성
    # 문서에 포함되어 있는 정보를 검색하고 생성합니다.
    retriever = vectorstore.as_retriever()


    # 단계 7: 프롬프트 생성(Create Prompt)
    # 프롬프트를 생성합니다.
    # prompt = PromptTemplate.from_template(
    #     """You are an assistant for question-answering tasks. 
    # Use the following pieces of retrieved context to answer the question. 
    # If you don't know the answer, just say that you don't know. 
    # Answer in Korean.
    # But, you can translate other langauges.

    # #Question: 
    # {question} 
    # #Context: 
    # {context} 

    # #Answer:"""
    # )
    
    # 단계 7: 프롬프트 생성(Create Prompt)
    # 프롬프트를 생성합니다.
    # prompt = PromptTemplate.from_template(
    #     """    You are an assistant for question-answering tasks. Use the following pieces of retrieved context to answer the question. If you don't know the answer, just say that you don't know. Use three sentences maximum and keep the answer concise.
    #         Aand You can also translate it.
    #     Question: {question} 
    #     Context: {context} 
    #     Answer:
    #     """  
    # )
    
    

    
    prompt = hub.pull("rlm/rag-prompt")

    

    # 단계 8: 체인(Chain) 생성
    # 모델(LLM) 을 생성합니다.
    llm = ChatOpenAI(model_name="gpt-4o-mini", temperature=0.2)


    chain = (
        {
            "context": itemgetter("question") | retriever,
            "question": itemgetter("question"),
            "chat_history": itemgetter("chat_history"),
        }
        | prompt
        | llm
        | StrOutputParser()
    )

    # 세션 기록을 저장할 딕셔너리
    store = {}

    # 세션 ID를 기반으로 세션 기록을 가져오는 함수
    def get_session_history(session_ids):
        print(f"[대화 세션ID]: {session_ids}")
        if session_ids not in store:  # 세션 ID가 store에 없는 경우
            # 새로운 ChatMessageHistory 객체를 생성하여 store에 저장
            store[session_ids] = ChatMessageHistory()
        return store[session_ids]  # 해당 세션 ID에 대한 세션 기록 반환


    # 대화를 기록하는 RAG 체인 생성
    rag_with_history = RunnableWithMessageHistory(
        chain,
        get_session_history,  # 세션 기록을 가져오는 함수
        input_messages_key="question",  # 사용자의 질문이 템플릿 변수에 들어갈 key
        history_messages_key="chat_history",  # 기록 메시지의 키
    )
    
    return rag_with_history


def activeRag (question):
    
    rag_with_history = makeChain()
    
    result = rag_with_history.invoke(
        # 질문 입력
        {"question": question},
        # 세션 ID 기준으로 대화를 기록합니다.
        config={"configurable": {"session_id": "rag5"}},
    )
    
    return result
        
   





