# signup-web-service
a signup restful web service using node.js


To start the app, please do the followings:

1. npm install 
2. npm start to start the server
3. To try out the sign up API, Please use Postman to mimic HTTP client, and send request to the node server. 
   Once you are in postman:
   a. choose POST as the method. 
   b. fill in the  URL as localhost:3001/auth/signup
   c. click on 'Body', as well as choose the JSON(application/json) as the data type
   d. fill in the request body, it has to be in JSON format,and the keys are as follows, for example:  
   {
     "username": "amberrr03",
      "firstname": "amber3",
      "lastname" : "lum",
      "password": "123456"
   }
   
   To test out, you can try use different values for username and checkout the result.
