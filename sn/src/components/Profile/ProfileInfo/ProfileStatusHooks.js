import React, {useState} from "react";


const ProfileStatusHooks = (props) => {

    let stateWithSetState = useState(true);
    let editMode = stateWithSetState[0];
    let setEditMode = stateWithSetState[1];

    return (
        <div>
            <div>
                { !editMode &&
                <div>
                    <span>{props.status || "yo"}</span>
                </div>
                }
                { editMode &&
                <div>
                    <input autoFocus={true}/>
                </div>
                }
            </div>
        </div>
    )
};

export default ProfileStatusHooks;