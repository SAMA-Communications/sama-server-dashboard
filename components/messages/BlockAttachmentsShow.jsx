import { useMemo } from "react";

export default function BlockAttachmentsShow({ record, resource }) {
  const currentAttachments = {};

  for (const key in record.params) {
    if (key.startsWith("attachments.")) {
      const [, attachmentsId, fieldName] = key.split(".");
      !currentAttachments[attachmentsId] &&
        (currentAttachments[attachmentsId] = {});
      currentAttachments[attachmentsId][fieldName] = record.params[key];
    }
  }

  const attachmentsView = useMemo(
    () =>
      Object.values(currentAttachments).map((att, index) => {
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
              {index + 1}
            </label>
            <p>File_id: {att.file_id}</p>
            <p>File_name: {att.file_name}</p>
          </section>
        );
      }),
    [currentAttachments]
  );

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
        Attachments
      </label>
      <section
        style={{
          border: "1px dashed rgb(187, 195, 203)",
          padding: "16px",
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
          {attachmentsView}
        </section>
      </section>
    </section>
  );
}
