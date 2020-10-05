import React, { useEffect } from 'react';
import './Expired-Subscription.component.scss';
import SearchUser from './../../components/Search-User/Search-User.component';
import UserDataTable from './../../components/user-data-table/user-data-table.component';
import { connect } from 'react-redux';
import { asyncGetExpiredUsers, asyncGetMoreExpiredUsers } from './../../Redux/Expired-Users/Expired.actions';
import { selectIsGettingExpired, selectExpired, selectExpiredPrevDoc, selectIsGettingMoreExpired }
from './../../Redux/Expired-Users/Expired.selectors';


const ExpiredSubscription = ({ getExpiredUsers, isGettingExpired, expiredUsers, prevDoc, getMoreUsers, isGettingMoreExpired }) => {

    useEffect(() => {
        (async () => {
            await getExpiredUsers();
        }) ()
    }, [getExpiredUsers]);

    const getMoreExpiredUsers = () => {
        !isGettingMoreExpired && getMoreUsers(prevDoc);
    }

    return(
        <div className="expired">
            <div className="expired__header">
                <h1 className="expired__heading">Expired Subscription</h1>
                <SearchUser />
            </div>
            {isGettingExpired ? 'loading..........':
                <UserDataTable users={expiredUsers} allUsers={true} />}
                <div className="align-center">
                {isGettingExpired ? '' :
                    <button onClick={getMoreExpiredUsers} className="users__table-more">More</button> }
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    isGettingExpired: selectIsGettingExpired(state),
    expiredUsers: selectExpired(state),
    prevDoc: selectExpiredPrevDoc(state),
    isGettingMoreExpired: selectIsGettingMoreExpired(state)
})

const mapDispatchToProps = dispatch => ({
    getExpiredUsers: () => dispatch(asyncGetExpiredUsers()),
    getMoreUsers: prevDoc => dispatch(asyncGetMoreExpiredUsers(prevDoc))
})

export default connect(mapStateToProps, mapDispatchToProps) (ExpiredSubscription);