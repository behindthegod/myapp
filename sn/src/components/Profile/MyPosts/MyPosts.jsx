import React from "react";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../Common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const MyPost = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount} key={p.id}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };
    return <div>
        My post
        <AddPostReduxForm onSubmit={onAddPost}/>
        <div>
            {postsElement}
        </div>
    </div>
};

const AddPostRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newPostText"} validate={[required, maxLength10]} placeholder={"huy"}/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddPostReduxForm = reduxForm({form: "profileAddPost"})(AddPostRedux);

export default MyPost;