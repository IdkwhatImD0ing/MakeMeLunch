# ASL Transcription in Augmented Reality

## 💡Inspiration

Inspiration came from one of my online friends who is deaf. He likes to create content on TikTok and YouTube but doesn't like the fact that he would need to write captions to convey his thoughts to his audience.
I created this ASL transcriber to hopefully help him create content by allowing him to express his thoughts using American Sign Language.
The lens would automatically convert the letters into text, letting him create content without worrying about writing captions for every single action.

Apart from helping transcribe ASL in real time. This lens could also be used as a learning tool for ASL. Real time transcription allows the user to practice speed and accuracy without the need for an interpreter. 

## 💻What it does

• Uses Machine Learning to classify various hand motions into American Sign Language in real time.

• Displays the text in augmented reality.

• High Accuracy allows for more precise transcriptions.

• Tapping Screen toggles live predictions on and off.

Predicting the N letter:

![Prediction](src/prediction.png)

## 🛠️How we built it

• Lens Studio

• Javascript

• Created model that incorporated transfer learning and image augmentation.

• Tensorflow Hub for MobileNetV2 architecture machine learning model pretrained on ImageNet1k [MobileNetV2 based model created by Google](https://tfhub.dev/google/tf2-preview/mobilenet_v2/classification/4)

• American Sign Language Dataset created by David Lee on roboflow: [Source](https://public.roboflow.com/object-detection/american-sign-language-letters)

• Tensorflow and Keras API to fine tune model: [Link to Model used in this lens](https://github.com/IdkwhatImD0ing/Kaggle/tree/main/SignLanguage)

• Model had a final validation accuracy of 94% on the dataset:

![Model Results](src/ModelResult.png)

## 🛑Challenges we ran into

• Originally, the built in MobileNet and EfficientNet Models has problems importing into Lens Studio. Spent over a week's time creating a model from scratch before finding a model on Tensorflow Hub that imported successfully.

• Lens Studio's API and Template Documentation was a bit confusing, took a while to fully understand.

• Len's studio would often crash while doing preview, requiring a force quit to restart the program.

• [Original Dataset](https://www.kaggle.com/datasets/grassknoted/asl-alphabet) Turned out to be not official American Sign Language. Hence the high validation accuracy but low real-world accuracy. After switching to David Lee's Dataset, real world accuracy became much higher.

• David Lee's dataset was very small, requiring heavy image augmentation to train a properly fitted model. Even then, some poses were unable to be recognized by the model, requiring slight shifts in posture for the model to recognize.

![Sample of Dataset](src/Dataset.png)

• Original Image:

![Original](src/original.jpg)

• Augmented Images:

![Augmented](src/augmented.png)

## ✅Accomplishments that we're proud of

• Successfully training and implementing a Machine Learning Model in an application

• Used heavy image augmentation to expand the limited dataset.

• Deploying a model for the first time in a brand-new environment and editor.

• By using Hand Tracking, it gives the model a more precise input and also allows the lens to deactivate the model when there is no hand on the screen, preventing erroneous  predictions.

## 📖What we learned

• Various forms of Image Augmentation

• More ways of using Keras and Tensorflow API such as saving model as .onnx and TFLite file.

• How to use Lens Studio

• JavaScript scripting

• ASL

## ⚠️ Known problems

• Due to the small dataset used to train the model, some hand poses are not correctly classified. Would need a larger dataset to correct this issue.

• Some letters are very similar, where the model struggles. Examples include (A/S/E) (M/N/V)

• Due to J and Z requiring movement, the model is not very accurate at classifying those letters.

## 🛣️ Future Plans

• Once a larger dataset becomes available, re-train model for more accurate real-world performance

• Convert [Python Word Ninja](https://github.com/keredson/wordninja) to JavaScript in order to probabilistically split concatenated words. However, this is unfeasible at this time due to the chance of incorrectly predicted letters.

Word Ninja Usage:

![Split](src/Split.png)
