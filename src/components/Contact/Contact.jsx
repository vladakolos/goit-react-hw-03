import styles from "./Contact.module.css";

export default function Contact({ onDelete, contact }) {
  return (
    <div>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
