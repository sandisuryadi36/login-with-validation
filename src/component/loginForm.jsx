import React from "react";

const InputForm = ({label, type, name}) => {
    return (
        <div className="my-3 row">
            <label className="form-label" htmlFor="email">{label}:</label>
            <input type={type} name={name} />
        </div>
    )
}

export default class LoginForm extends React.Component {
    render() {
        return (
            <form className="container d-flex flex-column">
                <InputForm label={"Email"} type={"email"} name={"email"} />
                <InputForm label={"Password"} type={"password"} name={"password"} />
                <div className="my-3">
                    <input type="checkbox" name="member" className="form-check-input"/>
                    <label className="form-check-label ms-2" htmlFor="member">Member:</label>
                </div>
                <button type="submit" className="btn btn-success m-3 align-self-center">Submit</button>
            </form>
        );
    }
}
