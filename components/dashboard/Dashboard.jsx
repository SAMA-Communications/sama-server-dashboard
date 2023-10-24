import React, { useEffect, useState } from "react";
import { ApiClient } from "adminjs";
// import { Box } from "@adminjs/design-system";
import { useMemo } from "react";
// import {
//   YAxis,
//   XAxis,
//   CartesianGrid,
//   Tooltip,
//   AreaChart,
//   Area,
// } from "recharts";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const api = new ApiClient();

  useEffect(() => {
    api
      .getDashboard()
      .then((res) => {
        console.log("[apiData]", res);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const usersChartsView = useMemo(() => {
    if (!data || !data.usersStatistics) {
      return;
    }

    return "";
    // <AreaChart
    //   width={900}
    //   height={450}
    //   data={data.usersStatistics}
    //   margin={{ top: 40, right: 40, left: 40, bottom: 40 }}
    // >
    //   <defs>
    //     <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
    //       <stop offset="5%" stopColor="#A2FF86" stopOpacity={0.6} />
    //       <stop offset="95%" stopColor="#A2FF86" stopOpacity={0.1} />
    //     </linearGradient>
    //     <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
    //       <stop offset="5%" stopColor="#279EFF" stopOpacity={0.6} />
    //       <stop offset="95%" stopColor="#279EFF" stopOpacity={0.1} />
    //     </linearGradient>
    //   </defs>
    //   <XAxis dataKey="month" />
    //   <YAxis />
    //   <CartesianGrid strokeDasharray="0" />
    //   <Tooltip />
    //   <Area
    //     type="monotone"
    //     dataKey="count_per_month"
    //     stroke="#1A5D1A"
    //     fillOpacity={1}
    //     fill="url(#colorUv)"
    //   />
    //   <Area
    //     type="monotone"
    //     dataKey="count_total"
    //     stroke="#362FD9"
    //     fillOpacity={1}
    //     fill="url(#colorPv)"
    //   />
    // </AreaChart>
  }, [data]);

  return <div>{usersChartsView}</div>;
}
