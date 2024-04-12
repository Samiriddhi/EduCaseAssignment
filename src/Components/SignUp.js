import React from "react";

function SignUp() {
  return (
    <div>
      <h2>Create Your PopX account</h2>
      <div classneme="Info">
        <label>Name :</label>
        <input type="text" placeholder="Enter your Full Name" />
      </div>
      <div classnme="Info">
        <label>Phone Numbe :</label>
        <input type="text" placeholder="Enter Your Phone Number" />
      </div>
      <div classnme="Info">
        <label>Email :</label>
        <input type="email" placeholder="Enter your Email" />
      </div>
      <div classnme="Info">
        <label>Password :</label>
        <input type="password" placeholder="Enter your password" />
      </div>

      <div classnme="Info">
        <label>Company Name :</label>
        <input type="text" placeholder="Enter company Name" />
      </div>
      <div classnme="Info">
        <label>Are you an Agency ?</label>
        <input type="radio" name="agency" value="Yes" />
        <input type="radio" name="agency" value="No" />
      </div>

      <button>Create Account</button>
    </div>
  );
}

export default SignUp;
