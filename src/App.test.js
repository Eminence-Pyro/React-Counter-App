import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("increments and decrements the counter", () => {
  render(<App />);
  
  const incrementButton = screen.getByText("Increment");
  const decrementButton = screen.getByText("Decrement");
  const countDisplay = screen.getByText(/Count:/);

  fireEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent("Count: 1");

  fireEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent("Count: 0");
});