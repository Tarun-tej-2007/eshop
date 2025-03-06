# ESHOP
## MILESTONE1🎯
This project was built by using MERN Stack. Through the mentor-guided project,I learnt to build scalable APIs. I learnt to implement secure login registration functionalities. -Database Schema Design:I explored how to create structured data models using MongoDB.
Backend Development: As a part of the project, I learnt to set up robust server-side logic with Node.js and Express. 

The overall vision, goals, and key features of the e-commerce application.Get inspired by a live demonstration of the completed application. Observe the app's functionality, user interface, and backend integration.

## MILESTONE2🐣
Set Up the Development Environment: Install the required tools and dependencies for the MERN stack project.
Understand Server-Client Interaction: Learn how the frontend (client) communicates with the backend (server) using APIs.
Set Up a Simple Server: Create a basic server using Node.js and Express to lay the foundation for the project.
## Key features of milestone 2 🛠️
Project Folder Structure: Learn to organize your project files into separate frontend and backend directories.
React Frontend Setup: Initialize a React application for building the user interface.
Node.js Backend Setup: Set up a simple Node.js server to prepare for API integration in future milestones.
Tailwind CSS Configuration: Integrate and configure Tailwind CSS to enable modern, responsive, and utility-based styling.
Login Page Development: Create the first user interface of your e-commerce application, focusing on both functionality and styling.

## MILESTONE3 🌐
## Key features of Milestone 3 🛠️
Backend folder structure:
Create a structured hierarchy for organizing routes, controllers, models, and middleware.

Server Setup:
Use Node.js and Express to create a backend server.
Configure the server to listen on a designated port. Database Connection
Integrate MongoDB for efficient data storage.
Confirm the connection between the server and MongoDB.

Error Handling:
Provide clear error messages for better debugging and user feedback.

Setting up backend folders and files.
Configuring and connecting the server to MongoDB.
Writing basic error-handling code.

## MILESTONE4 🌟
## Steps for Milestone 4 📝
Explaining and creating the User Model
Creating the User Controller
Setting up Multer for file uploads

We creatwd a model 
A model is like a detailed map or plan.
When you create a User Model, you’re designing how a user’s data (like name, email, and password) will look in the database. Imagine drawing a blueprint of a house.
The model is the map of what information you need to store for each user.
In MongoDB, we use something called Schemas to create a model.
A schema is a definition of what data should look like for that model.

we created a controller
A controller is a special part of the server that decides what happens when someone interacts with your app.
For example, if someone wants to sign up for your website, the controller will handle what happens when the data is sent to the server.
Think of the controller as a "manager" of requests and responses. It’s like the teacher in a classroom—telling the students (your app) what to do and ensuring everything goes smoothly.

we created a file upload with multer
Sometimes, your users might want to upload files like profile pictures.
To help with this, we use Multer, which is a tool that makes it easy to upload files to your server.
Multer will help us store user images in the backend and keep track of them. It's like a virtual file cabinet for storing pictures!

## MILESTONE5 💡
I created the frontend UI for users to register by filling out their details.
We ensured that user inputs (like email and password) are properly validated before they’re submitted. Update the README file: Don’t forget to document what you’ve accomplished!
# THE SIGN-UP PAGE
The Sign-Up page is where users can enter their details to create an account. This page will typically include fields like:
Name
Email
Password
This page allows users to provide their information, which will be sent to the server for processing.
We createD a simple yet effective sign-up form that looks clean and is user-friendly.

## Steps for Milestone 5 📝
In this milestone, you will work on the frontend while your mentor will guide you through:
Building the Sign-Up Page with HTML and CSS.
Adding form validation to ensure users input valid data.

## MILESTONE6 💥
Understand how to encrypt the passwords before saving.
Know how to store complete user data securely in the database.
### encrypting passwords
Protect User Data: Keeps passwords safe if hackers access the database.
Privacy: Ensures user passwords aren’t visible to anyone.
Compliance: Follows security laws like GDPR and PCI-DSS.
Stops Password Theft: Encrypted passwords can’t be easily stolen or guessed

## Steps for Milestone 6 📝
Encrypt the Password:
Use bcrypt to hash the user's password during signup.
Save the hashed password in the database instead of plain text.
Store Complete User Data:
Save all the user's data (e.g., name, email, etc.) in the database while ensuring that the password remains encrypted.

## MILESTONE7 🔑
### User Enters Credentials:
The user provides their email/username and password on the login page.

### Fetch User Data from Database:
The backend retrieves the user record based on the provided email/username.
If the user is not found, return an error: "User does not exist."
Compare Encrypted Passwords:

Process the user's input password using the same hashing algorithm (e.g., bcrypt).
Compare the resulting hash to the stored hashed password.
If they match, the user is authenticated; if not, send an error.

## Steps for Milestone 7 📝
Create Login Endpoint:

Accept user credentials (email/username and password).
Retrieve the corresponding user from the database.
Validate Password:

Use bcrypt to hash the entered password.
Compare it with the stored hashed password for authentication.

## MILESTONE8 🎯
Create a card component.
Display those cards on the products page.
# Create Card Components:
Presents product details in a clear and visually appealing way.
Can be used across multiple pages or sections of the app.
Makes it easy for users to browse and interact with products.
Keeps the homepage clean and structured.
# Display a Single Card for Multiple Products
Design a single card component that accepts product details as props.
Use array mapping to iterate over the product list and render a card for each product.
Pass unique product information (e.g., name, price, image) to each card.
Ensure the layout remains uniform for all products

## MILESTONE9 🐣
Create a form that will take all the details of product
Take multiple images as input.
#  Create Product form:
Here we will create an form to input all the details of product.
This details will be eventually saved in database and will be displayed on products home page we created in previous milestone.

## MILESTONE 10 🌐
Write product schema
To create an end point to validate and store product details in mongodb.
# Product Schema
Define the structure of product data (e.g., name, description, price, image URL) using Mongoose. -Ensure each field has proper validation (e.g., required fields, correct data types).
# Endpoint Creation
Build a POST endpoint to receive product data.
Validate and save the product details to MongoDB.
# Why Validation?
Ensures that only valid data is saved in the database, maintaining data integrity and preventing errors.

## MILESTONE 11 🌟
Write an endpoint that will send data from extract and send data from mongodb.
How to receive data at frontend -How to display that data dynamically using product card created earlier.
## Steps for Milestone 11📝
Write an endpoint that will send all products data to frontend In frontend write an function to get all the data Display these data dynamically passing to product card component

## MILESTONE 12 💡
Write an endpoint that will send data by filtering with my mail and send data from mongodb.
Receive data at frontend -How to display that data dynamically using product card created earlier.

## Steps for Milestone 12📝
Write an endpoint that will send all products with user mail to frontend In frontend write an function to get all the data Display these data dynamically passing to product card component

## MILESTONE 13 💥
Write an endpoint that will update the existing data in MongoDB.
To auto fill the form with previous data and give option to edit.

## Steps for Milestone 13📝
Write an endpoint that will receive new data and update the existing data inside MondoDB. In frontend we will add an edit button to the product card. When click on edit we will send the data to form and make it auto fill and have option to edit those data and save.

## MILESTONE 14 🔑
 To write an endpoint that delete the product with specific ID from MongoDB

## Steps for Milestone 14📝
Write an endpoint that will Delete the data form MongoDB using ID. In frontend we will add an delete button to the product card. When click on delete button we will send the product id to server endpoint.