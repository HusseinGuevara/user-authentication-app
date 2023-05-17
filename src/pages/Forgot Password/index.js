import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import EmailIcon from '@mui/icons-material/Email';




const ForgotPW = () => {
    return (
        <section>
            <div className='top-container'></div>
            <div className='top-header-container'>
                <h2>Forgot You Password?</h2>
                <p>Enter the email address associated with your aacount.</p>
            </div>
            <div className='form-container'> 
                <Input  startDecorator={< EmailIcon/>} placeholder='Email Address' fullWidth />  
                <Button type='submit' variant='outlined' fullWidth > Submit</Button>
            </div>
            <footer className='footer-container'>
                <p> © 2023 Quantum AI Inc.</p>
            </footer>
        </section>
    )
}

export default ForgotPW;