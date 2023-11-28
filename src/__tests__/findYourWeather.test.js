import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Find Your Weather", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("should display the users weather after button is clicked", async () => {
    const button = screen.getByRole("button", { name: /Use my location/i });
    userEvent.click(button);
    waitFor(() => {
      const reloadedWeatherCard = screen.findByText("Find Your Weather");
      expect(reloadedWeatherCard).toBeInTheDocument();
    });
  });

  test("should show a loading icon when requesting information", async () => {
    const button = screen.getByRole("button", { name: /Use my location/i });
    userEvent.click(button);
    const loader = await screen.findByTitle("loader");

    expect(loader).toBeInTheDocument();
  });

  test("should update displayed weather data to users location", async () => {
    const button = screen.getByRole("button", { name: /Use my location/i });
    userEvent.click(button);

    waitFor(async () => {
      const newCity = await screen.findByText("Colorado Springs, US");
      expect(newCity).toBeInTheDocument();
    });
  });
});
