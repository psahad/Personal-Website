import "./skills.scss";

export default function Skills() {
  const di = [
    {
      id: 1,
      name: "HTML5",
      icon: "assets/twitter.png",
    },
    {
      id: 2,
      name: "React JS",
      icon: "assets/youtube.png",
    },
    {
      id: 3,
      name: "Mongo DB",
      icon: "assets/linkedin.png",
    },
    {
      id: 4,
      name: "Git & GitHub",
      icon: "assets/linkedin.png",
    },
  ];
  const dii = [
    {
      id: 1,
      name: "CSS3",
      icon: "assets/twitter.png",
    },
    {
      id: 2,
      name: "Node JS",
      icon: "assets/youtube.png",
    },
    {
      id: 3,
      name: "Bootstrap",
      icon: "assets/linkedin.png",
    },
    {
      id: 4,
      name: "JQuery",
      icon: "assets/linkedin.png",
    },
  ];
  const diii = [
    {
      id: 1,
      name: "Javascript",
      icon: "assets/twitter.png",
    },
    {
      id: 2,
      name: "Express JS",
      icon: "assets/youtube.png",
    },
    {
      id: 3,
      name: "SASS",
      icon: "assets/linkedin.png",
    },
    {
      id: 4,
      name: "Mongoose",
      icon: "assets/linkedin.png",
    },
  ];
  return (
    <div className="skills" id="skills">
      <h1>Familier Technologies</h1>
      <div className="container">
        <div className="left">
          {di.map((d) => (
            <div className="card">
                  <h3>{d.name}</h3>
                  {/* <img className="right" src={d.icon} alt="" /> */}
            </div>
          ))}
        </div>
        <div className="center">
          {dii.map((d) => (
            <div className="card">
              <div className="top">
                <div className="bottom">
                  <h3>{d.name}</h3>
                </div>
                  {/* <img className="right" src={d.icon} alt="" /> */}
              </div>   
            </div>
          ))}
        </div>
        <div className="right">
          {diii.map((d) => (
            <div className="card">
              <div className="top">
                <div className="bottom">
                  <h3>{d.name}</h3>
                </div>
                  {/* <img className="right" src={d.icon} alt="" /> */}
              </div>   
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
