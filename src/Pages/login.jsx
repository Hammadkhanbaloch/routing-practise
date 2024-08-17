import "../App.css";
import { useNavigate } from 'react-router-dom';
import {
    TextField,
    Button
} from "@mui/material";
function Register()
    {
        const navigate = useNavigate();

        const customStyle = {
            margin: "5px",
            marginTop: "10px",
            marginBottom: "10px",
            width: "50%",
            height: "50px",
            borderRadius: "5px",
            fontSize: "16px",
          };
          const onSubmit = async (e) => {
            e.preventDefault();
            const book = {
              email: e.target.email.value,
              password: e.target.password.value,
            };
            console.log(book);
            navigate('/');
        }
        return(
            <>
            <div className="container">
                <div> 
                    <h1>Welcome to login Page</h1>
                </div>
            <form onSubmit={onSubmit}>
  <TextField
    style={customStyle}
    type="text"
    label="Email"
    variant="outlined"
    name="email"
    required
  />
  <TextField
    style={customStyle}
    type="password"
    label="Password"
    variant="outlined"
    name="password"
    required
  />
  <Button style={customStyle} variant="contained" color="primary" type="submit">
    Submit
  </Button>
  </form>

  </div>
</>
        )
    }
    export default Register;