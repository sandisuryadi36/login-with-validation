import React from "react";

const InputForm = ({label, type, name, onChange}) => {
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
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form className="container d-flex flex-column" onSubmit={this.handleSubmit}>
                <InputForm label={"Email"} type={"email"} name={"email"}
                    onChange={value => this.setState({email: value})} />
                <InputForm label={"Password"} type={"password"} name={"password"}
                    onChange={value => this.setState({ password: value })} />
                <button type="submit" className="btn btn-success m-3 align-self-center">Submit</button>
            </form>
        );
    }
}
