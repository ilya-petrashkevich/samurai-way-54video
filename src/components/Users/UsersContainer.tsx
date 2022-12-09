import React, {ComponentType, FC} from 'react';
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../redux/users-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {compose, Dispatch} from "redux";
import {Users} from "./Users";

type MapStatePropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps)
)(Users)
//const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users /*Users*/);
// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users /*Users*/);
//export default UsersContainer;