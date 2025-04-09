import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ContactSearchPanel } from "./ContactSearchPanel";
import { attendedContacts, absentContacts } from "../data/contactData";

// Use a subset of the contacts for testing
const mockAttendedContacts = attendedContacts.slice(0, 2);
const mockAbsentContacts = absentContacts.slice(0, 2);

// Interface for SearchField props
interface SearchFieldProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
}

// Mock the SearchField component since we're mostly testing integration
vi.mock("../components/SearchField", () => ({
  SearchField: ({ value, onValueChange, placeholder }: SearchFieldProps) => (
    <input
      type="text"
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      placeholder={placeholder}
      data-testid="search-field"
    />
  ),
}));

describe("ContactSearchPanel Component", () => {
  it("renders the contact search panel with sections", () => {
    render(
      <ContactSearchPanel
        attendedContacts={mockAttendedContacts}
        absentContacts={mockAbsentContacts}
      />
    );

    // Check if search field is rendered
    expect(screen.getByTestId("search-field")).toBeInTheDocument();

    // Check if section titles are rendered
    expect(screen.getByText("Attended")).toBeInTheDocument();
    expect(screen.getByText("Absent")).toBeInTheDocument();

    // Check if contacts are rendered
    expect(screen.getByText(mockAttendedContacts[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockAttendedContacts[1].name)).toBeInTheDocument();
    expect(screen.getByText(mockAbsentContacts[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockAbsentContacts[1].name)).toBeInTheDocument();
  });

  it("filters contacts based on search input", () => {
    render(
      <ContactSearchPanel
        attendedContacts={mockAttendedContacts}
        absentContacts={mockAbsentContacts}
      />
    );

    const searchField = screen.getByTestId("search-field");
    const firstContactName = mockAttendedContacts[0].name;

    // Search for a specific name
    fireEvent.change(searchField, {
      target: { value: firstContactName.split(" ")[0] },
    });

    // First contact should be visible
    expect(screen.getByText(firstContactName)).toBeInTheDocument();

    // Other names should not be visible
    expect(
      screen.queryByText(mockAttendedContacts[1].name)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(mockAbsentContacts[0].name)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(mockAbsentContacts[1].name)
    ).not.toBeInTheDocument();
  });

  it("filters contacts by email", () => {
    render(
      <ContactSearchPanel
        attendedContacts={mockAttendedContacts}
        absentContacts={mockAbsentContacts}
      />
    );

    const searchField = screen.getByTestId("search-field");

    // Search for a specific email domain
    fireEvent.change(searchField, { target: { value: "example.com" } });

    // Determine which contacts should be visible based on the email domain
    const visibleContacts = [
      ...mockAttendedContacts,
      ...mockAbsentContacts,
    ].filter(
      (contact) => contact.email && contact.email.includes("example.com")
    );

    const invisibleContacts = [
      ...mockAttendedContacts,
      ...mockAbsentContacts,
    ].filter(
      (contact) => !contact.email || !contact.email.includes("example.com")
    );

    // Visible contacts should be in the document
    visibleContacts.forEach((contact) => {
      expect(screen.getByText(contact.name)).toBeInTheDocument();
    });

    // Invisible contacts should not be in the document
    invisibleContacts.forEach((contact) => {
      expect(screen.queryByText(contact.name)).not.toBeInTheDocument();
    });
  });

  it("shows empty sections when no contacts match the search", () => {
    render(
      <ContactSearchPanel
        attendedContacts={mockAttendedContacts}
        absentContacts={mockAbsentContacts}
      />
    );

    const searchField = screen.getByTestId("search-field");

    // Search for a non-existent name
    fireEvent.change(searchField, { target: { value: "XYZ" } });

    // Section headers should still be visible
    expect(screen.getByText("Attended")).toBeInTheDocument();
    expect(screen.getByText("Absent")).toBeInTheDocument();

    // No contacts should be visible
    mockAttendedContacts.forEach((contact) => {
      expect(screen.queryByText(contact.name)).not.toBeInTheDocument();
    });

    mockAbsentContacts.forEach((contact) => {
      expect(screen.queryByText(contact.name)).not.toBeInTheDocument();
    });
  });
});
