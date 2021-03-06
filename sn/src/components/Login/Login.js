import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormControls/FormControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "../Common/FormControls/FormControls.module.css";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} type={"input"}/></div>
            <div><Field placeholder={"Password"} name={"password"}  component={Input} validate={[required]} type={"password"}/></div>
            <div><Field component={Input} name={"rememberMe"} type={"checkbox"}/>remember me</div>
            {error && <div className={classes.formSummaryError}>
                {error}
            </div>
            }
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
        props.login(formData.email, formData.password, formData.rememberMe)
    };
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect (mapStateToProps, {login}) (Login);