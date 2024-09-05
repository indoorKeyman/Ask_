FROM ubuntu:22.04

# 필요한 패키지 설치 및 JDK 22 설치
RUN apt-get update && \
    apt-get install -y wget tar && \
    wget https://download.oracle.com/java/22/latest/jdk-22_linux-x64_bin.tar.gz && \
    tar -xzf jdk-22_linux-x64_bin.tar.gz -C /opt && \
    rm jdk-22_linux-x64_bin.tar.gz

# JAVA_HOME 환경 변수 설정
ENV JAVA_HOME=/opt/jdk-22.0.2
ENV PATH="$JAVA_HOME/bin:$PATH"

# 애플리케이션 JAR 파일을 컨테이너에 복사
COPY /ask-0.0.1-SNAPSHOT.jar /app.jar

# JAR 파일 실행
ENTRYPOINT ["java", "-jar", "/app.jar"]