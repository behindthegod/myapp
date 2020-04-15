import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormControls/FormControls";
import {required} from "../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} name={"login"} component={Input} validate={[required]} type={"input"}/></div>
            <div><Field placeholder={"Password"} name={"password"}  component={Input} validate={[required]} type={"input"}/></div>
            <div><Field component={Input} name={"rememberMe"} type={"checkbox"}/>remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

 const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    };

    return <div>
        <h1></h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};


export default Login;