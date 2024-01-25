import './Profile.css'
function Profile(){
    return(
        <div className="box">
            <div className='head'>
                <span>Account Setting</span>
            </div>
                <div className='img'>
                    <div className='pic'>
                        <img src='https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201011/20101123131216-1_0.jpg?itok=ma_P1FSF' alt=''/>
                    </div>
                    <div className='content'>
                        <span>Marry Doe</span><br/>
                        <span>Marry@Gmail.com</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
    )
}
export default Profile;