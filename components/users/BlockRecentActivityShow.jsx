import getDateFormat from "../../utils/get_date_format";

export default function BlockRecentActivityShow({ record, resource }) {
  const currentRecentActivity = record.params.recent_activity;

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
        Phone
      </label>
      <p style={{ overflowWrap: "break-word" }}>
        {getDateFormat(currentRecentActivity)}
      </p>
    </section>
  );
}
