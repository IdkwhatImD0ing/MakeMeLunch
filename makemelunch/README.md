# MakeMeLunch

## 💡Inspiration

Inspiration came from [ideas drafted below] 

• ~~i was making dinner when we were discussing this~~

• it's not hard to lose track of what you have/don't have and that means 1) stuff goes bad or 2) you suddenly want to make something and don't realize you don't have what you need

## 💻What it does

• Allows a user create an account to store a list of kitchen ingredients.

• List is edited through adding and removing items from search result.

• Displays relevant food recipes based on a user's stored list of ingredients.

• 

## 🛠️How we built it

• React/Next.js

• Javascript

• Spoontacular API for food/recipe data

• Firebase [for login server?]

• 

## 🛑Challenges we ran into

• [testing sign in/sign up screen]

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

• JavaScript scripting

• HTML formatting

•

## ⚠️ Known problems

• Due to the small dataset used to train the model, some hand poses are not correctly classified. Would need a larger dataset to correct this issue.

• Some letters are very similar, where the model struggles. Examples include (A/S/E) (M/N/V)

• Due to J and Z requiring movement, the model is not very accurate at classifying those letters.

## 🛣️ Future Plans

• Filters for time consumption and calorie intake

• Further UI improvements

• Options to display healthier substitutes for certain recipe ingredients 
