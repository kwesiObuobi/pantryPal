import './headline.css';
import Logo from '../../../assets/images/tv.png';
import Menu from '../../../assets/images/Menu.png';

const Headline = () => {
  return (
    <div className="headline-div">
      <div className="header">
        <div className="brand">
          <div className="brand-img">
            <img src={Logo} alt="MovieBox Logo" />
          </div>
          <p className="brand-title">MovieBox</p>
        </div>
        <div className="search-div">
          <input type="search" className="search-input" placeholder="What do you want to watch?" />
        </div>
        <div className="auth-box">
          <p className="signin">Sign in</p>
          <div className="hamburger-div">
            <img src={Menu} alt="hamburger icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headline;
