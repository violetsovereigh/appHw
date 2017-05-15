import React, { Component } from 'react';
import * as firebase from 'firebase';
import { LoginStack } from './Router';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBuXm6NwZkZEfIdOHleKM7Uc_plTLgY3Mk",
            authDomain: "test01-d7151.firebaseapp.com",
            databaseURL: "https://test01-d7151.firebaseio.com",
            projectId: "test01-d7151",
            storageBucket: "test01-d7151.appspot.com",
            messagingSenderId: "911713525358"
        });
    }

    render() {
        return (
            <LoginStack />
        );
    }
}

export default App;