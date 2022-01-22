import React from "react";

export default class LoginForm extends React.Component {
    render() {
        return (
            <form className="container d-flex flex-column">
                <div className="my-3 d-flex flex-column">
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input type="email" name="email" id="emailInput" />
                </div>
                <div className="my-3 d-flex flex-column">
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input type="password" name="password" id="passwordlInput" />
                </div>
                <button type="submit" className="btn btn-success m-3 align-self-center">Submit</button>
            </form>
        );
    }
}
