import { combineReducers }  from 'redux';
import UserData             from './userdata';
import RubricData           from './rubricdata';

const rootReducer = combineReducers({
    userData:       UserData,
    rubricData:     RubricData
});

export default rootReducer;