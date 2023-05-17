import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import './../../assets/css/formStyles.css';

const SignUpForm = () => {
    return(
        <section>
            <div className='top-container'></div>
            <div className='top-header-container'>
                <h2>Sign Up</h2>
            </div>
            <div className='bottom-container'>
                <div className='form-container'>
                    <Input  startDecorator={<PersonIcon />} placeholder='User Name' fullWidth />
                    <Input  startDecorator={<EmailIcon />} placeholder='Email Address' fullWidth />       
                    <Input  startDecorator={<KeyIcon />} placeholder='Password' fullWidth />
                    <Input startDecorator={< PasswordIcon />} placeholder='Confiirm Password' fullWidth />
                    <Button type='submit' variant='outlined' fullWidth >Sign up </Button>
                    <p>Already have an account? <a href='/login' >Sign up</a></p>
                </div> 
            </div>
            <footer className='footer-container'>
                <p> © 2023 Quantum AI Inc.</p>
            </footer>    

        </section>
    )
}

export default SignUpForm;