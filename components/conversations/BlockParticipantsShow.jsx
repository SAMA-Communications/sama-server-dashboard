import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

export default function BlockParticipantsShow({ record, resource }) {
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
            key={u.user_id}
            style={{
              boxSizing: "border-box",
              fontFamily: "Roboto, sans-serif",
              lineHeight: "16px",
              fontSize: "14px",
              fontWeight: "normal",
              display: "flex",
              borderBottom: "1px solid rgb(187, 195, 203)",
            }}
          >
            <label
              style={{
                display: "block",
                fontFamily: "Roboto, sans-serif",
                fontSize: "12px",
                color: "rgb(137, 138, 154)",
                paddingRight: "10px",
                borderRight: "1px solid rgb(187, 195, 203)",
                fontWeight: 300,
                height: "auto",
                width: "36px",
                padding: "4px 0",
                textAlign: "center",
                lineHeight: "24px",
              }}
            >
              {index + 1}:
            </label>
            <div
              style={{
                width: "max-content",
                height: "auto",
                padding: "4px 12px",
                lineHeight: "24px",
              }}
            >
              {u.user_info ? (
                <>
                  <Link
                    to={`/resources/users${
                      resource.id.charAt(resource.id.length - 1) === "_"
                        ? "_"
                        : ""
                    }/records/${u.user_id}/show`}
                  >
                    {u.user_id}
                  </Link>{" "}
                  ({u.user_info?.login})
                </>
              ) : (
                <p style={{ color: "rgb(137, 138, 154)" }}>
                  User no longer exists
                </p>
              )}
              <div className="cpr">
                <p data-tooltip="Conversations-participants record">CPR*: </p>
                <Link
                  to={`/resources/conversations_participants${
                    resource.id.charAt(resource.id.length - 1) === "_"
                      ? "_"
                      : ""
                  }/records/${u.cpr_id}/show`}
                >
                  {u.cpr_id}
                </Link>
              </div>
            </div>
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
            width: "max-content",
            boxSizing: "border-box",
            fontFamily: "Roboto, sans-serif",
            lineHeight: "16px",
            fontSize: "14px",
            fontWeight: "normal",
            border: "1px solid rgb(187, 195, 203)",
            borderBottom: 0,
            borderRadius: "2px",
          }}
        >
          {participants.length
            ? participantsView
            : "No participants in the chat"}
        </section>
      </section>
    </section>
  ) : null;
}
