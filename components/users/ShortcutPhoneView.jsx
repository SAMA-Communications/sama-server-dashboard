export default function ShortcutPhoneView({ record, resource }) {
  const currentPhone = record.params.phone;

  return `${
    currentPhone
      ? currentPhone.length < 11
        ? currentPhone
        : currentPhone.slice(0, 10) + "..."
      : ""
  }`;
}
