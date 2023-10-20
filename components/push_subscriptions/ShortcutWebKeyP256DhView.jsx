export default function ShortcutWebKeyP256DhView({ record, resource }) {
  const currentWebEndpoint = record.params.web_key_p256dh;

  return `${currentWebEndpoint.slice(0, 4)}...${currentWebEndpoint.slice(-4)}`;
}
