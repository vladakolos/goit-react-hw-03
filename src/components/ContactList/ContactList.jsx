import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.listItem}>
          <Contact
            onDelete={() => onDeleteContact(contact.id)}
            contact={contact}
          />
        </li>
      ))}
    </ul>
  );
}
