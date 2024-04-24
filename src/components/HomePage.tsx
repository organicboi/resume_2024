import "../styles/HomePage.css";

function HomePage() {
  return (
    <>
      <div className="heading">
        <h1>Akshay Gaddi Resume</h1>
      </div>
      <div className="container">
        <iframe src="/Akshay_Gaddi_resume.pdf" className="iFrame" />
      </div>
      <div className="onlyMobileDevices">
        <h3 className="catuion">Catuion</h3>
        <b>0. </b> If the pdf is not visible <br />
        <b>1. </b> Click on open <br />
        <b>2. </b> Open in any pdf viewer
      </div>
    </>
  );
}

export default HomePage;
