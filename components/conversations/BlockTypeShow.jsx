import { Link } from "react-router-dom";

export default function BlockTypeShow({ record, resource }) {
  const currentType = record.params.type;

  return (
    <section
      style={{
        boxSizing: "border-box",
        minWidth: "0px",
        fontFamily: "Roboto, sans-serif",
        lineHeight: "16px",
        fontSize: "14px",
        fontWeight: "normal",
        marginBottom: "24px",
      }}
    >
      <label
        style={{
          display: "block",
          fontFamily: "Roboto, sans-serif",
          fontSize: "12px",
          lineHeight: "16px",
          color: "rgb(137, 138, 154)",
          marginBottom: "6px",
          fontWeight: 300,
        }}
      >
        Type
      </label>
      <span
        style={{
          padding: "3px 6px",
          borderRadius: "6px",
          backgroundColor:
            currentType === "g" ? "rgba(140, 140, 140, 0.6)" : "#219be4",
        }}
      >
        {currentType}
      </span>
    </section>
  );
}
