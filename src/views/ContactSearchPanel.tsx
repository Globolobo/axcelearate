import React, { useState } from "react";
import { Box } from "@radix-ui/themes";
import { SearchField } from "../components/SearchField";
import { Section } from "../components/Section";
import { ContactFieldProps } from "../components/ContactField";
import "./contact-search-panel.scss";

export interface ContactSearchPanelProps {
  attendedContacts: ContactFieldProps[];
  absentContacts: ContactFieldProps[];
}

export const ContactSearchPanel = ({
  attendedContacts,
  absentContacts,
}: ContactSearchPanelProps) => {
  const [searchValue, setSearchValue] = useState("");

  // Filter contacts based on search value
  const filterContacts = (contacts: ContactFieldProps[]) => {
    if (!searchValue.trim()) return contacts;

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        (contact.email &&
          contact.email.toLowerCase().includes(searchValue.toLowerCase()))
    );
  };

  const filteredAttendedContacts = filterContacts(attendedContacts);
  const filteredAbsentContacts = filterContacts(absentContacts);

  return (
    <Box
      className="contact-search-panel"
      style={{
        width: "400px",
        border: "1px solid #e4e5e8",

        overflow: "hidden",
      }}
    >
      <Box style={{ padding: "8px" }}>
        <SearchField
          placeholder="Search"
          value={searchValue}
          onValueChange={setSearchValue}
        />
      </Box>

      <Section
        title="Attended"
        contacts={filteredAttendedContacts}
        defaultExpanded={true}
      />

      <Section
        title="Absent"
        contacts={filteredAbsentContacts}
        defaultExpanded={true}
      />
    </Box>
  );
};
