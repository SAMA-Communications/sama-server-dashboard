import { Link } from "react-router-dom";

export default function BlockConversationIdShow({ record, resource }) {
  const currentConversationId = record.params.conversation_id;
  console.log(resource.id.includes("_"));
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
        Conversation Id
      </label>
      <Link
        to={`/resources/conversations${
          resource.id.charAt(resource.id.length - 1) === "_" ? "_" : ""
        }/records/${currentConversationId}/show`}
      >
        {currentConversationId}
      </Link>
    </section>
  );
}
