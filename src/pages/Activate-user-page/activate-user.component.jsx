import React, { useEffect} from 'react';
import './activate-user.styles.scss';
import UserDataTable from '../../components/user-data-table/user-data-table.component';
import SearchUser from '../../components/Search-User/Search-User.component';
import { connect } from 'react-redux';
import { asyncGetInactiveUsers, asyncGetMoreInactiveUsers } from './../../Redux/Inacive-Users/InactiveUser..actions';
import { selectIsGettingInactiveUsers, selectInactiveUsersSlice, selectInactivePrevDoc, selectIsGettingMoreInactive }
from './../../Redux/Inacive-Users/InactiveUser..selectors';
import { selectUserCountSlice } from './../../Redux/Count/user-count.selectors';
import Loader from 'react-loader-spinner';


const ActivateUserPage = ({ getInactiveUsers, inactiveUsers, isGettingInactiveUsers, userCount, prevDoc,
    getMoreInactiveUsers, isGettingMoreInactiveUsers }) => {

    const { activatedUsers, registeredUsers } = userCount;

    useEffect(() => {
        const getUsers = async () => {
            await getInactiveUsers()
        };
        getUsers();
    }, [getInactiveUsers]);

    const getMoreUsers = () => {
        if(!isGettingMoreInactiveUsers)  getMoreInactiveUsers(prevDoc);
    }

    return(
        <div className="activate-user">
            <div className="activate-user__header">
                <h3 className="activate-user__heading">Inactive Users</h3>
                <SearchUser />
            </div>
            {isGettingInactiveUsers ?
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '30vh'}}>
                <Loader
                    type="TailSpin"
                    color="#120165"
                    height={70}
                    width={70}
                />
            </div> :
                <UserDataTable users={inactiveUsers} allUsers={true} />
            }
            <div className="align-center">
                {isGettingInactiveUsers ? '' :
                    registeredUsers - activatedUsers > inactiveUsers.length ?
                    <button onClick={getMoreUsers} className="users__table-more">More</button>
                : '' }
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    isGettingInactiveUsers: selectIsGettingInactiveUsers(state),
    inactiveUsers: selectInactiveUsersSlice(state),
    userCount: selectUserCountSlice(state),
    prevDoc: selectInactivePrevDoc(state),
    isGettingMoreInactiveUsers: selectIsGettingMoreInactive(state)
})

const mapDispatchToProps = dispatch => ({
    getInactiveUsers: () => dispatch(asyncGetInactiveUsers()),
    getMoreInactiveUsers: prevDoc => dispatch(asyncGetMoreInactiveUsers(prevDoc))
});

export default connect(mapStateToProps, mapDispatchToProps) (ActivateUserPage);