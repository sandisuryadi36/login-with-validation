import React from "react";
import * as Validator from 'validatorjs';

const InputForm = ({ label, type, name, onChange }) => {
    return (
        <div className="my-3 row">
            <label className="form-label" htmlFor="email">{label}:</label>
            <input type={type} name={name} onChange={e => onChange(e.target.value)} />
        </div>
    )
}

export default class LoginForm extends React.Component {

    state = {
        email: "",
        password: "",
        logged: false,
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault()
        const { email, password } = this.state

        Validator.register('newEmail', function (value, requirement, attribute) { // requirement parameter defaults to null
            return value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        }, 'The email adress is not valid');

        let data = { email, password }

        let rules = {
            email: 'required|newEmail',
            password: 'required|min:8'
        };

        let validation = new Validator(data, rules);
        validation.fails()

        this.setState({
            errors: [
                ...validation.errors.get("email"),
                ...validation.errors.get("password")
            ]
        }, () => this.props.errorsValue(this.state.errors))

        if (validation.passes()) {
            this.setState({ logged: validation.passes() }, () => this.props.passValue(this.state))
        }
    }

    render() {
        return (
            <div>
                <form className="container d-flex flex-column" onSubmit={this.handleSubmit}>
                    <InputForm label={"Email"} type={"email"} name={"email"}
                        onChange={value => this.setState({ email: value })} />
                    <InputForm label={"Password"} type={"password"} name={"password"}
                        onChange={value => this.setState({ password: value })} />
                    <button type="submit" className="btn btn-success m-3 align-self-center">Login</button>
                </form>
            </div>
        );
    }
}
