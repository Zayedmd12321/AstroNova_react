import innerOrbit from "./data/images/inner-orbit.jpg"
import outerOrbit from "./data/images/outer-orbit.jpg"

const TeamCard = ({ name, title, image, socials }) => {
  return (
    <div className="team-card">
      <div className="white-box"></div>
      <div className="socials">
        <ul>
          <li>
            <a href={socials[0]} target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href={socials[1]}>
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href={socials[2]} target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="profile-img">
        <img src={`https://${image}`} alt={name} />
        <img src={`${outerOrbit}`} />
        <img src={`${innerOrbit}`} />
      </div>
      <div className="team-info">
        <div className="member-name">{name}</div>
        <div className="member-role">{title}</div>
      </div>
    </div>
  );
};

export default TeamCard;
