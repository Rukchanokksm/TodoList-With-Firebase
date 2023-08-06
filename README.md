# TodoList with Firebase Store using React.js

![Alt text](image.png)

This project is a simple TodoList application that uses Firebase Realtime Database for storing and managing tasks. The application is built using React.js and provides four main functionalities: push, read, update, and delete.

## Features

1. **Push**: The application allows users to add new tasks to the TodoList. When a new task is added, it will be stored in the Firebase Realtime Database, and the updated list will be displayed in real-time on the webpage.

2. **Read**: The application fetches task data from the Firebase Realtime Database and displays the existing tasks on the webpage when it loads. This ensures that the user can see their tasks even if they reload the page or return to the application later.

3. **Update**: Users can mark a task as completed or incomplete by clicking on it. This action updates the corresponding boolean value in the Firebase Realtime Database, and the task's appearance will change accordingly on the webpage (e.g., crossed-out when completed).

4. **Delete**: Users can delete a task from the TodoList by clicking on the "Delete" button associated with each task. This action removes the task from both the Firebase Realtime Database and the displayed list on the webpage.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine using the following command:

```
git clone https://github.com/Rukchanokksm/TodoList-With-Firebase.git
```

2. Navigate to the project directory:

```
cd your-repo
```

3. Install the required dependencies using npm or yarn:

```
npm install
```

4. Set up Firebase Realtime Database:

   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project and set up Firebase Realtime Database.
   - Copy the Firebase config object (apiKey, authDomain, databaseURL, projectId, etc.) from the Firebase Console.

5. Create a `.env` file in the root directory of the project and add the Firebase config object as follows:

```
REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_FIREBASE_DATABASE_URL=YOUR_DATABASE_URL
REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID
```

6. Start the development server:

```
npm start
```

7. Open your web browser and go to `http://localhost:3000` to view the TodoList application.

## Contributing

Contributions to this project are welcome! If you find any bugs or want to suggest new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

I hope you find this README helpful for your TodoList project with Firebase Store using React.js. If you have any questions or need further assistance, feel free to ask! Good luck with your project! 🚀
