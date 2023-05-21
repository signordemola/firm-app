import cta from '../assets/images/ctablock/DeBrauw8562.jpg';

const CtaBlock = () => {
  return (
    <section className="CTAblock CTAblock--left CTAblock--warm-gray CTAblock--normal ">
      <div className="CTAblock-wrapper">
        <div className="CTAblock-image">
          <picture className="OptimizedImage">
            <img className="object-cover" src={cta} alt="cta" />
          </picture>
        </div>

        <div className="CTAblock-content">
          <h2 className="font-bold uppercase mb-7 text-4xl">
            <span>If you want to go far </span>
            <br />
            <span className="ml-10">- go together</span>
          </h2>

          <div className="CTAblock-grid">
            <div class="CTAblock-text">
              <div className="Wysiwg">
                <p className="leading-8">
                  We are incredibly proud of our people, wherever they are. They
                  create and define the culture of De Brauw. We all share the
                  same core qualities: courageous team-players, passionate about
                  what we do, with the grit and curiosity required to get to the
                  best possible result for our client, together.
                  <br />
                </p>
                <p className="leading-8 py-6">
                  We continuously strive for diverse teams - it simply makes us
                  better. Our unique personalities, experiences, and individual
                  perspectives make us sharper and keep us humble. Many of our
                  top business leaders and members of the judiciary come up
                  through our own ranks, and pass our firm from one generation
                  to the next.
                  <br />
                </p>
                <p className="leading-8">
                  Do you want to join us? We would love to hear from you.
                  <br />
                </p>
              </div>
              <a
                className="Button  CTAblock-button Button--signalBlue is-visible"
                href="/people"
                target="_self"
              >
                <span className="Button-label">
                  Learn more about our people
                </span>
                <span className="Button-top"></span>
                <span className="Button-bottom"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBlock;
