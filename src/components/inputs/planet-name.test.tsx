import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import PlanetName, { PlanetNameProps } from "./planet-name";

describe("<PlanetName />", () => {
  it("should render with props", () => {
    const PlanetNameProps: PlanetNameProps = {
      planetName: "Earth",
      handleInputChange: jest.fn(),
    };
    render(<PlanetName {...PlanetNameProps} />);
    expect(screen.getByText("Planet Name")).toBeInTheDocument();
  });

  it("should render with default props", () => {
    const PlanetNameProps: PlanetNameProps = {
      planetName: "",
      handleInputChange: jest.fn(),
    };
    render(<PlanetName {...PlanetNameProps} />);
    expect(screen.getByText("Planet Name")).toBeInTheDocument();
  });

  it("should call handleInputChange when input changes", async () => {
    const handleInputChange = jest.fn();
    const PlanetNameProps: PlanetNameProps = {
      planetName: "",
      handleInputChange,
    };
    render(<PlanetName {...PlanetNameProps} />);
    await user.type(screen.getByLabelText("Planet Name"), "Earth");
    expect(handleInputChange).toHaveBeenCalledTimes(5);
  });
});
