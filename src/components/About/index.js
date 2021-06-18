import React from "react";

function About(props) {
  const { skills } = props;

  //filter skills from master list
  const filteredSkills = skills.filter(
    (skill) =>
      skill.type === "frontend" ||
      skill.type === "backend" ||
      skill.type === "other"
  );

  return (
    <div className="container">
      <h2 className="text-center thirds-title">
        Welcome to the workshop of Shawn Littrel, Full Stack Web Developer
      </h2>
      <br />
      <div className="row gx-4 gy-4">
        <div className="col-md col-lg-4">
          <div className="text-center text-info thirds-title">
            <h3>Skills and Certs</h3>
          </div>
          <br />
          <br />
          {filteredSkills.map((skill) => (
            <span
              className="badge rounded-pill skill-badge text-light"
              key={skill.name}
            >
              {skill.name}
            </span>
          ))}

          <br />
          <br />
          <br />
        </div>
        <div className="col-md col-lg-4">
          <div className="text-center text-info thirds-title">
            <h3>Personal History</h3>
          </div>
          <br />
          <br />
          <div className="thirds-text">
            <p>
              I grew up in the Midwest, and after visiting my aunt in Phoenix,
              it became my dream to live there. I graduated high school in 2004
              and attended college at the University of South Dakota. After
              working on my degree in Speech Communication, I realized that
              there were no job prospects that I wanted. Eventually I moved to
              Davenport, IA and started working on my degree in Electronics
              Engineering.
              <br />
              <br />
              I picked up skills in general electronics, computers, industrial
              automation, and radio technology. While in school, I gained
              employment at Per Mar Security and have been in the residential
              low-voltage industry ever since. I moved to Phoenix in 2015 to
              work with Safeguard Security. In 2016, I met my wife, Laura. We
              began our family in October, 2018, with the birth of our son,
              Finley. 2019 brought another big change, as we chose to buy a
              house and put down permanent roots in Glendale, AZ. In late 2020,
              I decided to return to school in order to better provide for my
              family as well as find a career that is gentler on my body. I
              chose web development because of my lifelong passion for computers
              and the internet.
              <br />
              <br />
              When I'm not working, I spend time playing with my son or taking
              him around town to do errands. Laura and I do home improvement
              together and follow a TV show when we have time. We get together
              with my mom and aunt every week for dedicated family time. My
              hobbies - when I have time - are buiding computers, mechanical
              keyboards, woodworking, and brewing my own beer. Pre-pandemic, I
              loved to try new Mexican restaurants, and hope to continue that
              tradition when it is safe to do so once again.
            </p>
          </div>
        </div>
        <div className="col-md col-lg-4">
          <div className="text-center text-info thirds-title">
            <h3> Work History</h3>
          </div>
          <br />
          <br />
          <div className="thirds-text">
            <p>
              {" "}
              From 2013-2017, I focused on residential security and smart home
              products. I learned the ins and outs of the field and eventually
              became an Project Manager at Safeguard Security in 2016.
              <br />
              <br />
              I wanted to push myself more into smart home programming, so I
              left Safeguard and went to Lanza AV in 2017, where I became a
              certified Savant and Control4 programmer. Since then I have spent
              most of my time in high-value luxury homes, creating a "single
              pane of glass" experience for my clients. I automate and integrate
              LAN, home theater products, lighting, pools, shades, fireplaces,
              and motorized accessories into a single app that gives clients
              granular control over their entire home. I also develop the UI/UX
              for them to view their home in an intuitive and convenient way.
              <br />
              <br />
              Even though I am new to web development, my past experience has
              proven me to be a fast and eager learner. I thrive on challenging
              myself to pick up new skills and polish old ones. I have realized
              that when I don't push myself to keep learning, I become
              complacent and my work suffers for it. I believe that the
              fast-changing world of web development will be a great way for me
              to continuously learn and master new skills.
              <br />
              <br />
              Since starting at the University of Arizona Coding Bootcamp, I
              have found that I pick up this new information fairly quickly and
              really enjoy doing it. When I sit down to work on a particular
              assignment, the time seems to fly by while I problem-solve and
              research ways to accomplish what I want to do. I hope that my
              included work shows my committment to excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
