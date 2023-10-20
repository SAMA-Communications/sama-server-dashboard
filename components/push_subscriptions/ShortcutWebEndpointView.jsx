export default function ShortcutWebEndpointView({ record, resource }) {
  const currentWebEndpoint = record.params.web_endpoint;

  return `${currentWebEndpoint.slice(0, 4)}...${currentWebEndpoint.slice(-4)}`;
}
