import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './User/user.reducer';
import userCountReducer from './Count/user-count.reducer';
import agentReducer from './Agents/agents.reducer';
import { categoryReducer } from './Category/category.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userCount', 'agents']
}

const rootReducer = combineReducers({
    user: userReducer,
    userCount: userCountReducer,
    agents: agentReducer,
    category: categoryReducer
});

export default persistReducer(persistConfig, rootReducer);