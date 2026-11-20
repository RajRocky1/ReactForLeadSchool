
import profilePic from './assets/Profile.jpg';

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        src={profilePic}
        alt="Profile picture"
      />
      <h2 className="card-title">Somshekar B</h2>
      <p className="card-text">
        I make YouTube videos and Enjoy time being with my family.
      </p>
    </div>
  );
}

export default Card;
