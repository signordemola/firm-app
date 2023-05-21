import firm from '../assets/videos/firm.mp4';

const Hero = () => {
  return (
    <section className="HomeHeader">
      <div className="HomeHeader-content">
        <h1 className="HomeHeader-title is-visible uppercase">
          <span>Welcome</span>
          <span>to</span>
          <span>De Brauw</span>
        </h1>
      </div>

      <div className="HomeHeader-video-container">
        <div className="VideoLoop VideoLoop--HomeHeader">
          <video
            className="VideoLoop-video"
            muted
            playsInline
            autoPlay
            loop
            preload="metadata"
          >
            <source src={firm} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
