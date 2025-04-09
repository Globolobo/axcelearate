import React, { useState } from "react";
import { Box } from "@radix-ui/themes";
import { SectionHeader } from "./SectionHeader";
import { ContactField, ContactFieldProps } from "./ContactField";

export interface SectionProps {
  title: string;
  contacts: ContactFieldProps[];
  defaultExpanded?: boolean;
  loading?: boolean;
}

export const Section = ({
  title,
  contacts,
  defaultExpanded = false,
}: SectionProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <Box className="section-container">
      <SectionHeader
        title={title}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      />

      {expanded && (
        <Box className="section-content" style={{ padding: "8px 0" }}>
          {contacts.map((contact, index) => (
            <ContactField key={`${contact.name}-${index}`} {...contact} />
          ))}
        </Box>
      )}
    </Box>
  );
};
