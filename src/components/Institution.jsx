import west from '../assets/images/institution/westbroek.jpg';
import lego from '../assets/images/institution/lego.png';
import chambers from '../assets/images/institution/chambers.jpg';
import tier from '../assets/images/institution/tier.png';

const Institution = () => {
  return (
    <section className="InstitutionBlock InstitutionBlock--homepage">
      <div className="containers InstitutionBlock-containers">
        <div className="InstitutionBlock-marksColumn">
          <div class="InstitutionBlock-marksContent">
            <div className="InstitutionBlock-marks">
              <div className="InstitutionBlock-mark">
                <div className="InstitutionBlock-markHeader">
                  <picture className="OptimizedImage">
                    <img
                      className="InstitutionBlock-mark-img is-visible"
                      src={west}
                      alt="west"
                    />
                  </picture>
                </div>
              </div>

              <div className="InstitutionBlock-mark">
                <div className="InstitutionBlock-markHeader">
                  <picture className="OptimizedImage">
                    <img
                      className="InstitutionBlock-mark-img is-visible"
                      src={chambers}
                      alt="west"
                    />
                  </picture>
                </div>
              </div>

              <div className="InstitutionBlock-mark">
                <div className="InstitutionBlock-markHeader">
                  <picture className="OptimizedImage">
                    <img
                      className="InstitutionBlock-mark-img is-visible"
                      src={lego}
                      alt="west"
                    />
                  </picture>
                </div>
              </div>

              <div className="InstitutionBlock-mark">
                <div className="InstitutionBlock-markHeader">
                  <picture className="OptimizedImage">
                    <img
                      className="InstitutionBlock-mark-img is-visible"
                      src={tier}
                      alt="west"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="InstitutionBlock-contentColumn">
          <h2 className="font-bold uppercase mb-7 text-4xl">
            <span>Experts in the legal complexities of business</span>
          </h2>

          <div className="Wysiwyg">
            <p className="leading-7">
              De Brauw is known as the leading international law firm in the
              Netherlands.
            </p>

            <p className="leading-7 py-7">
              Rooted deeply in the Dutch tradition of problem-solving and
              innovation, we offer high-end legal advice in corporate
              transactions, disputes and regulatory enforcement.
            </p>

            <p className="leading-7">
              Our lawyers are widely recognised as leaders in their fields.
              Together, we form a strong collective, representing our clients,
              relentlessly pursuing excellence.
            </p>

            <a
              className="Button mt-7 Button--border Button--blackstone is-visible"
              href="/expertise"
              target="_self"
            >
              <span className="Button-label">our expertise</span>
              <span className="Button-top"></span>
              <span className="Button-bottom"></span>
              <span className="Button-left"></span>
              <span className="Button-right"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institution;
