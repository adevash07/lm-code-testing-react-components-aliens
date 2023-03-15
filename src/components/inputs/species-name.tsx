import React from "react";

type Props = {
  speciesName: string;
  handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

const SpeciesName: React.FC<Props> = ({ speciesName, handleInputChange }) => {
  return (
    <div>
      <label htmlFor='species-name'>Species Name</label>
      <input
        type='text'
        id='species-name'
        name='speciesName'
        value={speciesName}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
};

export default SpeciesName;
