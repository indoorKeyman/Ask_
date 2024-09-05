# 1. 베이스 이미지로 python 3.11.7을 사용
FROM python:3.11.7-slim

# 2. 작업 디렉토리를 설정
WORKDIR /app

# 3. 필수 패키지 설치
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# 4. pip 업그레이드
RUN pip install --upgrade pip


# 3. 필요한 의존성 파일을 복사 (requirements.txt 가 있을 경우)
COPY requirements.txt .

# 4. 의존성 설치
RUN pip install --no-cache-dir -r requirements.txt

# 5. 애플리케이션 소스 코드 복사
COPY /chroma_db /app/
COPY /.env /app/
COPY /app.py /app/
COPY /lang_rag.py /app/
COPY /chroma_db /app/

# 6. 컨테이너 실행 시 기본 명령어 설정 (예시로 main.py를 실행)
CMD ["python", "app.py"]