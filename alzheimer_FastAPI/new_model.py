import tensorflow as tf
import keras
from tensorflow.keras import models, datasets, layers
import numpy as np
from keras.layers import Dropout
import pickle



train_set = keras.utils.image_dataset_from_directory(
    "./output/train",
    seed = 123,
    batch_size = 32,
    image_size = (128,128)
)
test_set = keras.utils.image_dataset_from_directory(
    "./output/test",
    seed = 123,
    batch_size = 32,
    image_size = (128,128)
)
val_set = keras.utils.image_dataset_from_directory(
    "./output/train",
    seed = 123,
    batch_size = 32,
    image_size = (128,128)
)


cnn = tf.keras.models.Sequential()

cnn.add(keras.layers.experimental.preprocessing.Rescaling(scale=1./255, offset=-1, input_shape=(128,128, 3)))

cnn.add(tf.keras.layers.Conv2D(filters = 16, kernel_size = 3, activation = "relu",padding='same',kernel_initializer="he_normal"))
cnn.add(tf.keras.layers.MaxPool2D((2,2)))

cnn.add(tf.keras.layers.Conv2D(filters = 32, kernel_size = 3, activation = "relu",padding='same',kernel_initializer="he_normal"))
cnn.add(tf.keras.layers.MaxPool2D((2,2)))

cnn.add(keras.layers.Dropout(0.20))

cnn.add(tf.keras.layers.Conv2D(filters = 64, kernel_size = 3, activation = "relu",padding='same',kernel_initializer="he_normal"))
cnn.add(tf.keras.layers.MaxPool2D((2,2)))

cnn.add(keras.layers.Dropout(0.25))
cnn.add(tf.keras.layers.Flatten())

cnn.add(tf.keras.layers.Dense(units = 128, activation = 'relu',kernel_initializer="he_normal"))
cnn.add(tf.keras.layers.Dense(units = 64, activation = 'relu'))
cnn.add(tf.keras.layers.Dense(units = 4, activation = 'softmax'))

cnn.compile(optimizer = 'adam', loss = 'sparse_categorical_crossentropy', metrics = ['accuracy'])
history = cnn.fit(train_set, validation_data = val_set, epochs = 15,batch_size=32,verbose=1 )

cnn.save("model.keras")