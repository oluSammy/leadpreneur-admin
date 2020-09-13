import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './User/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    user: userReducer
});

export default persistReducer(persistConfig, rootReducer);