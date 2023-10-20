export default function ShortcutDescriptionView({ record, resource }) {
  const currentType = record.params.type;

  return (
    <span
      style={{
        padding: "3px 6px",
        borderRadius: "6px",
        backgroundColor:
          currentType === "g" ? "rgba(140, 140, 140, 0.6)" : "#68b9e8",
      }}
    >
      {currentType}
    </span>
  );
}
