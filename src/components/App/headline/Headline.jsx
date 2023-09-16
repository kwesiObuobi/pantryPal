import './headline.css';
import Logo from '../../../assets/images/tv.png';
import Menu from '../../../assets/images/Menu.png';

// eslint-disable-next-line react/prop-types
const Headline = ({ movie }) => {
  const IMAGEURL = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className="headline-div">
      {/* eslint-disable-next-line react/prop-types */}
      <img src={`${IMAGEURL}/${movie.poster_path}`} alt="poster path" className="headline-background" />

      <div className="headline-content">
        <div className="header">
          <div className="brand">
            <div className="brand-img">
              <img src={Logo} alt="MovieBox Logo" />
            </div>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="brand-title">{movie.title}</p>
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
    </div>
  )
}

export default Headline;
