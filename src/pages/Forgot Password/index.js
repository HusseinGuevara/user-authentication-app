import './../../assets/css/forgotPasswordStyles.css';
import Input from '@mui/joy/Input';
import EmailIcon from '@mui/icons-material/Email';




const ForgotPW = () => {
    return (
        <section>
            <div className='top-container'></div>
            <div className='forgotPW-header-container'>
                <h3>Forgot You Password?</h3>
                <p>Enter the email address associated with your aacount.</p>
            </div>
            <div className='forgotPW-form-container'> 
                <Input  startDecorator={< EmailIcon/>} placeholder='Email Address' fullWidth />       
            </div>
            <footer className='footer-container'>
                <p> © 2023 Quantum AI Inc.</p>
            </footer>
        </section>
    )
}

export default ForgotPW;