import { Link } from "react-router-dom";

export default function BlockOpponentIdShow({ record, resource }) {
  const currentOpponentId = record.params.opponent_id;

  return record.params.type === "u" ? (
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
        Opponent Id
      </label>
      <Link
        to={`/resources/users${
          resource.id.charAt(resource.id.length - 1) === "_" ? "_" : ""
        }/records/${currentOpponentId}/show`}
      >
        {currentOpponentId}
      </Link>
    </section>
  ) : null;
}
