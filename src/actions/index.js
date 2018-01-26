import FB           from 'firebase';
import Config       from '../config';
import Types        from './types';
import _            from 'lodash';

const {
    FETCH_USER_DATA,
    FETCH_RUBRIC_DATA
} = Types;

let AccessData = {
    apiKey:             Config.FIREBASE_API_KEY,
    authDomain:         Config.FIREBASE_AUTH_DOMAIN,
    databaseURL:        Config.FIREBASE_DATABASE_URL,
    storageBucket:      Config.FIREBASE_STORAGE_BUCKET,
    projectId:          Config.FIREBASE_PROJECTID,
    messagingSenderId:  Config.FIREBASE_MESSAGE_SENDERID
};

FB.initializeApp(AccessData);
const DB = FB.database();
FB.auth().signInAnonymously().catch((error) => { console.warn(error); });


export function fetchUserData(email){
    return dispatch => {
        DB.ref('/users').once('value', snapshot => {
            dispatch({
                type: FETCH_USER_DATA,
                payload: [snapshot.val(),email]
            });
        });
    };
}

export function fetchRubricData() {
    return dispatch => {
        DB.ref('/questions').once('value', snapshot => {
            dispatch({
                type: FETCH_RUBRIC_DATA,
                payload: snapshot.val()
            });
        });
    };
}

