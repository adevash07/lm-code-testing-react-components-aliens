import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import SpeciesName, { SpeciesNameProps } from "./species-name";

describe("<SpeciesName />", () => {
  it("should render with props", () => {
    const SpeciesNameProps: SpeciesNameProps = {
      speciesName: "Humans",
      handleInputChange: jest.fn(),
    };
    render(<SpeciesName {...SpeciesNameProps} />);
    expect(screen.getByText("Species Name")).toBeInTheDocument();
  });

  it("should render with default props", () => {
    const SpeciesNameProps: SpeciesNameProps = {
      speciesName: "",
      handleInputChange: jest.fn(),
    };
    render(<SpeciesName {...SpeciesNameProps} />);
    expect(screen.getByText("Species Name")).toBeInTheDocument();
  });

  it("should call handleInputChange when input changes", async () => {
    const handleInputChange = jest.fn();
    const SpeciesNameProps: SpeciesNameProps = {
      speciesName: "",
      handleInputChange,
    };
    render(<SpeciesName {...SpeciesNameProps} />);
    await user.type(screen.getByLabelText("Species Name"), "Humans");
    expect(handleInputChange).toHaveBeenCalledTimes(6);
  });
});
