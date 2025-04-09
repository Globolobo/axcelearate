import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { ContactFieldProps } from "./components/ContactField";

// Interface for ContactSearchPanel props
interface ContactSearchPanelProps {
  attendedContacts: ContactFieldProps[];
  absentContacts: ContactFieldProps[];
}

// Mock the ContactSearchPanel component to simplify testing
vi.mock("./views/ContactSearchPanel", () => ({
  ContactSearchPanel: ({
    attendedContacts,
    absentContacts,
  }: ContactSearchPanelProps) => (
    <div data-testid="contact-search-panel">
      <div data-testid="attended-count">{attendedContacts.length}</div>
      <div data-testid="absent-count">{absentContacts.length}</div>
      <div data-testid="show-email">
        {attendedContacts[0]?.showEmail ? "true" : "false"}
      </div>
    </div>
  ),
}));

describe("App Component", () => {
  it("renders both ContactSearchPanel variants", () => {
    render(<App />);

    // Should find two panels
    const panels = screen.getAllByTestId("contact-search-panel");
    expect(panels).toHaveLength(2);

    // Check for variant headings
    expect(screen.getByText("With Email Variant")).toBeInTheDocument();
    expect(screen.getByText("Without Email Variant")).toBeInTheDocument();
  });

  it("passes correct data to both panels", () => {
    render(<App />);

    // Get counts from panels
    const attendedCounts = screen.getAllByTestId("attended-count");
    const absentCounts = screen.getAllByTestId("absent-count");

    // Both panels should have the same number of contacts
    expect(attendedCounts[0].textContent).toBe(attendedCounts[1].textContent);
    expect(absentCounts[0].textContent).toBe(absentCounts[1].textContent);

    // Make sure we have some contacts to display
    expect(parseInt(attendedCounts[0].textContent || "0")).toBeGreaterThan(0);
    expect(parseInt(absentCounts[0].textContent || "0")).toBeGreaterThan(0);
  });

  it("properly configures email visibility for each variant", () => {
    render(<App />);

    // Get email visibility indicators
    const showEmailValues = screen.getAllByTestId("show-email");

    // First panel should show emails
    expect(showEmailValues[0].textContent).toBe("true");

    // Second panel should hide emails
    expect(showEmailValues[1].textContent).toBe("false");
  });
});
