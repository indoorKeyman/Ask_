import os
import requests
from flask import Flask, request, jsonify
from lang_rag import activeRag
from flask_cors import CORS


app = Flask(__name__)

CORS(app)

@app.route('/hello')
def hello():        
    return 'Hello, World!'



@app.route('/ask', methods=['POST'])
def upload_api():
    
    
    question = request.form.get("question")
    
    print("======================================================")
    print(question)
    
    answer = activeRag(question)
    print("======================================================")
    print(answer)
    
    data = {'answer' : answer}
    
    # response 정의
    response = jsonify(data)
    
    response.headers['Content-Type'] = 'application/json; charset=utf-8'
    
    # return
    return response


# @app.route('/history', methods=['POST'])
# def upload_api():
    
    
    
    

app.run(host='0.0.0.0', port=5000)