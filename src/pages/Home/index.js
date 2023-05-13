import './../../assets/css/homeStyles.css';
import Quantum from '../../assets/images/quantum.png'
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';




const Home = () => {
    return (
        <section>
            <div className='top-container'>
            </div>
            <div className='title-container'>
                <img src={Quantum}/>
                <h2>QUANTUM AI</h2>
            </div>
            <div className='header-container'>
              
            </div>
            <div className='button-container'>
                <Button type='submit' variant='outlined' fullWidth > Log in </Button>
                <Divider orientation="horizontal">or</Divider>
                <Button type='submit' variant='outlined' fullWidth > Sign up </Button>
            </div>
            <footer className='footer-container'>
                <p> © 2023 Quantum AI Inc.</p>
            </footer>
        </section>
    )
}

export default Home;