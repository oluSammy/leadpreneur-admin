import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './User/user.reducer';
import userCountReducer from './Count/user-count.reducer';
import agentReducer from './Agents/agents.reducer';
import { categoryReducer } from './Category/category.reducer';
import { usersReducer } from './Users/users.reducer';
import searchUserReducer from './Search-User/searchUser.reducer';
import activatedUsersReducer from './Activated-Users/ActivatedUsers.reducer';
import inactiveUsersReducer from './Inacive-Users/InactiveUser.reducer';
import expiredReducer from './Expired-Users/Expired.reducer';



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userCount', 'agents', 'category']
}

const rootReducer = combineReducers({
    user: userReducer,
    userCount: userCountReducer,
    agents: agentReducer,
    category: categoryReducer,
    users: usersReducer,
    searchUser: searchUserReducer,
    activatedUsers: activatedUsersReducer,
    inactiveUsers: inactiveUsersReducer,
    expiredUsers: expiredReducer
});

export default persistReducer(persistConfig, rootReducer);