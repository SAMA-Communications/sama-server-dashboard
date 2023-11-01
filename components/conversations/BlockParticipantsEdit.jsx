import { useEffect, useMemo, useState } from "react";

export default function BlockParticipantsEdit({ record, resource }) {
  const [participants, setParticipants] = useState([]);

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
              fontFamily: "Roboto, sans-serif",
              lineHeight: "16px",
              fontSize: "14px",
              fontWeight: "normal",
              display: "flex",
            }}
          >
            <label
              style={{
                display: "block",
                fontFamily: "Roboto, sans-serif",
                fontSize: "12px",
                color: "rgb(137, 138, 154)",
                paddingRight: "10px",
                fontWeight: 300,
                height: "24px",
                width: "36px",
                padding: "4px 0",
                textAlign: "center",
                lineHeight: "24px",
                border: "1px dashed rgb(187, 195, 203)",
              }}
            >
              {index + 1}:
            </label>
            <p
              style={{
                width: "220px",
                height: "24px",
                padding: "4px 12px",
                lineHeight: "24px",
                border: "1px dashed rgb(187, 195, 203)",
              }}
            >
              {u.user_id}
            </p>
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
          boxSizing: "border-box",
          fontFamily: "Roboto, sans-serif",
          lineHeight: "16px",
          fontSize: "14px",
          fontWeight: "normal",
        }}
      >
        <section
          style={{
            boxSizing: "border-box",
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
