import { initializeApp } from 'firebase'

const config = {
    apiKey: "AIzaSyCuHSn-cD1qEUJtL2MJcMbck-QuBlGVUpU",
    authDomain: "kanban-bdc05.firebaseapp.com",
    databaseURL: "https://kanban-bdc05.firebaseio.com",
    projectId: "kanban-bdc05",
    storageBucket: "kanban-bdc05.appspot.com",
    messagingSenderId: "795369428580"
  };

const firebase = initializeApp(config).database()

export default firebase
