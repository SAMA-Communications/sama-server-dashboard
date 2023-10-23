import { useEffect, useState } from "react";

export default function ShortcutDescriptionView({ record, resource }) {
  const [participantsData, setParticipantsData] = useState(null);

  useEffect(() => {
    if (!participantsData || record.params.participants.length > 0) {
      return;
    }

    record.params.participants = new Array(...participantsData);
  }, [participantsData]);

  useEffect(() => {
    if (!record.params._id || record.params._id === "undefined") {
      return;
    }

    fetch(
      `/getParticipantsByCid?cid=${record.params._id}&isDev=${
        resource.id.charAt(resource.id.length - 1) === "_" ? 1 : 0
      }`
    ).then((res) => res.json().then((data) => setParticipantsData(data)));
  }, []);

  return record.params.type === "g" ? participantsData?.length || 0 : "-";
}
