import profileImg from "../assets/img/profile.png";

export const Profile = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://maps.app.goo.gl/FQmsLQf8Jc2L4eKU7';
  };

  const skills = [
    { name: "Html", rating: 5 },
    { name: "Css", rating: 5 },
    { name: "JavaScript", rating: 5 },
    { name: "C++", rating: 2 },
    { name: "PHP", rating: 4 },
    { name: "Figma", rating: 3 },
    { name: "React JS", rating: 4 },
    { name: "Kotlin", rating: 2 },
    { name: "Python", rating: 3 },
    { name: "MySQL", rating: 4 },
    { name: "Laravel", rating: 1 },
    { name: "Java", rating: 3 }
  ];

  return (
    <section id="about" className="about">
      <div className="profile container">
        <div className="row pd-2">
          <div className="col-md-4 text-center">
            <img src={profileImg} className="img-fluid mb-5 p-1" alt="Profile" />
          </div>
          <div className="profile-wrapper col">
            <h2 className="mb-4"><span className="me-1">W</span>ho Am I ?.<div className="vertical-line mt-4"></div></h2>
            <p>Halo I am Jhonvnbb. I am a student at the University of Lampung focusing on web development, and I am very enthusiastic and dedicated to my work. With 3 years of experience as a Web Developer, I have acquired the skills necessary to build great, high-quality websites.</p>
            <p>Apart from web development, I have several hobbies that I pursue in my free time. I like playing music, especially guitar, and often spend time playing with friends. I also enjoy sports, especially football, which helps me stay active and healthy. Reading books, especially about technology and self-development, is another way I use to fill my free time and broaden my horizons.</p>
            <div className="skills row">
              {skills.map((skill, index) => (
                <div key={index} className="col-6 col-sm-4 col-md-4">
                  <Skill name={skill.name} rating={skill.rating} />
                </div>
              ))}
            </div>
            <div className="map-button mt-3">
              <button onClick={handleButtonClick}><span>View Maps</span></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Skill = ({ name, rating }) => {
  return (
    <div className="skill mb-4">
      <div className="skill-name">{name}</div>
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
        ))}
      </div>
    </div>
  );
}
