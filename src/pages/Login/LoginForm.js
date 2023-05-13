import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import './../../assets/css/loginFormStyles.css';

const LoginForm = () => {
    return(
        <section>
            <div className='top-container'>

            </div>
            <div className='login-header-container'>
                <h2>Welcome back User</h2>
            </div>
                <div className='bottom-container'>
                    <div className='login-container'>
                        <Input color='info' startDecorator={< EmailIcon/>} placeholder='Email Address' fullWidth />       
                        <Input color='info' startDecorator={< KeyIcon/>} placeholder='Password' fullWidth />
                        <a href='/' >Forgot password?</a>
                        <Button type='submit' variant='outlined' fullWidth > Log in </Button>
                    </div> 
                </div>    
                <footer className='footer-container'>
                    <p> © 2023 Quantum AI Inc.</p>
                </footer>
        </section>    
    );
};

export default LoginForm;
