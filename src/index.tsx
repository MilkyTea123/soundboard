import React from 'react';
import  { createRoot }  from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/**
 * Index handles configuration as well as being the main injection point for the application
 *
 * Last Modified
 * William Kwok
 * July 17, 2019
 */

////////////////////////////////////////////////////////////////////////////////////////////////////
//////// CONFIG ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// COMMENT/UNCOMMENT BELOW TO ENABLE OR DISABLE FIREBASE TO THE PROJECT
//  import * as fb from 'firebase/app';
 import 'firebase/app'
 import 'firebase/messaging';
 import 'firebase/database';
 import 'firebase/auth';

//  const firebaseConfig = {
//  	apiKey: "AIzaSyBkr6jirFdzkMofucO2z_KzN13hMDeWkVI",
//  	authDomain: "",
//  	databaseURL: "",
//  	projectId: "",
//  	storageBucket: "",
//  	messagingSenderId: "131891776719",
//  	appId: "1:131891776719:web:0bf2382aec94dcdf"
//  };
//  firebase.initializeApp(firebaseConfig);
let firebase = null;
// const provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithPopup(provider);

////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Render the app into the root element, and provide if the browser is IE or Edge into the props
 * In the future, you may want to change this prop to the browser name instead, or extend it to
 * work with browsers that are behind, such as Safari.
 */
// ReactDOM.render(<App firebase={firebase} />, document.getElementById('root'));

const domNode = document.getElementById('root');
if (domNode != null) {
	const root = createRoot(domNode);
	root.render(<App />)
}