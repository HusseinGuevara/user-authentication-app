import './../../assets/css/homeStyles.css';
import Quantum from '../../assets/images/quantum.png'
import Divider from '@mui/joy/Divider';




const Home = () => {
    return (
        <section>
            <div className='top-container'></div>
            <div className='title-container'>
                <img src={Quantum} alt='Logo'/>
                <h2>QUANTUM AI</h2>
                <p>Leading the way to Quantum Computing and Artificial Intelligence integration.</p>
            </div>
            <div className='header-container'>
              
            </div>
            <div className='button-container'>
                <a href='/login' >Log in</a>
                <Divider orientation="horizontal">or</Divider>
                <a href='/' >Sign up</a>
            </div>
            <footer className='footer-container'>
                <p> © 2023 Quantum AI Inc.</p>
            </footer>
        </section>
    )
}

export default Home;