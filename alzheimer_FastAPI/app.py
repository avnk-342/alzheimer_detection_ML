import keras
import uvicorn
from fastapi import FastAPI, UploadFile, File
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
from keras.preprocessing.image import img_to_array
from PIL import Image

app = FastAPI()

# application can contact with api if it is running of following port
origins = [
    'https://alzheimer-detection-ml.vercel.app'  
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], # Allows all methods (GET, POST, etc.)
    allow_headers=["*"], # Allows all headers
)


# Loading model
my_model = keras.models.load_model("./model.keras")



@app.post('/')
async def get_prediction(file: UploadFile = File(...)):

    class_name = ['Mild Demented', 'Moderate Demented', 'Non Demented', 'Very-Mild Demented']
    img = Image.open(file.file).convert("RGB")
    img = img.resize((128,128))
    img = img_to_array(img)
    img = np.expand_dims(img, axis = 0)
    prediction = my_model.predict(img)
    yclasses = prediction.argmax(axis=-1)
    ans = class_name[yclasses[0]]
    
    return {"Msg" : f"{ans}"}
    