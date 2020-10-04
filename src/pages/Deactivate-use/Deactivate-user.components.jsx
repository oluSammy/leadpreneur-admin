import React, { useEffect } from 'react'
import './Deactivate-user.styles.scss';
import UserDataTable from '../../components/user-data-table/user-data-table.component';
import SearchUser from '../../components/Search-User/Search-User.component';
import { connect } from 'react-redux';
import { asyncGetActivatedUsers, asyncGetMoreActiveUsers } from './../../Redux/Activated-Users/ActivatedUsers.actions';
import { selectActiveUsers, selectIsGettingActivatedUsers, selectIsGettingMoreActiveUsers, selectPrevActiveDoc } from './../../Redux/Activated-Users/ActivatedUsers.selectors';
import Loader from 'react-loader-spinner';
import { selectUserCountSlice } from './../../Redux/Count/user-count.selectors';


const DeactivateUserPage = ({ getActivatedUsers, isGettingActivatedUsers, activatedUsers, prevDoc,
    getMoreActiveUsers, isGettingMoreActiveUsers, userCount }) => {
    useEffect(() => {
        const getUsers = async () => {
            await getActivatedUsers();
        };
        getUsers();
    }, [getActivatedUsers]);

    const getActiveUsers = () => {
        if(!isGettingMoreActiveUsers){
            getMoreActiveUsers(prevDoc);
        }
    }

    return(
        <div className="deactivate-user">
            <div className="deactivate-user__header">
                <h3 className="deactivate-user__heading">Activated Users</h3>
                <SearchUser />
            </div>
            {isGettingActivatedUsers ?
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '30vh'}}>
                <Loader
                    type="TailSpin"
                    color="#120165"
                    height={70}
                    width={70}
                />
            </div>  :
            <UserDataTable users={activatedUsers} allUsers={true} />}
            <div className="align-center">
                {isGettingActivatedUsers ? '' :
                    userCount.activatedUsers > activatedUsers.length ?
                    <button onClick={getActiveUsers} className="users__table-more">More</button> : ''}
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    isGettingActivatedUsers: selectIsGettingActivatedUsers(state),
    activatedUsers: selectActiveUsers(state),
    prevDoc: selectPrevActiveDoc(state),
    isGettingMoreActiveUsers: selectIsGettingMoreActiveUsers(state),
    userCount: selectUserCountSlice(state)
})

const mapDispatchToProps = dispatch => ({
    getActivatedUsers: () => dispatch(asyncGetActivatedUsers()),
    getMoreActiveUsers: prevDoc => dispatch(asyncGetMoreActiveUsers(prevDoc))
})

export default connect(mapStateToProps, mapDispatchToProps) (DeactivateUserPage);