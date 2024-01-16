const validator = (data) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const errors = {email: "", password: "", repeat: ""};
   if (!regexEmail.test(data.email) || !data.email) {
      errors.email = "Please enter a valid email";
    }
    if (!data.password || data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (data.password !== data.repeat) {
      errors.repeat = "Passwords don't match";
    }
    return errors;
  };
  
  export default validator