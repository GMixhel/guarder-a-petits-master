import React from "react";
import { team } from "../data/team";

const Team = () => {
  return (
    <>
      <section className="team ">
        <div className="team_container container">
          <h3 className="team_title">Equip Pedagògic</h3>
          {team.map((member) => {
            return (
              <div key={member.id} className="team_info">
                <img
                  src={member.img}
                  alt="Imagen del miembro del equipo"
                  className="team_img"
                />

                <div className="team_member-data">
                  <div>
                    <h5 className="team_name">{member.name}</h5>
                    <h5 className="team_position">{member.cargo}</h5>
                  </div>

                  <p className="team_description">{member.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Team;
