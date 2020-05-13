import React from "react";
import classes from "./Users.module.css";
import userPhoto from '/Users/57k/Desktop/ooo/myapp/sn/src/assets/img/emkras-1.svg';
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
        <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id);
                            }}>unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id);
                            }}>follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
        </div>
    )
};

export default User;