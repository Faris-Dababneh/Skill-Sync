import { Firestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore'
import { doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import uuid from 'react-uuid';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const firebaseConfig = {
    apiKey: "AIzaSyA8nDHDkytDyhhlONryMoh_1Zc2qGCQzk0",
    authDomain: "human-benchmark-b3927.firebaseapp.com",
    projectId: "human-benchmark-b3927",
    storageBucket: "human-benchmark-b3927.appspot.com",
    messagingSenderId: "725020882877",
    appId: "1:725020882877:web:d5038d3e09caac4f7304d4",
    measurementId: "G-HBCSJBFX5X"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Returns an array of all the average reaction time test scores
async function getReactionTimes() {
    
    const colRef = collection(db, 'Reaction-Time')
    const docsSnap = await getDocs(colRef);

    const data = [];
    docsSnap.forEach(doc => {
        data.push(doc.data())
    })

    
    return data;
}

async function uploadReactionTimes(time)
{
    const data = {
        average: time
    };
    await setDoc(doc(db, 'Reaction-Time', uuid()), data);
}

async function getNumberTestScores() {
    return 0;
    // Look up how to use getDoc function 
}

async function uploadNumberTestScores(level)
{
    const data = {
        level: level
    };
    await setDoc(doc(db, 'Number-Memory', uuid()), data);
}

async function uploadGameSuggestion(suggestion, name)
{
    let suggestName;
    if (name.length === 0)
    {
        suggestName = uuid();
    }
    else
    {
        suggestName = name;
    }
    
    const data = {
        suggestion: suggestion
    };

    await setDoc(doc(db, 'Suggestions', suggestName), data);
}

async function SignIn(username, password)
{
    const user = db.collection('Accounts').doc(username);
    const userDoc = await user.get();
    if (!userDoc.exists) {
        console.log('No such document!');
        return false;
    } 
    else 
    {
        console.log('Document data:', userDoc.data());
        if (password === user.data()['password'])
        {
            return true;
        }
        return false;
    }

}

// Takes inputted username and password, creates a new document in the Accounts collection with the user's login info
async function Register(username, password)
{   
    const data = {
        password: password
    };
    await setDoc(doc(db, 'Accounts', username), data);
}

export { getReactionTimes, uploadReactionTimes, SignIn, Register, uploadNumberTestScores, getNumberTestScores, uploadGameSuggestion };




