# A Song of Ice and Fire Character Tracker

## Overview
![image](https://github.com/user-attachments/assets/3bc5dfb0-404f-49fd-8c72-ac03ae243c30)

This project is a web application built to track characters from the epic series "A Song of Ice and Fire". It retrieves data from the [An API of Ice And Fire](https://anapioficeandfire.com/) and displays information about houses and their sworn members, indicating whether characters are alive or deceased.

The application is built using React.js for the frontend, Material-UI for styling and UI components, and Axios for making HTTP requests to the API.

## Video

https://www.loom.com/share/158465b912ed486f87b9cb4ef85436ad?sid=2510a94a-ccfc-4d64-9ddf-9c34181c1784

## Features

- Displays a list of houses from the API.
- Shows sworn members for each house, including their status (alive/dead) and death information if deceased.
- Supports pagination for navigating through multiple pages of houses.
- Includes loading indicators to provide feedback while fetching data.

## Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Timon0219/Ice_fire.git
   cd Ice_fire
2. **Install Dependencies:**

   ```bash
   npm install
   
3. **Start the development server:**

   ```bash
   npm start

4. **Open your browser:**
  Visit http://localhost:3000 to view the application.

## Usage
* Upon loading, the application will fetch data from the API and display a list of houses.
* Click on "Next" or "Previous" buttons to navigate between pages of houses.
* Each house card expands to show its sworn members and their status.

## Dependencies
* React.js
* Material-UI
* Axios
