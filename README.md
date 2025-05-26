Safety First App

What is the Safety First App?
The Safety First App is a safety-focused web application designed to help users properly identify and manage hazardous chemicals. It stores critical safety information including HMIS (Hazardous Materials Identification System) ratings and required Personal Protective Equipment (PPE) for each chemical material.

Key Features
Chemical Safety Information: Store and view HMIS ratings for health, flammability, and physical hazards
PPE Requirements: Quick access to required personal protective equipment for each chemical
Search Function: Quickly locate specific chemicals and their safety data
Material Management: Add new chemicals and update existing safety information

How to Use
Use the search bar to quickly find specific chemicals
View detailed HMIS ratings and safety information for each chemical
Check required PPE before handling any material
Add new chemicals using the add button, including all safety ratings and PPE requirements

## CAS Number Integration

The Safety First App features integration with the Common Chemistry API by CAS (Chemical Abstracts Service). When adding a new material, users can optionally provide a CAS Registry Number to automatically fetch additional chemical data:

### Features:

- **Automatic Data Population**: When a valid CAS number is entered, the app automatically retrieves:
  - Chemical name
  - Molecular formula
  - Physical properties (boiling point, melting point, density)
  - Chemical synonyms
  - Chemical structure image (when available)

### How it works:

1. Enter a CAS number in the "Add New Material" form
2. The app connects to the CAS Common Chemistry API
3. If the CAS number is valid, relevant chemical data is automatically populated
4. Users can still manually override any auto-populated fields
5. If the CAS number is invalid, an error message is displayed

### Benefits:

- Reduces manual data entry
- Ensures accuracy of chemical information
- Provides additional valuable chemical data
- Maintains flexibility for custom entries

<img src="src/assets/images/Readme.png" alt="Application Screenshot" width="800"/>

Deployed website: https://aaronicle.github.io/SafetyFirst/#/

Repository: https://github.com/Aaronicle/SafetyFirst
