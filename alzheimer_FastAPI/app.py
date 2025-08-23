import keras
import uvicorn
from fastapi import FastAPI, Request, Form, UploadFile, File
import uuid
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
from keras.preprocessing.image import load_img, img_to_array

app = FastAPI()

IMAGEDIR = "image/"

# application can contact with api if it is running of following port
origins = [
    'http://localhost:3000'  
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
)


# Loading model
my_model = keras.models.load_model("model.keras")



@app.post('/')
async def get_prediction(file: UploadFile = File(...)):
    file.filename = f"{uuid.uuid4()}.jpg"
    contents = await file.read()

    #saving image
    with open(f"{IMAGEDIR}{file.filename}", "wb") as f:
        f.write(contents)

    class_name = ['Mild Demented', 'Moderate Demented', 'Non Demented', 'Very-Mild Demented']
    img = load_img(f"image/{file.filename}", target_size=(128, 128))
    img = img_to_array(img)
    img = np.expand_dims(img, axis = 0)
    prediction = my_model.predict(img)
    yclasses = prediction.argmax(axis=-1)
    ans = class_name[yclasses[0]]
    
    return {"Msg" : f"{ans}"}
    