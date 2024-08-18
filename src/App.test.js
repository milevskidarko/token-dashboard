import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

jest.mock("./utils/api", () => ({
  fetchTokenData: jest.fn(),
}));

describe("App Component", () => {
  it("renders WalletConnect when not connected", () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const connectButton = screen.getByText(/connect wallet/i);
    expect(connectButton).toBeInTheDocument();
  });

  it("renders TokenSearch when connected", async () => {
    sessionStorage.setItem("isConnected", "true");

    render(
      <Router>
        <App />
      </Router>
    );

    await waitFor(() => {
      const searchComponent = screen.getByPlaceholderText(
        /copy token address from right button on clipboard/i
      );
      expect(searchComponent).toBeInTheDocument();
    });
  });
});
