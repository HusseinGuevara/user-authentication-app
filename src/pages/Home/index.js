import './../../assets/css/homeStyles.css';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';




const Home = () => {
    return (
        <section>
            <div className='title-container'>
                <h2>Home</h2>
            </div>
            <div className='header-container'>
                <h1>Home Page</h1>
                <p className='header-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='button-container'>
                <Button type='submit' variant='outlined' fullWidth > Log in </Button>
                <Divider orientation="horizontal">or</Divider>
                <Button type='submit' variant='outlined' fullWidth > Sign up </Button>
            </div>
        </section>
    )
}

export default Home;