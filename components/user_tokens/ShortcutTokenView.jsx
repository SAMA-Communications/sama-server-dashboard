export default function ShortcutTokenView({ record, resource }) {
  const currentToken = record.params.token;

  return `${currentToken?.slice(0, 4)}...${currentToken?.slice(-4)}`;
}
