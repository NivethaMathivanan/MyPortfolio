import "../Component/Css/About.css";

function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume/Nivetha Mathivanan Resume (1).pdf.pdf";
    link.download = "Nivetha Mathivanan Resume (1).pdf.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (

    <section className="about-section" id="about">
      <div className="about-wrapper">
        <span style={{ color: "#4fc3f7", fontSize: "30px" }}>🅘</span>
        <h2 className="about-subtitle">ᗩᗷOᑌT ᗰE</h2>
        <p className="about-para text-start">
          "<span className="" style={{ color: "#4fc3f7" }}>𝙷𝚒! 𝙸'𝚖 𝙽𝚒𝚟𝚎𝚝𝚑𝚊 𝙼𝚊𝚝𝚑𝚒𝚟𝚊𝚗𝚊𝚗</span> , 𝚊 𝚙𝚊𝚜𝚜𝚒𝚘𝚗𝚊𝚝𝚎 𝙵𝚛𝚘𝚗𝚝-𝙴𝚗𝚍 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 𝚠𝚒𝚝𝚑 𝚊 𝚜𝚝𝚛𝚘𝚗𝚐 𝚏𝚘𝚞𝚗𝚍𝚊𝚝𝚒𝚘𝚗 𝚒𝚗 𝚁𝚎𝚊𝚌𝚝.𝚓𝚜, 𝚁𝚎𝚍𝚞𝚡, 𝙹𝚊𝚟𝚊𝚂𝚌𝚛𝚒𝚙𝚝, 𝙷𝚃𝙼𝙻, 𝙲𝚂𝚂, 𝚊𝚗𝚍 𝙱𝚘𝚘𝚝𝚜𝚝𝚛𝚊𝚙. 𝚃𝚑𝚘𝚞𝚐𝚑 𝙸 𝚌𝚘𝚖𝚎 𝚏𝚛𝚘𝚖 𝚊 𝙱𝚘𝚝𝚊𝚗𝚢 𝚋𝚊𝚌𝚔𝚐𝚛𝚘𝚞𝚗𝚍 𝚠𝚒𝚝𝚑 𝚊 𝙱.𝚂𝚌. 𝚍𝚎𝚐𝚛𝚎𝚎, 𝚖𝚢 𝚌𝚞𝚛𝚒𝚘𝚜𝚒𝚝𝚢 𝚊𝚗𝚍 𝚍𝚛𝚒𝚟𝚎 𝚕𝚎𝚍 𝚖𝚎 𝚒𝚗𝚝𝚘 𝚝𝚑𝚎 𝚠𝚘𝚛𝚕𝚍 𝚘𝚏 𝚠𝚎𝚋 𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚖𝚎𝚗𝚝. 𝙸 𝚎𝚗𝚓𝚘𝚢 𝚋𝚞𝚒𝚕𝚍𝚒𝚗𝚐 𝚌𝚕𝚎𝚊𝚗, 𝚛𝚎𝚜𝚙𝚘𝚗𝚜𝚒𝚟𝚎 𝚄𝙸𝚜 𝚞𝚜𝚒𝚗𝚐 𝚖𝚘𝚍𝚎𝚛𝚗 𝚝𝚎𝚌𝚑𝚗𝚘𝚕𝚘𝚐𝚒𝚎𝚜 𝚕𝚒𝚔𝚎 𝚁𝚎𝚊𝚌𝚝 𝚊𝚗𝚍 𝚃𝚊𝚒𝚕𝚠𝚒𝚗𝚍 𝙲𝚂𝚂, 𝚊𝚗𝚍 𝙸 𝚝𝚊𝚔𝚎 𝚙𝚛𝚒𝚍𝚎 𝚒𝚗 𝚠𝚛𝚒𝚝𝚒𝚗𝚐 𝚌𝚘𝚍𝚎 𝚝𝚑𝚊𝚝'𝚜 𝚗𝚘𝚝 𝚓𝚞𝚜𝚝 𝚏𝚞𝚗𝚌𝚝𝚒𝚘𝚗𝚊𝚕, 𝚋𝚞𝚝 𝚎𝚕𝚎𝚐𝚊𝚗𝚝 𝚊𝚗𝚍 𝚖𝚊𝚒𝚗𝚝𝚊𝚒𝚗𝚊𝚋𝚕𝚎."
        </p>

        <div className="about-details">
          <div className="">
            <h4 className="text-start" style={{ fontWeight: "bold" }}>𝙿𝚎𝚛𝚜𝚘𝚗𝚊𝚕 𝙳𝚎𝚝𝚊𝚒𝚕𝚜</h4>
            <div className="personal-info  text-start py-4">
              <span><strong> 𝙱𝚒𝚛𝚝𝚑𝚍𝚊𝚝𝚎:</strong> 𝟷𝟶-𝟷𝟶-𝟸𝟶𝟶𝟸</span>
              <span><strong>𝙿𝚑𝚘𝚗𝚎:</strong> +𝟿𝟷 𝟿𝟹𝟼𝟶𝟷𝟺𝟷𝟿𝟽𝟿</span>
              <span><strong>𝙴𝚖𝚊𝚒𝚕:</strong> 𝚗𝚒𝚟𝚎𝚝𝚑𝚊𝚖𝚊𝚝𝚑𝚒𝚟𝚊𝚗𝚊𝚗𝟸𝟶𝟶𝟸@𝚐𝚖𝚊𝚒𝚕.𝚌𝚘𝚖</span>
              <span><strong>𝙲𝚘𝚞𝚗𝚝𝚛𝚢:</strong> 𝙸𝚗𝚍𝚒𝚊</span>
            </div>
          </div>
          <div className="card-box">
            <h4>𝙼𝚢 𝙸𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚜</h4>
            <div className="interests-grid">
              <div className="interest-item">🎮 𝙶𝚊𝚖𝚎𝚜</div>
              <div className="interest-item">🎵 𝙼𝚞𝚜𝚒𝚌</div>
              <div className="interest-item">✈️ 𝚃𝚛𝚊𝚟𝚎𝚕</div>

              <div className="interest-item">🎬 𝙲𝚒𝚗𝚎𝚖𝚊</div>

              <div className="interest-item">🚗  𝙲𝚊𝚛𝚜 </div>
              <div className="interest-item">💰 𝙼𝚘𝚗𝚎𝚢</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "30px" }} >
        <button className="button  " type="button" onClick={handleDownload}>
          <span  className="button__text ">Download CV</span>
          <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
        </button>
        </div>
       
      </div>
    </section>
  );
}

export default About;
