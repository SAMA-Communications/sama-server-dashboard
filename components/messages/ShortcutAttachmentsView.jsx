export default function ShortcutAttachmentsView({ record, resource }) {
  const currentAttachments = {};

  for (const key in record.params) {
    if (key.startsWith("attachments.")) {
      const [, attachmentsId, fieldName] = key.split(".");
      !currentAttachments[attachmentsId] &&
        (currentAttachments[attachmentsId] = {});
      currentAttachments[attachmentsId][fieldName] = record.params[key];
    }
  }

  return `${Object.keys(currentAttachments).length}`;
}
