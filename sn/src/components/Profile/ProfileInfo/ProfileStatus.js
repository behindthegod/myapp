import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };
    //local state

    activateEditMode() {
        this.setState({
            editMode: true
        });
    };
    deactivateEditMode() {
        this.setState({
            editMode: false
        });
    };


    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ () => {this.activateEditMode()}}>{this.props.status}</span>
                    </div>
                    }
                    {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                    }
                </div>
            </div>
        )
    };
};


export default ProfileStatus;