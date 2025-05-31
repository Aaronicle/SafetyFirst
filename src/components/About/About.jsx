import "./About.css";

function About() {
  return (
    <div className="About">
      <h1 className="About__header">About Safety First App</h1>

      <section className="About__section">
        <h2>What is the Safety First App?</h2>
        <p className="About__paragraph">
          The Safety First App is a safety-focused web application designed to
          help users properly identify and manage hazardous chemicals. It stores
          critical safety information including HMIS (Hazardous Materials
          Identification System) ratings and required Personal Protective
          Equipment (PPE) for each chemical material.
        </p>
      </section>

      <section className="About__section">
        <h2>Key Features</h2>
        <ul className="About__key-features">
          <li className="About__list-item">
            <strong>Chemical Safety Information:</strong> Store and view HMIS
            ratings for health, flammability, and physical hazards
          </li>
          <li className="About__list-item">
            <strong>PPE Requirements:</strong> Quick access to required personal
            protective equipment for each chemical
          </li>
          <li className="About__list-item">
            <strong>Search Function:</strong> Quickly locate specific chemicals
            and their safety data
          </li>
          <li className="About__list-item">
            <strong>Material Management:</strong> Add new chemicals and update
            existing safety information
          </li>
        </ul>
      </section>

      <section className="About__section">
        <h2>How to Use</h2>
        <ul>
          <li className="About__list-item">
            Use the search bar to quickly find specific chemicals
          </li>
          <li className="About__list-item">
            View detailed HMIS ratings and safety information for each chemical
          </li>
          <li className="About__list-item">
            Check required PPE before handling any material
          </li>
          <li className="About__list-item">
            Add new chemicals using the add button, including all safety ratings
            and PPE requirements
          </li>
        </ul>
        <h2>Understanding HMIS Ratings</h2>
        <p className="About__paragraph">
          The HMIS uses a numbering system from 0-4, with 4 being the most
          severe:
        </p>
        <div className="About__rating-explanations">
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

      <section className="About__section">
        <h2>PPE Codes and Requirements</h2>
        <ul>
          <li className="About__list-item">
            <strong>A</strong> - Safety glasses
          </li>
          <li className="About__list-item">
            <strong>B</strong> - Safety glasses, gloves
          </li>
          <li className="About__list-item">
            <strong>C</strong> - Safety glasses, gloves, synthetic apron
          </li>
          <li className="About__list-item">
            <strong>D</strong> - Face shield, gloves, synthetic apron
          </li>
          <li className="About__list-item">
            <strong>E</strong> - Safety glasses, gloves, dust respirator
          </li>
          <li className="About__list-item">
            <strong>F</strong> - Safety glasses, gloves, synthetic apron, dust
            respirator
          </li>
          <li className="About__list-item">
            <strong>G</strong> - Safety glasses, gloves, vapor respirator
          </li>
          <li className="About__list-item">
            <strong>H</strong> - Splash goggles, gloves, synthetic apron, vapor
            respirator
          </li>
          <li className="About__list-item">
            <strong>I</strong> - Safety glasses, gloves, dust and vapor
            respirator
          </li>
          <li className="About__list-item">
            <strong>J</strong> - Splash goggles, gloves, synthetic apron, dust
            and vapor respirator
          </li>
          <li className="About__list-item">
            <strong>K</strong> - Air line hood or mask, gloves, full suit, boots
          </li>
          <li className="About__list-item">
            <strong>X</strong> - Ask supervisor for special handling
            instructions
          </li>
        </ul>
      </section>
      <section className="About__section">
        <h2>CAS Number Integration</h2>
        <p className="About__paragraph">
          The Safety First App features integration with the Common Chemistry
          API by CAS (Chemical Abstracts Service). When adding a new material,
          users can optionally provide a CAS Registry Number to automatically
          fetch additional chemical data.
        </p>

        <h3>Features</h3>
        <ul>
          <li className="About__list-item">
            <strong>Automatic Data Population:</strong> When a valid CAS number
            is entered, the app automatically retrieves:
            <ul>
              <li>Chemical name</li>
              <li>Molecular formula</li>
              <li>
                Physical properties (boiling point, melting point, density)
              </li>
              <li>Chemical synonyms</li>
              <li>Chemical structure image (when available)</li>
            </ul>
          </li>
        </ul>

        <h3>How it Works</h3>
        <ol className="About__list-item">
          <li>Enter a CAS number in the "Add New Material" form</li>
          <li>The app connects to the CAS Common Chemistry API</li>
          <li>
            If the CAS number is valid, relevant chemical data is automatically
            populated
          </li>
          <li>Users can still manually override any auto-populated fields</li>
          <li>If the CAS number is invalid, an error message is displayed</li>
        </ol>

        <h3>Benefits</h3>
        <ul>
          <li className="About__list-item">Reduces manual data entry</li>
          <li className="About__list-item">
            Ensures accuracy of chemical information
          </li>
          <li className="About__list-item">
            Provides additional valuable chemical data
          </li>
          <li className="About__list-item">
            Maintains flexibility for custom entries
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
