import './Sign.css';
function Sign (){
    return(
        <div className='box'>
             <div className='head'>
                <h1>Signin to your<br/>popX Account</h1>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
            </div>
            <form>
                <div className='inputBox'>
                    <input type='text' required="required"/>
                    <span>Email address</span>
                </div>
                <div className='inputBox'>
                    <input type='text' required="required"/>
                    <span>Password</span>
                </div>
            </form>
                  <button className='btn'>Login</button>
        </div>
    )
}
export default Sign;