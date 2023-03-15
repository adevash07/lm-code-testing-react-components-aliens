import { useState } from "react";
import PlanetName from "./inputs/planet-name";
import ReasonForSparing from "./inputs/reason-for-sparing";
import SpeciesName from "./inputs/species-name";
import NumberOfBeings from "./inputs/number-of-beings";
import W12MHeader from "./W12MHeader";
import TwoPlusTwo from "./inputs/what-is-twoplustwo";

const W12MForm = () => {
  //   const [speciesName, setSpeciesName] = useState(" ");
  //   const [planetName, setPlanetName] = useState(" ");
  //   const [reasonForSparing, setReasonForSparing] = useState(" ");
  //   const [numberOfBeings, setNumberOfBeings] = useState(0);
  //   const [twoPlusTwo, setTwoPlusTwo] = useState(0);

  const [formData, setFormData] = useState({
    speciesName: "",
    planetName: "",
    reasonForSparing: "",
    numberOfBeings: "",
    twoPlusTwo: "",
  });

  const HandleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
    console.log(formData);
  };

  return (
    <section className='w12MForm'>
      <W12MHeader />
      {/* REST OF FORM GOES HERE */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <SpeciesName
          speciesName={formData.speciesName}
          handleInputChange={HandleInputChange}
        />
        <PlanetName
          planetName={formData.planetName}
          handleInputChange={HandleInputChange}
        />
        <NumberOfBeings
          numberOfBeings={formData.numberOfBeings}
          handleInputChange={HandleInputChange}
        />
        <ReasonForSparing
          reasonForSparing={formData.reasonForSparing}
          handleInputChange={HandleInputChange}
        />
        <TwoPlusTwo
          twoPlusTwo={formData.twoPlusTwo}
          handleInputChange={HandleInputChange}
        />
        <input type='submit' value='Submit' />
      </form>
    </section>
  );
};

export default W12MForm;
