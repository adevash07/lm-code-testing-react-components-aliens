import { render, screen } from "@testing-library/react";
import W12MForm from "./W12MForm";

test("renders form element", () => {
  // we can hold onto the object returned from render()
  // this object has a container property that we can destructure and inspect
  render(<W12MForm />);
  const titleElement = screen.getByText("Do you want to spare the species?");
  const subTitleElement = screen.getByText(
    "Please Please fill out the form below"
  );

  expect(titleElement).toBeInTheDocument();
  expect(subTitleElement).toBeInTheDocument();
});
