import { ContactFieldProps } from "../components/ContactField";

// Sample contact data
export const attendedContacts: ContactFieldProps[] = [
  {
    name: "Dianne Russell",
    email: "dianne.russell@company.com",
    showEmail: true,
    enabled: true,
    imageSrc: "/avatars/dianne.png",
  },
  {
    name: "Ronald Richards",
    email: "ronald.richards@company.com",
    showEmail: true,
    enabled: true,
    imageSrc: "/avatars/ronald.png",
  },
  {
    name: "Arlene McCoy",
    email: "arlene.mccoy@company.com",
    showEmail: true,
    enabled: false,
    imageSrc: "/avatars/arlene.png",
  },
  {
    name: "Kathryn Murphy",
    email: "kathryn.murphy@client.com",
    showEmail: true,
    enabled: true,
    imageSrc: "/avatars/kathryn.png",
  },
  {
    name: "Savannah Nguyen",
    email: "savannah.nguyen@partner.org",
    showEmail: true,
    enabled: true,
    imageSrc: "/avatars/savannah.png",
  },
  {
    name: "Albert Flores",
    email: "albert.flores@vendor.net",
    showEmail: true,
    enabled: false,
    imageSrc: "/avatars/albert.png",
  },
];

export const absentContacts: ContactFieldProps[] = [
  {
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    showEmail: true,
    enabled: true,
    imageSrc: "/avatars/jenny.png",
  },
  {
    name: "Wade Warren",
    email: "wade.warren@example.com",
    showEmail: true,
    enabled: true,
    imageSrc: "/avatars/wade.png",
  },
  {
    name: "Bessie Cooper",
    email: "bessie.cooper@example.com",
    showEmail: true,
    enabled: false,
    imageSrc: "/avatars/bessie.png",
  },
  {
    name: "Ralph Edwards",
    email: "ralph.edwards@example.com",
    showEmail: true,
    enabled: true,
    imageSrc: "/avatars/ralph.png",
  },
];

// Helper function to create versions without email display
export const createContactsWithoutEmails = (
  contacts: ContactFieldProps[]
): ContactFieldProps[] => {
  return contacts.map((contact) => ({
    ...contact,
    showEmail: false,
  }));
};
