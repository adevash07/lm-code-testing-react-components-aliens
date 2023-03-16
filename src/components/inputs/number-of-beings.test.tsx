import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import NumberOfBeings, { NumberOfBeingsProps } from "./number-of-beings";

describe("<NumberOfBeings />", () => {
  it("should render with props", () => {
    const NumberOfBeingsProps: NumberOfBeingsProps = {
      numberOfBeings: "1",
      handleInputChange: jest.fn(),
    };
    render(<NumberOfBeings {...NumberOfBeingsProps} />);
    expect(screen.getByText("Number of Beings")).toBeInTheDocument();
  });

  it("should render with default props", () => {
    const NumberOfBeingsProps: NumberOfBeingsProps = {
      numberOfBeings: "",
      handleInputChange: jest.fn(),
    };
    render(<NumberOfBeings {...NumberOfBeingsProps} />);
    expect(screen.getByText("Number of Beings")).toBeInTheDocument();
  });

  it("should call handleInputChange when input changes", async () => {
    const handleInputChange = jest.fn();
    const NumberOfBeingsProps: NumberOfBeingsProps = {
      numberOfBeings: "",
      handleInputChange,
    };
    render(<NumberOfBeings {...NumberOfBeingsProps} />);
    await user.type(screen.getByLabelText("Number of Beings"), "1");
    expect(handleInputChange).toHaveBeenCalledTimes(1);
  });
});
