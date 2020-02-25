import classes from "./ProfileInfo.module.css";
import React from "react";


const ProfileInfo = (props) => {
    return <div className={classes.content}>
        <div><img src='https://im0-tub-by.yandex.net/i?id=65a08c78997674d67f47b147427a2485&n=13' alt='avatar'/></div>
        <div className={classes.descriptionBlock}>ava+descriptiont</div>
    </div>
};

export default ProfileInfo;