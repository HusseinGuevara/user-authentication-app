import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import './../../assets/css/loginFormStyles.css';

const LoginForm = () => {
    return(
        <section>
            <div className='top-container'></div>
            <div className='login-header-container'>
                <h2>Log in</h2>
            </div>
                <div className='bottom-container'>
                    <div className='login-container'>
                        <Input  startDecorator={< EmailIcon/>} placeholder='Email Address' fullWidth />       
                        <Input  startDecorator={< KeyIcon/>} placeholder='Password' fullWidth />
                        <Button type='submit' variant='outlined' fullWidth > Log in </Button>
                        <a href='/' >Forgot password?</a>
                        <p>Don't have an account? <a href='/' >Sign up</a></p>
                    </div> 
                </div>    
                <footer className='footer-container'>
                    <p> © 2023 Quantum AI Inc.</p>
                </footer>
        </section>    
    );
};

export default LoginForm;
