import { Link } from "react-router-dom";

export default function BlockFomShow({ record, resource }) {
  const currentFrom = record.params.from;

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
          marginBottom: "4px",
          fontWeight: 300,
        }}
      >
        From (UID)
      </label>
      <Link
        to={`/resources/users${
          resource.id.includes("_") ? "_" : ""
        }/records/${currentFrom}/show`}
      >
        {currentFrom}
      </Link>
    </section>
  );
}
