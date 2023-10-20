export default function UserIdFieldView({ record, resource }) {
  const currentId = record.id;

  return `${currentId.slice(0, 4)}...${currentId.slice(-4)}`;
}
