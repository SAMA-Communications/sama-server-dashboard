export default function ShortcutEmailView({ record, resource }) {
  const currentEmail = record.params.email;

  return `${
    currentEmail
      ? currentEmail.length < 14
        ? currentEmail
        : currentEmail.slice(0, 13) + "..."
      : ""
  }`;
}
