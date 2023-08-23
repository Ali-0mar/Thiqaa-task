import "./SignUp.scss";
import thiqaaLogo from "../../assets/thiqaa-logo.png";
const Signup = () => {

    return (
        <div className="signup-container">
            <div className="form-container">
                <div className="logo">
                    <img  src={thiqaaLogo} alt=""/>
                </div>
                <form className="from-up">
                    <label>
                <span>Student Full Name: </span>
                <input type="email" required />
            </label>
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
                    <span>Already a student?
                        <a href="/login">Login</a>
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Signup;