import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Component/Css/Contact.css";

function Contact() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const formRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // 3D tilt effect for the card
    const handleMouseMove = (e) => {
      const { left, top, width, height } = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      cardRef.current.style.transform = `
        perspective(1000px)
        rotateX(${y * 10}deg)
        rotateY(${x * 10}deg)
        scale(1.02)
      `;
      cardRef.current.style.boxShadow = `
        ${x * 20}px ${y * 20}px 50px rgba(0,0,0,0.2)
      `;
    };

    const handleMouseLeave = () => {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      cardRef.current.style.boxShadow = '0 20px 50px rgba(0,0,0,0.1)';
    };

    if (cardRef.current) {
      cardRef.current.addEventListener('mousemove', handleMouseMove);
      cardRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mousemove', handleMouseMove);
        cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <section className={`contact-section ${isDarkMode ? 'dark-mode' : 'light-mode'}`} id="contact">
      <div className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? '☀️' : '🌙'}
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contact-header">
              <h2 className="section-title">
                <span className="title-text">Get In Touch</span>
                <span className="title-underline"></span>
              </h2>
              <p className="section-subtitle">
              𝙷𝚊𝚟𝚎 𝚊 𝚙𝚛𝚘𝚓𝚎𝚌𝚝 𝚒𝚗 𝚖𝚒𝚗𝚍 𝚘𝚛 𝚠𝚊𝚗𝚝 𝚝𝚘 𝚌𝚘𝚕𝚕𝚊𝚋𝚘𝚛𝚊𝚝𝚎? 𝙻𝚎𝚝'𝚜 𝚌𝚘𝚗𝚗𝚎𝚌𝚝!
              </p>
            </div>
          </div>
        </div>

        <div className="row contact-content">
          {/* Contact Info */}
          <div className="col-lg-5 contact-info">
            <div className="info-card">
              <h3 className="info-title">𝙲𝚘𝚗𝚝𝚊𝚌𝚝 𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚝𝚒𝚘𝚗</h3>

              <div className="info-item">
                <div className="info-icon">
                  <div className="icon-circle pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                    </svg>
                  </div>
                </div>
                <div className="info-text">
                  <h4>𝙿𝚑𝚘𝚗𝚎</h4>
                  <p className="contectInfo">𝟿𝟹𝟼𝟶𝟷𝟺𝟷𝟿𝟽𝟿</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <div className="icon-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                    </svg>
                  </div>
                </div>
                <div className="info-text">
                  <h4>E𝚖𝚊𝚒𝚕</h4>
                  <p>𝚗𝚒𝚟𝚎𝚝𝚑𝚊𝚖𝚊𝚝𝚑𝚒𝚟𝚊𝚗𝚊𝚗𝟸𝟶𝟶𝟸@𝚐𝚖𝚊𝚒𝚕.𝚌𝚘𝚖</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <div className="icon-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                    </svg>
                  </div>
                </div>
                <div className="info-text">
                  <h4>𝙻𝚘𝚌𝚊𝚝𝚒𝚘𝚗</h4>
                  <p>𝙸𝚗𝚍𝚒𝚊</p>
                </div>
              </div>

              <div className="social-links">

                <a href="https://www.linkedin.com/in/nivetha-mathivanan-058244353" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://github.com/NivethaMathivanan" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56v-1.98c-3.2.7-3.87-1.55-3.87-1.55-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.18a10.92 10.92 0 015.72 0c2.18-1.49 3.14-1.18 3.14-1.18.62 1.57.23 2.73.11 3.02.73.81 1.18 1.85 1.18 3.11 0 4.43-2.69 5.41-5.25 5.69.42.36.77 1.08.77 2.17v3.22c0 .31.21.68.8.56A10.5 10.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div
              className="contact-form-card"
              ref={cardRef}
              onMouseMove={(e) => {
                const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;

                e.currentTarget.style.setProperty('--x', x);
                e.currentTarget.style.setProperty('--y', y);
              }}
            >
              <form
                ref={formRef}
                action="https://formsubmit.co/nivethamathivanan2002@gmail.com"
                method="POST"
                className="contact-form"
              >
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input"
                  />
                  <label htmlFor="name" className="form-label">𝚈𝚘𝚞𝚛 𝙽𝚊𝚖𝚎</label>
                  <div className="underline"></div>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input "
                  />
                  <label htmlFor="email" className="form-label">𝚈𝚘𝚞𝚛 𝙴𝚖𝚊𝚒𝚕</label>
                  <div className="underline"></div>
                </div>

             

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="form-input"
                  ></textarea>
                  <label htmlFor="message" className="form-label">𝚈𝚘𝚞𝚛 𝙼𝚎𝚜𝚜𝚊𝚐𝚎</label>
                  <div className="underline"></div>
                </div>

                <button type="submit" className="submit-btn">
                  <span>𝚂𝚎𝚗𝚍 𝙼𝚎𝚜𝚜𝚊𝚐𝚎</span>
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
                    </svg>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="floating-shapes">
        <div className="shape circle"></div>
        <div className="shape triangle"></div>
        <div className="shape square"></div>
      </div>
    </section>
  );
}

export default Contact;