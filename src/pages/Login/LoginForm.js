import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import Divider from '@mui/joy/Divider';
import './../../assets/css/formStyles.css';

const LoginForm = () => {
    return(
        
        <section>
            <div className='top-container'></div>
            <div className='top-header-container'>
                <h2>Log In</h2>
            </div>
                <div className='bottom-container'>
                    <div className='form-container'>
                        <Input  startDecorator={< EmailIcon/>} placeholder='Email Address' fullWidth />       
                        <Input  startDecorator={< KeyIcon/>} placeholder='Password' fullWidth />
                        <Button type='submit' variant='outlined' fullWidth > Log in </Button>
                        <a href='/forgotPassword' >Forgot password?</a>
                        <p>Don't have an account? <a href='/signup' >Sign up</a></p>
                    </div> 
                    <Divider orientation="horizontal">or</Divider>
                    <div id="g_id_onload"
                        data-client_id="YOUR_GOOGLE_CLIENT_ID"
                        data-login_uri="https://your.domain/your_login_endpoint"
                        data-auto_prompt="false">
                    </div>
                    <div className="g_id_signin"
                        data-type="standard"
                        data-size="large"
                        data-theme="filled_black"
                        data-text="sign_in_with"
                        data-shape="pill"
                        data-logo_alignment="left">
                    </div>
                </div>    
                <footer className='footer-container'>
                    <p> © 2023 Quantum AI Inc.</p>
                </footer>
        </section>    
    );
};

export default LoginForm;
