export default function ShortcutWebKeyAuthView({ record, resource }) {
  const currentWebEndpoint = record.params.web_key_auth;

  return `${currentWebEndpoint?.slice(0, 4)}...${currentWebEndpoint?.slice(
    -4
  )}`;
}
