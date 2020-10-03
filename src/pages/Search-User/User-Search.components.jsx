import React, {useEffect} from 'react';
import './User-Search.components.scss';
import UserDataTable from '../../components/user-data-table/user-data-table.component';
import { asyncSearchUser } from './../../Redux/Search-User/searchUser.actions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectIsSearchingUsers, selectUserSearchResult, selectUserSearchErrMsg } from './../../Redux/Search-User/searchUser.selectors';
import Loader from 'react-loader-spinner'

const UserSearch = ({ getSearchResult, searchResult, isSearching, errMsg }) =>{
    let { id } = useParams()

    useEffect(() => {
        const searchUser = async () => {
            await getSearchResult(id)
        }
        searchUser();
    }, [getSearchResult, id]);

    return(
        <div className="user-search">
            {errMsg === 'Empty Doc' ?
                <h1 className="user-search__heading" >{id} Not Found</h1> :
                <h1 className="user-search__heading" >{id}</h1>
        }
            {isSearching &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10vh'}}>
                <Loader
                type="Oval"
                color="#120165"
                height={70}
                width={70}
            />
            </div>}
            {!isSearching && searchResult && <UserDataTable users={searchResult} allUsers={true} />}
        </div>
    )
};

const mapStateToProps = state => ({
    isSearching: selectIsSearchingUsers(state),
    searchResult: selectUserSearchResult(state),
    errMsg: selectUserSearchErrMsg(state)
})

const mapDispatchToProps = dispatch => ({
    getSearchResult: searchString => dispatch(asyncSearchUser(searchString))
})

export default connect(mapStateToProps, mapDispatchToProps) (UserSearch);