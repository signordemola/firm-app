const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <div className="Footer-wrapper Footer-columns">
          <div className="Footer-list Footer-offices">
            <h4 className="Footer-heading pb-4">Offices</h4>
            <a target="_self" className="Footer-link">
              Amsterdam
            </a>
            <a target="_self" className="Footer-link">
              Brussels
            </a>
            <a target="_self" className="Footer-link">
              London
            </a>
            <a target="_self" className="Footer-link">
              Shanghai
            </a>
            <a target="_self" className="Footer-link">
              Singapore
            </a>
          </div>

          <div className="Footer-list Footer-contacts">
            <h4 className="Footer-heading pb-4">Contact</h4>

            <a
              className="Footer-link Footer-contactLink"
              href="mailto:info@debruaw.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <span className="px-2">info@debruaw.com</span>
            </a>
            <a
              className="Footer-link Footer-contactLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <span className="px-2">
                Claude Debussylaan 80
                <br />
                1082 MD Amsterdam
                <br />
                The Netherlands
              </span>
            </a>

            <div className="Footer-link Footer-noLink Footer-contactLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                />
              </svg>

              <span className="px-2">
                P.O. Box 75084
                <br />
                1070 AB Amsterdam
                <br />
                The Netherlands
              </span>
            </div>
          </div>

          <div className="Footer-list Footer-networks">
            <h4 className="Footer-heading">Subscribe</h4>
            <p>
              To receive our regular updates please register your areas of
              interest below.
            </p>
            <div className="Footer-newsletter">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="Button  Button--signalBlue is-visible"
              >
                <span className="Button-label">Request regular updates</span>
                <span className="Button-top"></span>
                <span className="Button-bottom"></span>
              </a>
            </div>
            <div className="Footer-networksLinks">
              <a
                aria-label="linkedin"
                title="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="RoundSocialIcon RoundSocialIcon--light">
                  <svg className="Svg icon-linkedin">
                    <use xlink:href="#icon-linkedin"></use>
                  </svg>
                </span>
              </a>
              <a
                aria-label="instagram"
                title="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="RoundSocialIcon RoundSocialIcon--light">
                  <svg className="Svg icon-instagram">
                    <use xlink:href="#icon-instagram"></use>
                  </svg>
                </span>
              </a>
              <a
                aria-label="facebook"
                title="facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="RoundSocialIcon RoundSocialIcon--light">
                  <svg className="Svg icon-facebook">
                    <use xlink:href="#icon-facebook"></use>
                  </svg>
                </span>
              </a>
              <a
                aria-label="twitter"
                title="twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="RoundSocialIcon RoundSocialIcon--light">
                  <svg className="Svg icon-twitter">
                    <use xlink:href="#icon-twitter"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer-bottom">
        <div className="Footer-wrapper Footer-bottomNavigation">
          <a className="Footer-bottomLink">General Conditions</a>
          <a className="Footer-bottomLink">Privacy and Cookie Statement</a>
          <a className="Footer-bottomLink">Legal information</a>
          <a className="Footer-bottomLink">User Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
