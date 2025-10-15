import React from 'react';

function About() {
  return (
    <section id="about_me" className="about_me section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-md-6 col-lg-4 col-xl-4">
            <img src="/assets/formal-pic.png" className="img-fluid" style={{ pointerEvents: 'none' }} alt="" />
          </div>

          <div className="col-md-6 col-lg-8 col-xl-8">
            <div className="about-me">
              <h4>About me</h4>
              <p>
                Hi there! I'm <span style={{ color: '#df1529' }}>Hanzel Sabio</span>
              </p>
              <p>
                Aspiring web developer. I have created graphics for websites, advertisements, and print media. Designed and built websites.
              </p>
              <div className="row justify-content-between gy-4">
                <div className="col-lg-4">
                  <h4>Nickname</h4>
                  <p>Zel</p>
                </div>
                <div className="col-lg-8">
                  <h4>Education</h4>
                  <p>
                    Bachelor of Science in Information Technology<br />
                    AMA Computer College - Fairview Campus<br />
                    2019 - 2024
                  </p>
                </div>
                <div className="col-lg-4">
                    <h4>Country</h4>
                    <p>
                      Philippines
                    </p>
                </div>

                <div className="col-lg-8">
                    <h4>Let's Connect</h4>
                    <div className="social-icon d-flex align-items-center">
                      <a href="https://github.com/hanzelsabio" target="_blank">
                        <i className="bi bi-github flex-shrink-0"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/hanzel-mark-sabio" target="_blank">
                        <i className="bi bi-linkedin flex-shrink-0"></i>
                      </a>
                      {/* <a href="https://www.facebook.com/zelsabiow" target="_blank">
                        <i className="bi bi-facebook flex-shrink-0"></i>
                      </a>
                      <a href="https://www.instagram.com/zelsabiow" target="_blank">
                        <i className="bi bi-instagram flex-shrink-0"></i>
                      </a> */}
                    </div>        
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;