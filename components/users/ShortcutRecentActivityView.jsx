import { useMemo } from "react";
import getDateFormat from "../../utils/get_date_format";

export default function ShortcutRecentActivityView({ record, resource }) {
  const recentActivity = record.params.recent_activity;

  return !recentActivity ? "" : getDateFormat(recentActivity);
}
