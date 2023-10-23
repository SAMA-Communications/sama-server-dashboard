import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

export default function BlockParticipantsShow({ record, resource }) {
  const [participants, setParticipants] = useState([]);
  console.log(participants);
  useEffect(() => {
    if (!record.params._id || record.params._id === "undefined") {
      return;
    }

    fetch(
      `/getParticipantsByCid?cid=${record.params._id}&isDev=${
        resource.id.charAt(resource.id.length - 1) === "_" ? 1 : 0
      }`
    ).then((res) => res.json().then((data) => setParticipants(data)));
  }, []);

  const participantsView = useMemo(
    () =>
      participants.map((u, index) => {
        return (
          <section
            key={u._id}
            style={{
              boxSizing: "border-box",
              minWidth: "0px",
              fontFamily: "Roboto, sans-serif",
              lineHeight: "16px",
              fontSize: "14px",
              fontWeight: "normal",
              marginBottom: "4px",
              display: "flex",
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
                paddingRight: "10px",
                fontWeight: 300,
              }}
            >
              {index + 1}:
            </label>
            <Link
              to={`/resources/users${
                resource.id.charAt(resource.id.length - 1) === "_" ? "_" : ""
              }/records/${u.user_id}/show`}
            >
              {u.user_id}
            </Link>
          </section>
        );
      }),
    [participants]
  );

  return record.params.type === "g" ? (
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
        Participants
      </label>
      <section
        style={{
          border: "1px dashed rgb(187, 195, 203)",
          padding: "16px 16px 8px 16px",
          boxSizing: "border-box",
          minWidth: "0px",
          fontFamily: "Roboto, sans-serif",
          lineHeight: "16px",
          fontSize: "14px",
          fontWeight: "normal",
        }}
      >
        <section
          // data-css="messages-show-attachments.0"
          // data-testid="property-show-attachments.0"
          style={{
            boxSizing: "border-box",
            minWidth: "0px",
            fontFamily: "Roboto, sans-serif",
            lineHeight: "16px",
            fontSize: "14px",
            fontWeight: "normal",
          }}
        >
          {participantsView}
        </section>
      </section>
    </section>
  ) : null;
}
