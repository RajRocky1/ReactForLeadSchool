
import profilePic from './assets/Profile.jpg';

function ProfilePicture() {

  const imageUrl = profilePic;

  // First I tried logging a message when clicking the image
  // const handleClick = () => console.log("OUCH!");

  // Now I'm hiding the image when I click it
  const handleClick = (e) => {
    e.target.style.display = "none";
  };

  return (
    <img className="p-pic"
      src={imageUrl}
      alt="Profile"
      onClick={(e) => handleClick(e)}
    />
  );
}

export default ProfilePicture;
