import React from 'react';

const Experience = () => {
  return (
    <section id="experiences" className="experiences section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Experiences</h2>
      </div>

      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
            <div className="experiences-item">
              <h4>Graphic Designer and Web Developer Intern</h4>
              <h5>Nov. 2022 - Feb. 2023</h5>
              <p><em>JAE Hub Web Services, Quezon City, Philippines</em></p>
              <ul>
                <li>Created visual concepts, layout, and designs.</li>
                <li>Developed graphics for websites, advertisements, and print media.</li>
                <li>Designed and built websites.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;