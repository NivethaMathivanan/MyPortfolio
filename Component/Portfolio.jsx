import { useState, useRef } from "react";

import "../Component/Css/Portfolio.css";
import hastin from "../assets/clideo_editor_6a064fa8b5f640d5bb6173210d6e4058.mp4"
import Quick from "../assets/quick-receipt-simplified-pos-and-1-more-page-personal-microsoft-edge-2025-05_EmLJyxjm.mp4"
function Portfolio() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  const projects = [
    {
      title: "Hastin Containerline",
      company: "Ebrain Technology",
      icon: "📈",
      summary: "Developed a logistics web platform with real-time tracking",
      description: [
        "Logistics-based web platform",
        "Import/export container tracking",
        "Secure role-based access",
        "Real-time shipment updates",
        "React & Bootstrap UI"
      ],
      accentColor: "#4facfe",
      videoUrl: hastin
    },
    {
      title: "Quick Receipt POs",
      company: "Ebrain Technology",
      icon: "📑",
      summary: "Automated PO and receipt generation system",
      description: [
        "PO and Receipt automation",
        "Instant purchase receipts",
        "Backend validation",
        "Supplier/item management",
        "React & Tailwind CSS"
      ],
      accentColor: "#00f2fe",
      videoUrl: Quick
    }
  ];

  const handleVideoPlay = (index) => {
    setPlayingVideo(playingVideo === index ? null : index);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="particles"></div>
      <h2 className="section-title">
        <span>My</span> Projects
      </h2>

      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${hoveredCard === index ? 'hovered' : ''}`}
            style={{ '--accent': project.accentColor }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-glow"></div>
            <div className="card-inner">
              <div className="card-header">
                <div className="project-icon">{project.icon}</div>
                <div>
                  <h3>{project.title}</h3>
                  <p className="company">{project.company}</p>
                </div>
              </div>

              <p className="summary">{project.summary}</p>

              <div className="divider"></div>

              <ul className="features">
                {project.description.map((item, i) => (
                  <li key={i}>
                    <span className="bullet"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="card-footer">
                <button
                  className="demo-button"
                  onClick={() => handleVideoPlay(index)}
                >
                  {playingVideo === index ? 'Hide Demo' : 'Live Demo'}
                </button>

                <div className="tech-tags">
                  {project.description.slice(-1)[0].split('&').map(tech => (
                    <span key={tech.trim()}>{tech.trim()}</span>
                  ))}
                </div>
              </div>
            </div>

            {playingVideo === index && (
              <div className="video-container">
                <video
                  src={project.videoUrl}
                  width="100%"
                  height="100%"
                  controls
                  autoPlay
                  muted
                  playsInline
                  style={{ borderRadius: '0 0 16px 16px', backgroundColor: '#000' }}
                >
                  Your browser does not support the video tag.
                </video>

              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;