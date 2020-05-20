import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage}
                   totalItemsCount={totalUsersCount}
                   onPageChanged={onPageChanged}
                   pageSize={pageSize}/>
        <div>
            {
                users.map(u => <User user={u}
                                     key={u.id}
                                     followingInProgress={props.followingInProgress}
                                     follow={props.follow}
                                     unfollow={props.unfollow}/>)
            }
        </div>
    </div>
};

export default Users;