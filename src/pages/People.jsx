import React from 'react';

import peopleData from '../data/peopleData';
import peopele from '../assets/images/experts/people.jpg';
import quote from '../assets/images/experts/anja.mutsaersA.jpg';

const People = () => {
  return (
    <section className="mt-[90px]">
      <div className="ExpertiseHeader ">
        <div className="ExpertiseHeader-wrapper containers">
          <h1 className="title">People</h1>
          <div className="ExpertiseHeader-description">
            <div className="Wysiwyg ">
              <p className="pb-4 leading-7">
                Our people are curious and creative, quick-witted and ambitious,
                and most definitely, smart. They are our greatest asset.
              </p>
              <p className="pb-4 leading-7">
                As a group of individual voices and independent thinkers, we are
                all united in our absolute commitment to deliver the best
                outcome for our clients, together.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="containers">
        <div className="Columns Columns--people">
          <div className="Columns-title">
            <h2 className="font-bold text-4xl px-2 pt-6 uppercase">
              <span className="">Meet our experts </span>
            </h2>
          </div>

          <div className="my-8 grid grid-cols-2 justify-center md:grid-cols-3 lg:grid-cols-4 gap-6">
            {peopleData?.map((people) => (
              <div
                key={people.id}
                className="mx-auto p-2 cursor-pointer shadow-sm"
              >
                <img src={people.image} alt={people.name} />
                <p className="uppercase text-lg font-semibold pt-2">
                  {people.name}
                </p>
                <p>{people.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="CTAblock CTAblock--left CTAblock--warm-gray CTAblock--normal ">
        <div className="CTAblock-wrapper">
          <div className="CTAblock-image">
            <img src={peopele} alt="people" />
          </div>
          <div className="CTAblock-content">
            <h2 className="font-semibold text-4xl pb-6 uppercase ">
              <span className=""> be the difference </span>
            </h2>
            <div className="CTAblock-grid">
              <div className="CTAblock-text">
                <div className="Wysiwyg ">
                  <p>
                    With a multitude of unique experiences, interests, skills
                    and nationalities - diversity enriches our collaboration,
                    and inspires our solutions.
                  </p>
                  <p>
                    You will be hard pushed to find a better launch pad for a
                    legal career. Our renowned De Brauwerij programme is
                    designed to help our incoming associates become excellent
                    lawyers. It is the only formally recognised in-house
                    education programme for lawyers in the Netherlands.
                    <br />
                  </p>
                </div>
                <a
                  target="_self"
                  className="Button  CTAblock-button Button--signalBlue is-visible"
                >
                  <span className="Button-label">
                    Join us - careers at de brauw
                  </span>
                  <span className="Button-top"></span>
                  <span className="Button-bottom"></span>
                </a>
                <a
                  target="_self"
                  className="Button  CTAblock-button Button--signalBlue is-visible"
                >
                  <span className="Button-label">
                    Learn more about De Brauwerij
                  </span>
                  <span className="Button-top"></span>
                  <span className="Button-bottom"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="Quote  Quote--big">
        <div class="Quote-wrapper">
          <blockquote class="Quote-text">
            <p>
              <span>“</span>De Brauw is a 'one firm, firm'. Everyone has a
              voice, the opportunity and a role to play: a unique and strong
              collective.<span>”</span>
            </p>
          </blockquote>
          <div class="Quote-info">
            <div class="Quote-image">
              <img src={quote} alt="quote" />
            </div>
            <div class="Quote-author">
              <span>Anja Mutsaers</span>
              <span>Partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
