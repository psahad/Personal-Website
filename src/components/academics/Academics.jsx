import { useState } from "react";
import "./academics.scss";

export default function Academics() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      course: "Bachelor of Technology in Electronics and Communication",
      board: "University: APJ Abdul Kalam Technological University",
      yop: "Year of passing: 2019",
      institution: "Institution: TKM College of Engineering, Kollam"
    },
    {
      id: "2",
      course: "Diploma in Electronics Engineering",
      board: "Board: State Board of Technical Education",
      yop: "Year of passing: 2016",
      institution: "Institution: Government Polytechnic College, Perinthalmanna"
    },
    {
      id: "3",
      course: "Higher Secondary (Physics, Chemistry, Maths)",
      board: "Board of Higher Secondary Examination, Kerala",
      yop: "Year of passing: 2013",
      institution: "Institution: St Mary's Higher Secondary School, Pariyapupam"
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="heading">
      <div className="head">
        <h1>Academics</h1>
      </div>
      <div className="academics" id="academics">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((d) => (
            <div className="container">
              <div className="item">
                <div className="left">
                    <h2>{d.course}</h2>
                    <p>{d.board}</p>
                    <p>{d.yop}</p>
                    <p>{d.institution}</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        <img
          src="assets/arrow.png"
          className="arrow left"
          alt=""
          onClick={() => handleClick("left")}
        />
        <img
          src="assets/arrow.png"
          className="arrow right"
          alt=""
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );
}
