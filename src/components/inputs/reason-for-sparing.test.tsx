import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import ReasonForSparing, { ReasonForSparingProps } from "./reason-for-sparing";

describe("<ReasonForSparing />", () => {
  it("should render with props", () => {
    const ReasonForSparingProps: ReasonForSparingProps = {
      reasonForSparing: "It is a wonderful planet",
      handleInputChange: jest.fn(),
    };
    render(<ReasonForSparing {...ReasonForSparingProps} />);
    expect(screen.getByText("Reason for sparing")).toBeInTheDocument();
  });

  it("should render with default props", () => {
    const ReasonForSparingProps: ReasonForSparingProps = {
      reasonForSparing: "",
      handleInputChange: jest.fn(),
    };
    render(<ReasonForSparing {...ReasonForSparingProps} />);
    expect(screen.getByText("Reason for sparing")).toBeInTheDocument();
  });

  it("should call handleInputChange when input changes", async () => {
    const handleInputChange = jest.fn();
    const ReasonForSparingProps: ReasonForSparingProps = {
      reasonForSparing: "",
      handleInputChange,
    };
    render(<ReasonForSparing {...ReasonForSparingProps} />);
    await user.type(
      screen.getByLabelText("Reason for sparing"),
      "It is a wonderful planet"
    );
    expect(handleInputChange).toHaveBeenCalledTimes(24);
  });
});
