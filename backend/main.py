import json , time
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
import requests
import shutil
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing.image import load_img , img_to_array
from tensorflow.keras.preprocessing import image
import tensorflow_hub as hub
import os
import pickle
from tensorflow.keras.utils import custom_object_scope
import math
import random

with open('disease.dat' , 'rb') as f:
    disease_model = pickle.load(f)

with open('label_encoder.pkl' , 'rb') as f:
    labels = pickle.load(f)

app = Flask(__name__)

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response
@app.route('/disease', methods=['POST'])
def disease_check():
    
        request_data = request.get_json()

        res =disease_model.predict([[int(str(request_data['itching'])),int(str(request_data['skin_rash'])),int(str(request_data['continuous_sneezing'])),int(str(request_data['shivering'])),int(str(request_data['joint_pain'])),int(str(request_data['stomach_pain'])),int(str(request_data['vomiting'])),int(str(request_data['fatigue'])),int(str(request_data['weight_loss'])),int(str(request_data['high_fever'])),int(str(request_data['breathlessness'])),int(str(request_data['dehydration'])),int(str(request_data['indigestion'])),int(str(request_data['headache'])),int(str(request_data['dark_urine'])),int(str(request_data['nausea'])),int(str(request_data['loss_of_appetite'])),int(str(request_data['pain_behind_the_eyes'])),int(str(request_data['back_pain'])),int(str(request_data['abdominal_pain'])),int(str(request_data['diarrhoea'])),int(str(request_data['mild_fever'])),int(str(request_data['acute_liver_failure'])),int(str(request_data['swelling_of_stomach'])),int(str(request_data['swelled_lymph_nodes'])),int(str(request_data['chest_pain'])),int(str(request_data['fast_heart_rate'])),int(str(request_data['pain_in_anal_region'])),int(str(request_data['bloody_stool'])),int(str(request_data['neck_pain'])),int(str(request_data['dizziness'])),int(str(request_data['puffy_face_and_eyes'])),int(str(request_data['enlarged_thyroid'])),int(str(request_data['drying_and_tingling_lips'])),int(str(request_data['knee_pain'])),int(str(request_data['hip_joint_pain'])),int(str(request_data['muscle_weakness'])),int(str(request_data['swelling_joints'])),int(str(request_data['loss_of_smell'])),int(str(request_data['bladder_discomfort'])),int(str(request_data['foul_smell_of_urine'])),int(str(request_data['red_spots_over_body'])),int(str(request_data['abnormal_menstruation'])),int(str(request_data['stomach_bleeding'])),int(str(request_data['history_of_alcohol_consumption']))]])
        print(res)

        res_disease = labels.inverse_transform(res)[0]

        json_dump = json.dumps({"disease":res_disease,"success":"true"})

        return json_dump
        

if __name__ == '__main__':
	app.run(host="0.0.0.0", port=1111)