import "@testing-library/jest-dom";
import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("should display the users weather after button is clicked", async () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /Use my location/i });

  userEvent.click(button);
  waitFor(() => {
    const reloadedWeatherCard = screen.findByText("Find Your Weather");
    expect(reloadedWeatherCard).toBeInTheDocument();
  });
});
