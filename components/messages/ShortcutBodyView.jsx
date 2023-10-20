export default function BlockAttachmentsShow({ record, resource }) {
  const currentWebEndpoint = record.params.body;

  return `${
    currentWebEndpoint.length < 11
      ? currentWebEndpoint
      : currentWebEndpoint.slice(0, 10) + "..."
  }`;
}
