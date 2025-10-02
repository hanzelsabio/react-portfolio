import React from 'react';

function Contact() {
  const contacts = [
    {
      icon: 'bi-telephone',
      title: 'Mobile',
      text: '+639669238157'
    },
    {
      icon: 'bi-envelope',
      title: 'Email',
      text: 'zeluckgt01@gmail.com',
      link: 'mailto:zeluckgt01@gmail.com'
    },
    {
      icon: 'bi-facebook',
      title: 'Facebook',
      text: 'facebook.com/zelsabiow',
      link: 'https://www.facebook.com/zelsabiow'
    },
    {
      icon: 'bi-file-earmark-text',
      title: 'Updated Resume',
      text: 'Hanzel Sabio - Resume',
      link: '/assets/hanzel-sabio-resume.pdf'
    }
  ];
    
  return (
    <section id="contact" className="contact section">
      <div className="container section-title text-end" data-aos="fade-up">
        <h2>Contact</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-5">
            {contacts.map((item, index) => (
              <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                <div className="info-item d-flex align-items-center">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <i className={`bi ${item.icon} flex-shrink-0`}></i>
                    </a>
                  ) : (
                    <i className={`bi ${item.icon} flex-shrink-0`}></i>
                  )}
                  <div>
                    <h3>{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <p>{item.text}</p>
                      </a>
                    ) : (
                      <p>{item.text}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;