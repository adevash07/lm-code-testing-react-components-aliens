import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import TwoPlusTwo, { TwoPlusTwoProps } from "./what-is-twoplustwo";

describe("<twoPlusTwo />", () => {
  it("should render with props", () => {
    const TwoPlusTwoProps: TwoPlusTwoProps = {
      twoPlusTwo: "Not 4",
      handleInputChange: jest.fn(),
    };
    render(<TwoPlusTwo {...TwoPlusTwoProps} />);
    expect(screen.getByText("2 + 2")).toBeInTheDocument();
  });

  it("should render with default props", () => {
    const TwoPlusTwoProps: TwoPlusTwoProps = {
      twoPlusTwo: "",
      handleInputChange: jest.fn(),
    };
    render(<TwoPlusTwo {...TwoPlusTwoProps} />);
    expect(screen.getByText("2 + 2")).toBeInTheDocument();
  });

  it("should call handleInputChange when input changes", async () => {
    const handleInputChange = jest.fn();
    const TwoPlusTwoProps: TwoPlusTwoProps = {
      twoPlusTwo: "4",
      handleInputChange,
    };
    render(<TwoPlusTwo {...TwoPlusTwoProps} />);
    await user.selectOptions(screen.getByLabelText("2 + 2"), "4");
    expect(handleInputChange).toHaveBeenCalledTimes(1);
  });
});
