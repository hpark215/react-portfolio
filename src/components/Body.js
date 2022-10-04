import React from "react";
import "./Body.css";

function Body() {
  return (
    <div>
      <section className="about" id="about">
        {/* this is the left part of the about section */}
        <div className="about_words">
          <h1 className="about_title">About Me</h1>

          <div className="about_description">
            <p>
              I am currently a sophomore student studying Computer Science at
              Calvin University, Michigan. In the past years, I have been
              learning web development (HTML, CSS, JAVASCRIPT), UI & UX design,
              and building stuff in general. I am currently trying to dig deeper
              into backend technologies such as Node.js and Django.
            </p>
            <br />
            <br />

            <div className="hobbies">
              <p className="bold_sentence">In my free time, I enjoy: </p>
              <ul className="things_i_like">
                <li>Playing soccer ⚽️</li>
                <li>Playing chess ♖</li>
                <li>Going out for a coffee with friends ☕️</li>
                <li>
                  Most importantly, I enjoy being outside; however, the Michigan
                  winter does get tough sometimes 🍃🥶
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* this is the right part of the about section */}
        <div className="about_img">
          <img src="/imgs/go_to_profile_pic.jpg" alt="a photo of me" />
        </div>
      </section>

      {/* expirience section */}
      <section className="expirience" id="expirience">
        <h1 className="expirience_title">Expirience</h1>
        <div className="expirience_card">
          <img src="/imgs/skku.png" alt="Sungkyunkwan University Logo" />
          <div className="expirience_descriptions">
            <h1 className="expirience_card_title">
              Sungkyunkwan University (SKKU) IOT Lab Intern
            </h1>
            <p className="expirience_date">June 2022 - August 2022</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
