import "./works.scss";
import {
  featuredPortfolio,
} from "../../data";

export default function Works() {

  return (
    <div className="works" id="works">
      <h1>Works</h1>
      <div className="container">
        {featuredPortfolio.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
