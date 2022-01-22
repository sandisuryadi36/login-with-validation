import React from "react";
import ErrorMessage from "./errorMessage";
import LoginForm from "./loginForm";
import Welcome from "./welcome";

export default class LoginCard extends React.Component {

    state = {
        email: "",
        password: "",
        errors: [],
        logged: false
    }

    handleErrors = (value) => {
        this.setState({errors: value})
    }

    handleLogin = (value) => {
        this.setState(value)
    }

    logout = (value) => {
        this.setState(value)
    }

    render() {
        if (this.state.logged) {
            return (
                <Welcome email={this.state.email} password={this.state.password} logout={this.logout} />
            )
        }else return (
            <div className="card col-md-6 col-lg-4 center">
                <div className="card-header text-center">
                    Login Your Account
                </div>
                {
                    this.state.errors && <ErrorMessage errors={this.state.errors} />
                }
                <div className="card-body pt-0">
                    <LoginForm errorsValue={this.handleErrors} passValue={this.handleLogin} />
                </div>
            </div>
        )
    }
}