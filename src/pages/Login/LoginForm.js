import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import backgroundImg from './../../assets/images/harlem.jpg';
import './../../assets/css/loginFormStyles.css';

const LoginForm = () => {
    return(
        <section>
            <div style={{ 
                backgroundImage: `url(${backgroundImg})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }} className='login-header-container'>
                <h2>Welcome Back</h2>
            </div>
                <div className='bottom-container'>
                    <div className='login-container'>
                        <Input color='info' startDecorator={< EmailIcon/>} placeholder='Email Address' fullWidth />       
                        <Input color='info' startDecorator={< KeyIcon/>} placeholder='Password' fullWidth />
                        <Button type='submit' variant='outlined' fullWidth > Log in </Button>
                        <Divider orientation="horizontal">or</Divider>
                        <Button type='submit' variant='outlined' fullWidth > Sign up </Button>
                    </div> 
                </div>    
        </section>    
    );
};

export default LoginForm;
