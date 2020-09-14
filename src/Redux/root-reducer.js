import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './User/user.reducer';
import userCountReducer from './Count/user-count.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userCount']
}

const rootReducer = combineReducers({
    user: userReducer,
    userCount: userCountReducer
});

export default persistReducer(persistConfig, rootReducer);