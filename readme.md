# User Authentication System

## Overview

This project implements a simple user authentication system using **localStorage**.  
It includes:

- User **Registration**  
- User **Login**  
- Protected **Welcome page** displaying the logged-in user's name  
- **Logout** functionality

## How It Works

### Registration

- Users enter their **name**, **email**, and **password**.  
- Email format is validated, duplicates are prevented.  
- User data is saved in `localStorage` under the key `'users'`.

### Login

- Users enter **email** and **password**.  
- System checks credentials against stored users.  
- If valid, user data is saved in `localStorage` under `'loggedInUser'`.  
- User is redirected to the welcome page.

### Welcome Page

- On load, checks if `'loggedInUser'` exists in `localStorage`.  
- If not, redirects to login page.  
- Displays welcome message with user's name.  
- Includes a **Logout** button.

### Logout

- Clicking Logout removes `'loggedInUser'` from `localStorage`.  
- Redirects user to login page.



