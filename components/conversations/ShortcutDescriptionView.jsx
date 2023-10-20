export default function ShortcutDescriptionView({ record, resource }) {
  const currentDescription = record.params.description;

  return `${
    currentDescription
      ? currentDescription.length < 14
        ? currentDescription
        : currentDescription.slice(0, 13) + "..."
      : ""
  }`;
}
