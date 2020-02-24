import React from "react";
import classes from './Dialogs.module.css';

const Dialogs = () => {
    return <div className={classes.dialogs}>
        <div className={classes.dialogItem}>
            <div className={classes.dialog + ' ' + classes.active}>Sveta</div>
            <div className={classes.dialog}>Sveta</div>
        </div>
            <div>
                <div className={classes.message}> привет</div>
                <div className={classes.message}> samuray</div>
                <div className={classes.message}> js</div>
            </div>
        </div>

        };

export default Dialogs;