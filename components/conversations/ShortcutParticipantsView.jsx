import { useEffect, useState } from "react";

export default function ShortcutParticipantsView({ record, resource }) {
  const [participantsData, setParticipantsData] = useState(null);

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
