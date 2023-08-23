import thiqaaLogo from "../../assets/thiqaa-logo.png";

const Login = () => {
    return (
        <div className="signup-container">
            <div className="form-container">
                <div className="logo">
                    <img  src={thiqaaLogo} alt=""/>
                </div>
                <form className="from-up">
                    <label>
                        <span>User name: </span>
                        <input type="text" required />
                    </label>
                    <label>
                        <span>Password: </span>
                        <input type="password" required />
                    </label>
                    <button className="btn">Sign Up</button>
                </form>
                <div>
                    <span>New Here?
                        <a href="/signup">Sign Up</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login;