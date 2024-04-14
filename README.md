# Reflectly

## **Introduction:**

*Reflectly* is a mental health application designed to assist users in coping with daily challenges and promoting self-reflection. 
By providing a space for users to reflect on their thoughts and feelings each day, *Reflectly* aims to support mental well-being and foster personal growth. 
Additionally, *Reflectly* offers a virtual therapist powered by ChatGPT, which engages users in conversation and provides guidance to help them navigate their mental health journey.

## **Features:**
- Daily Reflection: Users can record their thoughts, feelings, and experiences each day by uploading and saving notes on the dashboard.
- Virtual Therapist: *Reflectly* incorporates a virtual assistant powered by ChatGPT, capable of engaging in conversations with users, offering support, and providing resources
  to help them manage their mental health.
- Resources: *Reflectly* provides a tab where users can access online resources in a formatted way, making it simple to find helpful links to articles and more.

## **Getting Started:**
To use *Reflectly*, follow these steps:

Download the code onto your computer, then use/create the following
- Database (MongoDB) 
- Google Console Account to create the API Auth Key's
- Create a .env file to store your credentials. Example below:
  
  `MONGODB_URI = mongodb+srv://<username>:<password>@mongodburlhere`
  
  `GOOGLE_CLIENT_ID= YOUR_GOOGLE_ID_HERE `
  
  `GOOGLE_CLIENT_SECRET= YOUR_GOOGLE_CLIENT_SECRET_HERE `

  `GOOGLE_CALLBACK_URL=http://localhost:5000/google/callback`

## **Installation**
1.  To install and run this project, you must install dependencies using npm and then you may start your server:
  
    `$ npm install`

     `$ npm start`
   
2. From there, depending on which application the user would like to use, click on the *tabs* at the top to navigate between web pages
3. To use the notes application, click on *Add Note*, then click on the textbox and enter user input, then click *save* to save the note.
4. To access the daily affirmation application click on the *Daily Affirmation* tab, and then the user will enter their number to receive daily texts.
5. To access the *MoodTracker* click on the tab with that title then user inputs mood for the day.
6. To access the links, click on the tab titled *Resouces* and access the different articles that are displayed by clicking on the thumbnail.

![dashboard](https://github.com/Tanusakaray/HackKU_2024/assets/106645636/bbec4d07-0ee2-448c-b4aa-86a6da5294b6)


![Resources](https://github.com/Tanusakaray/HackKU_2024/assets/106645636/f7e3c62c-4c39-4027-84b4-695785cad8f7)

