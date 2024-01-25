import './Login.css'
import { useNavigate } from 'react-router-dom';
function Login(){
        // Get the navigate function from the hook
        const navigate = useNavigate();
      
        // Function to handle navigation
        const handleNavigation = () => {
          // Use the navigate function to go to a different route
          navigate('/Account');
        };
        const handleNavi = () => {
            // Use the navigate function to go to a different route
            navigate('/Sign');
          };
    return(
        <div className='box'>
            <div className='pop'>
                <p>welcome to popX</p>
            </div>
                <div className='para'>
                    <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                </div>
                    <div className='btn1'>
                        <buttom onClick={handleNavigation}>Create Account</buttom>
                    </div>
                    <div className='btn2'>
                        <buttom  onClick={handleNavi}>Already Register!Login</buttom>
                    </div>
        </div>
    )
}
export default Login;