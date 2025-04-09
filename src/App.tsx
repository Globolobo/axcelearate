import { Box, Flex } from "@radix-ui/themes";
import "./App.css";
import { ContactSearchPanel } from "./views/ContactSearchPanel";
import {
  attendedContacts,
  absentContacts,
  createContactsWithoutEmails,
} from "./data/contactData";

function App() {
  // Create versions without email display
  const attendedNoEmails = createContactsWithoutEmails(attendedContacts);
  const absentNoEmails = createContactsWithoutEmails(absentContacts);

  return (
    <div style={{ background: "#444444", minHeight: "100vh", padding: "20px" }}>
      <Flex gap="4">
        <Box>
          <h2 style={{ color: "white" }}>With Email Variant</h2>
          <ContactSearchPanel
            attendedContacts={attendedContacts}
            absentContacts={absentContacts}
          />
        </Box>

        <Box>
          <h2 style={{ color: "white" }}>Without Email Variant</h2>
          <ContactSearchPanel
            attendedContacts={attendedNoEmails}
            absentContacts={absentNoEmails}
          />
        </Box>
      </Flex>
    </div>
  );
}

export default App;
