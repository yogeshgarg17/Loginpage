import './Account.css';
function Account(){
    return(
        <div className="box">
            <div className='head'>
                <h1>Create your<br/>popX Account</h1>
            </div>
            <form>
                <div className='inputBox'>
                    <input type='text' required="required"/>
                    <span>Full Name </span>
                </div>
                <div className='inputBox'>
                    <input type='text' required="required"/>
                    <span>Phone number </span>
                </div>
                <div className='inputBox'>
                    <input type='text' required="required"/>
                    <span>Email address </span>
                </div>
                <div className='inputBox'>
                    <input type='text' required="required"/>
                    <span>Password</span>
                </div>
                <div className='inputBox'>
                    <input type='text' required="required"/>
                    <span>Company Name</span>
                </div>
                    <div className='label'>
                        <p>Are you an Agency?</p>
                        <input type='radio' name='Yes' value='yes'></input>
                        <label>Yes</label>
                        <input type='radio' name='No' value='no'></input>
                        <label>No</label>
                    </div>
            </form>
            <button>Create Account</button>
        </div>
    )
}
export default Account;