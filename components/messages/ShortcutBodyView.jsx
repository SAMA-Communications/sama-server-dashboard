export default function BlockAttachmentsShow({ record, resource }) {
  const currentBody = record.params.body;

  return `${
    currentBody
      ? currentBody.length < 11
        ? currentBody
        : currentBody.slice(0, 10) + "..."
      : ""
  }`;
}
