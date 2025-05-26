import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Safety First App</h1>

      <section className="about-section">
        <h2>What is the Safety First App?</h2>
        <p className="about-paragraph">
          The Safety First App is a safety-focused web application designed to
          help users properly identify and manage hazardous chemicals. It stores
          critical safety information including HMIS (Hazardous Materials
          Identification System) ratings and required Personal Protective
          Equipment (PPE) for each chemical material.
        </p>
      </section>

      <section className="about-section">
        <h2>Key Features</h2>
        <ul>
          <ul>
            <li className="about__list-item">
              <strong>Chemical Safety Information:</strong> Store and view HMIS
              ratings for health, flammability, and physical hazards
            </li>
            <li className="about__list-item">
              <strong>PPE Requirements:</strong> Quick access to required
              personal protective equipment for each chemical
            </li>
            <li className="about__list-item">
              <strong>Search Function:</strong> Quickly locate specific
              chemicals and their safety data
            </li>
            <li className="about__list-item">
              <strong>Material Management:</strong> Add new chemicals and update
              existing safety information
            </li>
          </ul>
        </ul>
      </section>

      <section className="about-section">
        <h2>How to Use</h2>
        <ul>
          <li className="about__list-item">
            Use the search bar to quickly find specific chemicals
          </li>
          <li className="about__list-item">
            View detailed HMIS ratings and safety information for each chemical
          </li>
          <li className="about__list-item">
            Check required PPE before handling any material
          </li>
          <li className="about__list-item">
            Add new chemicals using the add button, including all safety ratings
            and PPE requirements
          </li>
        </ul>
        <h2>Understanding HMIS Ratings</h2>
        <p className="about-paragraph">
          The HMIS uses a numbering system from 0-4, with 4 being the most
          severe:
        </p>
        <div className="rating-explanations">
          <h3>Health Hazard (Blue)</h3>
          <ul>
            <li>
              <strong>4</strong> - Fatal on short exposure. Specialized
              protective equipment required
            </li>
            <li>
              <strong>3</strong> - Serious temporary or moderate residual injury
            </li>
            <li>
              <strong>2</strong> - Temporary incapacitation or possible residual
              injury
            </li>
            <li>
              <strong>1</strong> - Slight irritation or minor reversible injury
            </li>
            <li>
              <strong>0</strong> - No significant risk to health
            </li>
          </ul>

          <h3>Flammability (Red)</h3>
          <ul>
            <li>
              <strong>4</strong> - Flammable gases, volatile liquids, pyrophoric
              materials
            </li>
            <li>
              <strong>3</strong> - Materials capable of ignition under normal
              temperatures
            </li>
            <li>
              <strong>2</strong> - Materials which must be moderately heated
              before ignition
            </li>
            <li>
              <strong>1</strong> - Materials that require considerable
              preheating
            </li>
            <li>
              <strong>0</strong> - Materials that will not burn
            </li>
          </ul>

          <h3>Physical Hazard (Orange)</h3>
          <ul>
            <li>
              <strong>4</strong> - Materials that are readily capable of
              explosive water reaction
            </li>
            <li>
              <strong>3</strong> - Materials that may form explosive mixtures
            </li>
            <li>
              <strong>2</strong> - Materials that are unstable or may react
              violently
            </li>
            <li>
              <strong>1</strong> - Materials that are normally stable but may
              become unstable
            </li>
            <li>
              <strong>0</strong> - Materials that are normally stable
            </li>
          </ul>
        </div>
      </section>

      <section className="about-section">
        <h2>PPE Codes and Requirements</h2>
        <ul>
          <li className="about__list-item">
            <strong>A</strong> - Safety glasses
          </li>
          <li className="about__list-item">
            <strong>B</strong> - Safety glasses, gloves
          </li>
          <li className="about__list-item">
            <strong>C</strong> - Safety glasses, gloves, synthetic apron
          </li>
          <li className="about__list-item">
            <strong>D</strong> - Face shield, gloves, synthetic apron
          </li>
          <li className="about__list-item">
            <strong>E</strong> - Safety glasses, gloves, dust respirator
          </li>
          <li className="about__list-item">
            <strong>F</strong> - Safety glasses, gloves, synthetic apron, dust
            respirator
          </li>
          <li className="about__list-item">
            <strong>G</strong> - Safety glasses, gloves, vapor respirator
          </li>
          <li className="about__list-item">
            <strong>H</strong> - Splash goggles, gloves, synthetic apron, vapor
            respirator
          </li>
          <li className="about__list-item">
            <strong>I</strong> - Safety glasses, gloves, dust and vapor
            respirator
          </li>
          <li className="about__list-item">
            <strong>J</strong> - Splash goggles, gloves, synthetic apron, dust
            and vapor respirator
          </li>
          <li className="about__list-item">
            <strong>K</strong> - Air line hood or mask, gloves, full suit, boots
          </li>
          <li className="about__list-item">
            <strong>X</strong> - Ask supervisor for special handling
            instructions
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
