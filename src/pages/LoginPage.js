import React, {Component} from 'react';
import '../css/LoginPage.css';
import styled from "styled-components";
import logo from "../images/logo.png";

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            password: "",
        }

        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    inputChangeHandler(e) {
        let oldState = this.state;
        oldState.input = e.target.value;
        this.setState(oldState);
    }

    passwordChangeHandler(e) {
        let oldState = this.state;
        oldState.password = e.target.value;
        this.setState(oldState);
    }

    signIn() {
        let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        let numberPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

        let passwordPattern = /[a-zA-Z0-9.!@#$%^&*_]{4,60}/;
    }

    render() {
        return (
            <HeaderComponent className="headerSection">
                <div className="logoTop">
                    <Logo src={logo}  alt="Netflix Logo" style={{"width": "10.5vw", "height": "12.5vh"}}/>
                </div>
                <div>
                    Sign In
                    <form>
                        <input type="text" onChange={(e) => this.inputChangeHandler(e)} defaultValue="Email or phone number"/>
                        <input type="text" onChange={(e) => this.passwordChangeHandler(e)} defaultValue="Password"/>
                        <button onClick={() => this.signIn()}>Sign in</button>
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </form>
                </div>
            </HeaderComponent>
        )
    }
}

const HeaderComponent = styled.div`
    .logoTop {
        position: relative;
        height: 10rem;
        z-index: 2;
    }
`;

const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 30%;
    left: 7%;
    transform: translate(-50%, -50%);
`;

export default LoginPage;