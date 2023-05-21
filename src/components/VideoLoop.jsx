import loop from '../assets/videos/videoloop.mp4';
import backdrop from '../assets/images/videoloop/backdrop.jpg';
import burgundy from '../assets/images/videoloop/burgundy.jpg';

const VideoLoop = () => {
  return (
    <section className="containers">
      <div className="VideoLoop VideoLoop--Homepage">
        <video
          className="VideoLoop-video"
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
        >
          <source src={loop} type="video/mp4" />
        </video>
      </div>

      <div className="Columns">
        <div className="Columns-title">
          <h2 className="font-bold uppercase text-3xl">
            <span>Highlighted topics</span>
          </h2>
        </div>

        <div className="Columns-grid">
          <div className="BannerCard BannerCard--burgundy ">
            <div className="BannerCard-content">
              <h2 className="BannerCard-title">Navigating uncertainties</h2>
              <div className="BannerCard-buttonWrapper">
                <a
                  className="Button  Button--border Button--pampass is-visible"
                  href="/expertise"
                  target="_self"
                >
                  <span className="Button-label">Learn More</span>
                  <span className="Button-top"></span>
                  <span className="Button-bottom"></span>
                  <span className="Button-left"></span>
                  <span className="Button-right"></span>
                </a>
              </div>
            </div>

            <div className="BannerCard-imageWrapper">
              <picture className="OptimizedImage">
                <img
                  className="BannerCard-imageWrapper-img is-visible"
                  src={burgundy}
                  alt="backdrop"
                />
              </picture>
            </div>
          </div>

          <div className="BannerCard BannerCard--blackstoneblue ">
            <div className="BannerCard-content">
              <h2 className="BannerCard-title">ESG expertise</h2>
              <div className="BannerCard-buttonWrapper">
                <a
                  className="Button  Button--border Button--pampass is-visible"
                  href="/expertise"
                  target="_self"
                >
                  <span className="Button-label">Learn More</span>
                  <span className="Button-top"></span>
                  <span className="Button-bottom"></span>
                  <span className="Button-left"></span>
                  <span className="Button-right"></span>
                </a>
              </div>
            </div>

            <div className="BannerCard-imageWrapper">
              <picture className="OptimizedImage">
                <img
                  className="BannerCard-imageWrapper-img is-visible"
                  src={backdrop}
                  alt="backdrop"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>

      <div className="Columns Columns--homepage">
        <div className="Columns-title">
          <h2 className="font-bold uppercase mb-7 text-3xl">
            <span className=""> News and </span>
            <span className="offset-1"> Matters </span>
          </h2>
        </div>
        <div className="Columns-grid">
          <div className="TextCard Column-item">
            <span className="TextCard-date">13 May 2023</span>
            <h4 className="font-semibold capitalize text-xl">
              De Brauw advises Eurocommercial Properties N.V. on its Euronext
              Milan listing
              <svg className="Svg TextCard-icon">
                <use xlink:href="#icon-chevron-right-thin"></use>
              </svg>
            </h4>
            <div className="TextCard-text">
              De Brauw has advised Eurocommercial Properties N.V. on the Dutch
              law and regulatory aspects of the listing of its shares on
              Euronext Milan. Eurocommercial was able to benefit from a
              Prospectus Regulation exemption due to its listing on Euronext
              Amsterdam and Euronext Brussels for more than 18 months, on the
              condition of the publication of a summary document. The project
              required elaborate work on Dutch law, corporate governance,
              clearing and settlement and other aspects to comply with stock
              exchange and clearing and settlement rules and practical
              requirements. Trading in Milan will start on 16 May 2023.{' '}
            </div>
          </div>
          <div className="TextCard Column-item">
            <span className="TextCard-date">4 May 2023</span>
            <h4 className="font-semibold capitalize text-xl">
              De Brauw advised Triton Partners on the sale of Unica to Triton IV
              Continuation Fund
              <svg className="Svg TextCard-icon">
                <use xlink:href="#icon-chevron-right-thin"></use>
              </svg>
            </h4>
            <div className="TextCard-text">
              De Brauw advised Triton Partners on the sale of Unica (alongside
              three other portfolio companies) to a newly-formed vehicle, Triton
              IV Continuation Fund, which closed at €1.63 billion following a
              competitive auction process. Unica is a leading independent
              provider of technical services in the Netherlands, focused on
              end-to-end, sustainable solutions for utility buildings and
              industry. Unica is set to continue its growth journey through
              operational excellence and new add-on acquisitions via its proven
              M&amp;A playbook. The business is further supported by market
              tailwinds in smart building and energy efficiency. De Brauw worked
              alongside Kirkland &amp; Ellis, Thomessen and Linklaters to advise
              Triton on this complex multi asset fund to fund transaction, which
              provided Triton IV investors with a return of 3.7x on the combined
              invested capital, or the option to roll into the new vehicle to
              participate in the Portfolio Companies’ future growth.{' '}
            </div>
          </div>
          <div className="TextCard Column-item">
            <span className="TextCard-date">26 April 2023</span>
            <h4 className="font-semibold capitalize text-xl">
              Anne Marie Verschuur joins De Brauw
              <svg className="Svg TextCard-icon">
                <use xlink:href="#icon-chevron-right-thin"></use>
              </svg>
            </h4>
            <div className="TextCard-text">
              We are thrilled to announce that Anne Marie Verschuur will join De
              Brauw Blackstone Westbroek as partner in our IP practice. Our firm
              welcomes a renowned expert in the IP, Life Sciences, and Tech
              sectors, ensuring that our clients continue to receive the best IP
              advice as our practice continues to develop and prepare for
              upcoming matters in the Unified Patent Court (UPC).{' '}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoLoop;
