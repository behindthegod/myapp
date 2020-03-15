import React from "react";
import classes from "./Users.module.css";
import userPhoto from '/Users/57k/Desktop/ooo/myapp/sn/src/assets/img/emkras-1.svg';

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++){
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.num}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto}/>

                    </div>
                    <div>{u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;