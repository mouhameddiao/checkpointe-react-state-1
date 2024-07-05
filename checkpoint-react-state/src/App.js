import React, { Component } from 'react';
import './App.css';
import { FaUser, FaBriefcase, FaInfoCircle } from 'react-icons/fa';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'DIP DOUNDOU GUISS',
        bio: 'A software developer with a passion for learning new technologies.',
        imgSrc: 'https://i0.wp.com/bwelitribe.com/wp-content/uploads/2020/07/bt-Dip-Doundou-Guiss-Badman.jpeg?w=716&ssl=1',
        profession: 'Software Engineer'
      },
      shows: false,
      mountedTime: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>SOFTWARE DEVELOPER</h1>
          <button className="toggle-btn" onClick={this.toggleShow}>
            {shows ? 'Hide' : 'Show'} Profile
          </button>
          {shows && (
            <div className="profile-card">
              <img className="profile-img" src={person.imgSrc} alt={person.fullName} />
              <h2><FaUser /> {person.fullName}</h2>
              <p><FaInfoCircle /> {person.bio}</p>
              <h3><FaBriefcase /> {person.profession}</h3>
            </div>
          )}
          <p>Component mounted for {mountedTime} seconds</p>
        </header>
      </div>
    );
  }
}

export default App;
