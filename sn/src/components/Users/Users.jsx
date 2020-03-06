import React from "react";
import classes from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-05/128/Steam-icon.png',
                    followed: false,
                    fullName: "Marta",
                    status: "I am sexy girl",
                    location: {city: 'Minsk', country: "Belarus"}
                },
                {
                    id: 2,
                    photoUrl: 'http://icons.iconarchive.com/icons/uiconstock/socialmedia/128/Orkut-icon.png',
                    followed: true,
                    fullName: "Mario",
                    status: "I am sexy girl too",
                    location: {city: 'Milan', country: "Italy"}
                },
                {
                    id: 3,
                    photoUrl: 'http://icons.iconarchive.com/icons/guillendesign/variations-2/128/Messenger-icon.png',
                    followed: false,
                    fullName: "Marat",
                    status: "I am sexy girl too",
                    location: {city: 'Moscow', country: "Russia"}
                },
            ]
        );
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photoUrl} className={classes.userPhoto}/></div>
                    <div>{u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)

        }
    </div>
};

export default Users;