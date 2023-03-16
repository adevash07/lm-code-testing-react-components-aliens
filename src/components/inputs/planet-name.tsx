import React from "react";

export type PlanetNameProps = {
  planetName: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  handleInputChange,
}) => {
  return (
    <div>
      <label htmlFor='planet-name'>Planet Name</label>
      <input
        type='text'
        id='planet-name'
        name='planetName'
        value={planetName}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
};

export default PlanetName;
