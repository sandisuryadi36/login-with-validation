import React from "react";

export default class Welcome extends React.Component {

    handleLogout = () => {
        this.props.logout({
            email: "",
            password: "",
            logged: false
        })
    }

    render() {
        return (
            <div className="card col-md-6 col-lg-4 center">
                <div className="card-header text-center bg-success text-light">
                    Registration Successfull
                </div>
                <div className="card-body d-flex flex-column align-items-center">
                    <h1>Welcome</h1>
                    <p>Email: {this.props.email}</p>
                    <p>Password: {this.props.password}</p>
                </div>
                <button type="button" className="btn btn-outline-danger m-3 align-self-center" onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}