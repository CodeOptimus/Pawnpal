import { assets } from "../../assets/assets";
import "./SignUp.css";

function SignUp() {
    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <p>Enter your e-mail or phone number to log in or create a 
            PawnaPal account.</p>
            <form>
                <label htmlFor="fullName">Full Name</label><br />
                <input type="text" placeholder="Full Name" /><br />
                <label htmlFor="email">E-mail</label><br />
                <input type="text" placeholder="E-mail" /><br />
                <label htmlFor="phone">Contact</label><br />
                <input type="text" placeholder="Contact" /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" placeholder="Password" /><br />
                <button type="submit">Sign Up</button>
            </form>
            <div className="divider">
          <span>or sign in with</span>
        </div>


        <div className="social-buttons">
            <img src={assets.signup_google} alt="google icon" />
            <img src={assets.signup_facebook} alt="facebook icon" />
            <img src={assets.signup_instagram} alt="instagram icon" />
        </div>
        </div>
    )
}

export default SignUp;
