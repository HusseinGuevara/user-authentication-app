import './../../assets/css/homeStyles.css';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';




const Home = () => {
    return (
        <section>
            <div className='top-container'>

            </div>
            <div className='title-container'>
                <h2>BioTech</h2>
            </div>
            <div className='header-container'>
                <h1>Welcome to BioTech</h1>
                <p className='header-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='button-container'>
                <Button type='submit' variant='outlined' fullWidth > Log in </Button>
                <Divider orientation="horizontal">or</Divider>
                <Button type='submit' variant='outlined' fullWidth > Sign up </Button>
            </div>
            <footer className='footer-container'>
                <p> © 2023 BioTech Inc.</p>
            </footer>
        </section>
    )
}

export default Home;