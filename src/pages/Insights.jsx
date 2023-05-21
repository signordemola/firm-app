import React from 'react';

import image1 from '../assets/images/insights/Paper-banner-01.jpg';
import image2 from '../assets/images/insights/debrauw_paper_blackstone_2.jpg';
import image3 from '../assets/images/insights/editorial_9.jpg';
import client1 from '../assets/images/insights/landscape_debrauw_paper_burgundy_duo_high-res_1.jpg';
import client2 from '../assets/images/insights/landscape_debrauw_paper_blackstone_duo_high-res_3.jpg';

const Insights = () => {
  return (
    <section className="mt-[90px]">
      <div className="InsightsHeader">
        <div className="InsightsHeader-wrapper containers">
          <div className="InsightsHeader-title">
            <h1>Insights</h1>
            <h3>Articles, Events &amp; Recent Matters</h3>
          </div>

          <div className="InsightsHeader-blocks">
            <a className="InsightsHeader-block">
              <div className="InsightsHeader-blockImageWrapper">
                <picture className="OptimizedImage">
                  <img
                    className="InsightsHeader-blockImageWrapper-img is-visible"
                    src={image1}
                    alt="image 1"
                  />
                </picture>
              </div>
              <div className="InsightsHeader-blockContent">
                <span className="InsightsHeader-blockDate">26 April 2023</span>
                <h4 className="InsightsHeader-blockTitle">
                  The Private Equity Review: Fundraising and Investing in the
                  Netherlands
                </h4>
              </div>
            </a>
            <a className="InsightsHeader-block">
              <div className="InsightsHeader-blockImageWrapper">
                <picture className="OptimizedImage">
                  <img
                    className="InsightsHeader-blockImageWrapper-img is-visible"
                    src={image2}
                    alt="image 2"
                  />
                </picture>
              </div>
              <div className="InsightsHeader-blockContent">
                <span className="InsightsHeader-blockDate">24 April 2023</span>
                <h4 className="InsightsHeader-blockTitle">
                  Dutch courts to make case details and hearing dates publicly
                  accessible
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="containers">
        <div className="Columns ">
          <div className="Columns-title">
            <h2 className="AnimatedTitle is-visible ">
              <span className=""> </span>
              <span className="offset-1"> </span>
            </h2>
          </div>
          <div className="Columns-grid">
            <a className="TextCard Column-item">
              <span className="TextCard-date">16 May 2023</span>
              <h4 className="TextCard-title">
                European directive to enhance gender equality in pay
              </h4>
              <div className="TextCard-text">
                An evaluation on equal pay conducted in 2020 found that applying
                the principle of equal pay as included in Directive 2006/54/EC
                (equal opportunities and equal treatment of men and women in
                matters of employment and occupations) was hindered by: (i) a
                lack of transparency in pay systems, (ii) a lack of legal
                certainty on what is considered work of equal value, and (iii)
                procedural obstacles faced by victims of pay discrimination. The
                facts support the findings: women in the European Union still
                earn less than men for equal work. The average gender pay gap in
                the EU ranges from 0.7% in Luxembourg to 22.3% in Latvia. With a
                pay gap of 14.2%, the Netherlands falls in the middle range.{' '}
              </div>
            </a>
            <a className="TextCard Column-item">
              <span className="TextCard-date">26 April 2023</span>
              <h4 className="TextCard-title">
                The Private Equity Review: Fundraising and Investing in the
                Netherlands
              </h4>
              <div className="TextCard-text">
                De Brauw has contributed to the 12th edition of The Private
                Equity Review, providing an overview of the regulatory regime
                and market climate for private equity transactions in the
                Netherlands. The Fundraising chapter was co-authored by Mariska
                Enzerink and Abe Stegenga, and the Investing chapter by Lennard
                Keijzer, Pete Lawley, Bas Boutellier, Bob de Waard and Alexandra
                Wijdeveld.{' '}
              </div>
            </a>
            <a className="TextCard Column-item">
              <span className="TextCard-date">24 April 2023</span>
              <h4 className="TextCard-title">
                Dutch courts to make case details and hearing dates publicly
                accessible
              </h4>
              <div className="TextCard-text">
                In a landmark judgment, the Dutch Supreme Court ruled on 21
                April 2023 that Dutch courts must make case details publicly
                accessible. This concerns details such as the parties involved,
                the status of the proceedings, hearing dates and any judgments
                issued. While the case file will not be public, it will be
                easier for interested parties to learn about the hearing and
                observe the arguments made there. With this ruling, companies
                will be able to better monitor relevant litigation in the
                Netherlands.
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="CTAblock CTAblock--right CTAblock--warm-gray CTAblock--offset ">
        <div className="CTAblock-wrapper">
          <div className="CTAblock-image">
            <picture className="OptimizedImage">
              <img src={image3} alt="" />
            </picture>
          </div>
          <div className="CTAblock-content">
            <h2 className="AnimatedTitle is-visible ">
              <span className=""> </span>
              <span className="offset-2"> </span>
            </h2>
            <div className="CTAblock-grid">
              <div className="CTAblock-text">
                <h1 className="h1">Client events</h1>
                <div className="Wysiwyg ">
                  <p>
                    We put news, trends and developments in the context of our
                    clients' needs. What do they mean to our clients and how can
                    we help them?
                  </p>
                </div>
                <a
                  target="_self"
                  className="Button  CTAblock-button Button--signalBlue is-visible"
                >
                  <span className="Button-label">Event calendar</span>
                  <span className="Button-top"></span>
                  <span className="Button-bottom"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containers">
        <div className="Columns ">
          <div className="Columns-title">
            <h2 className="AnimatedTitle is-visible ">
              <span className=""> </span>
              <span className="offset-1"> </span>
            </h2>
          </div>
          <div className="Columns-grid">
            <a className="TextCard Column-item">
              <span className="TextCard-date">13 May 2023</span>
              <h4 className="TextCard-title">
                De Brauw advises Eurocommercial Properties N.V. on its Euronext
                Milan listing
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
            </a>
            <a className="TextCard Column-item">
              <span className="TextCard-date">4 May 2023</span>
              <h4 className="TextCard-title">
                De Brauw advised Triton Partners on the sale of Unica to Triton
                IV Continuation Fund
              </h4>
              <div className="TextCard-text">
                De Brauw advised Triton Partners on the sale of Unica (alongside
                three other portfolio companies) to a newly-formed vehicle,
                Triton IV Continuation Fund, which closed at €1.63 billion
                following a competitive auction process. Unica is a leading
                independent provider of technical services in the Netherlands,
                focused on end-to-end, sustainable solutions for utility
                buildings and industry. Unica is set to continue its growth
                journey through operational excellence and new add-on
                acquisitions via its proven M&amp;A playbook. The business is
                further supported by market tailwinds in smart building and
                energy efficiency. De Brauw worked alongside Kirkland &amp;
                Ellis, Thomessen and Linklaters to advise Triton on this complex
                multi asset fund to fund transaction, which provided Triton IV
                investors with a return of 3.7x on the combined invested
                capital, or the option to roll into the new vehicle to
                participate in the Portfolio Companies’ future growth.{' '}
              </div>
            </a>
            <a className="TextCard Column-item">
              <span className="TextCard-date">26 April 2023</span>
              <h4 className="TextCard-title">
                De Brauw advises Teleperformance on its public offer for all
                shares in Majorel for total consideration of EUR 3bn
              </h4>
              <div className="TextCard-text">
                Together with White &amp; Case LLP and Elvinger Hoss Prussen SA,
                De Brauw Blackstone Westbroek is advising Teleperformance SE
                ("Teleperformance") on its EUR 3bn takeover offer on Majorel,
                announced on 26 April 2023. Teleperformance, a global digital
                business services company listed on Euronext Paris, announced
                its mixed cash / share offer on Majorel. Majorel is a global
                customer experience leader and listed on Euronext Amsterdam. The
                intended offer consists of a cash payment of EUR 30 per share
                (ex dividend for 2022 of EUR 0.68) and the possibility for
                Majorel shareholders to elect to receive Teleperformance shares
                instead of cash (based on an exchange ratio of 30/217 up to a
                maximum of 4.6M Teleperformance shares). Teleperformance has
                obtained irrevocable commitments from two majority shareholders
                electing the share consideration option, thereby securing
                support of 78.98% of the Majorel shareholders for its intended
                public offer. More information can be found in Teleperformance's
                press release: TP (teleperformance.com).{' '}
              </div>
            </a>
          </div>
          <div className="Columns-optionalButton"></div>
        </div>
      </div>

      <div className="containers">
        <div className="Columns ">
          <div className="Columns-title">
            <h2 className="AnimatedTitle is-visible ">
              <span className=""> </span>
              <span className="offset-1"></span>
            </h2>
          </div>
          <div className="Columns-grid">
            <div className="BannerCard BannerCard--burgundy ">
              <div className="BannerCard-content">
                <h2 className="BannerCard-title">Client Toolboxes</h2>
                <div className="BannerCard-buttonWrapper">
                  <a
                    target="_self"
                    className="Button  Button--border Button--pampass is-visible"
                  >
                    <span className="Button-label">Access here</span>
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
                    className="BannerCard-imageWrapper-img is-visible  "
                    src={client1}
                    alt="client 1"
                  />
                </picture>
              </div>
            </div>
            <div className="BannerCard BannerCard--blackstoneblue ">
              <div className="BannerCard-content">
                <h2 className="BannerCard-title">COVID-19 support</h2>
                <div className="BannerCard-buttonWrapper">
                  <a
                    target="_self"
                    className="Button  Button--border Button--pampass is-visible"
                  >
                    <span className="Button-label">Learn more</span>
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
                    className="BannerCard-imageWrapper-img is-visible  "
                    src={client2}
                    alt="cliet 2"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
