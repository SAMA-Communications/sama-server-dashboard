export default function ShortcutObjectIdView({ record, resource }) {
  const currentObjectId = record.params.object_id;

  return `${
    currentObjectId.length < 11
      ? currentObjectId
      : currentObjectId.slice(0, 10) + "..."
  }`;
}
