export default function SignUp() {
  return (
    <div>
      <div className="form">
        <div className="input-field">
          <h1>Sign Up</h1>

          <input type="text" className="inputs" placeholder="Name" />
          <input type="email" className="inputs" placeholder="Email Address" />
          <input
            type="number"
            className="inputs"
            placeholder="Contact Number"
          />
          <a href="">verify contact number</a>
          <div className="location">
            <input type="text" className="inputs1" placeholder="Select State" />
            <input type="text" className="inputs1" placeholder="Select City" />
          </div>
          <input type="text" className="inputs" placeholder="Your Profession" />
          <input type="text" className="inputs" placeholder="choose-file" />
          <input type="password" className="inputs" placeholder="password" />
          <div className="signup">
            <button className="sign-up">sign-up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
