import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Hi, my name is Jeremy Hansen. I'm an accomplished entrepreneur with
            a diverse background spanning software development, music, and
            hospitality industries. When not immersed in business ventures,
            you'll find me carving waves on the surf, honing my skills in
            various sports, and creating melodies in the studio. Passionate
            about both culinary delights and fostering enjoyable experiences, I
            thrive on blending creativity with dedication to deliver exceptional
            results.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img
                      style={{ borderRadius: "20px" }}
                      src={d.img}
                      alt="..."
                      className="team-img"
                    />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
