import React, { useEffect, useMemo, useState } from "react";
import { Box, H2, H5, Illustration, Text } from "@adminjs/design-system";
import { styled } from "@adminjs/design-system/styled-components";
import { ApiClient, useTranslation } from "adminjs";
// import {
//   YAxis,
//   XAxis,
//   CartesianGrid,
//   Tooltip,
//   AreaChart,
//   Area,
//   ResponsiveContainer,
//   LabelList,
// } from "recharts";

const pageHeaderHeight = 284;
const pageHeaderPaddingY = 74;
const pageHeaderPaddingX = 250;

function DashboardHeader() {
  const { translateMessage } = useTranslation();

  return (
    <Box position="relative" overflow="hidden" data-css="default-dashboard">
      <Box
        position="absolute"
        top={50}
        left={-10}
        opacity={[0.2, 0.4, 1]}
        animate
      >
        <Illustration variant="Rocket" />
      </Box>
      <Box
        position="absolute"
        top={-70}
        right={-15}
        opacity={[0.2, 0.4, 1]}
        animate
      >
        <Illustration variant="Moon" />
      </Box>
      <Box
        bg="grey100"
        height={pageHeaderHeight}
        py={pageHeaderPaddingY}
        px={["default", "lg", pageHeaderPaddingX]}
      >
        <Text textAlign="center" color="white">
          <H2>{translateMessage("welcomeOnBoard_title")}</H2>
        </Text>
      </Box>
    </Box>
  );
}
const Card = styled(Box)`
  display: ${({ flex }) => (flex ? "flex" : "block")};
  color: ${({ theme }) => theme.colors.grey100};
  height: 100%;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.space.md};
  transition: all 0.1s ease-in;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary100};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }
`;

Card.defaultProps = {
  variant: "container",
  boxShadow: "card",
};

export default function Dashboard() {
  const [data, setData] = useState(null);
  const api = new ApiClient();

  useEffect(() => {
    api
      .getDashboard()
      .then((res) => {
        console.log("[data]", res.data);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  function getCharts(data, value, name, lineColor, gradientColor) {
    const renderCustomizedLabel = (props) => {
      const { x, y, value } = props;

      return value ? (
        <g transform={`translate(${x},${y})`}>
          <text
            x={`${value}`.length * 4}
            y={0}
            dy={-5}
            textAnchor="end"
            fill="#666"
          >
            {value}
          </text>
        </g>
      ) : null;
    };

    return (
      // <ResponsiveContainer width="100%" height={400}>
      //   <AreaChart
      //     data={data}
      //     margin={{ top: 20, right: 20, left: 20, bottom: 0 }}
      //   >
      //     <defs>
      //       <linearGradient
      //         id={`colorUv${gradientColor}`}
      //         x1="0"
      //         y1="0"
      //         x2="0"
      //         y2="1"
      //       >
      //         <stop offset="5%" stopColor={gradientColor} stopOpacity={0.7} />
      //         <stop offset="95%" stopColor={gradientColor} stopOpacity={0.2} />
      //       </linearGradient>
      //     </defs>
      //     <XAxis dataKey={name} />
      //     <YAxis />
      //     <CartesianGrid strokeDasharray="3 3" />
      //     <Tooltip />
      //     <Area
      //       type="monotone"
      //       dataKey={value}
      //       stroke={lineColor}
      //       fillOpacity={1}
      //       fill={`url(#colorUv${gradientColor})`}
      //     >
      //       <LabelList dataKey={value} content={renderCustomizedLabel} />
      //     </Area>
      //   </AreaChart>
      // </ResponsiveContainer>
      ""
    );
  }

  return (
    <Box>
      <DashboardHeader />
      <Box
        mt={["xl", "xl", "-100px"]}
        mb="xl"
        mx={[0, 0, 0, "auto"]}
        px={["default", "lg", "xxl", "0"]}
        position="relative"
        flex
        flexDirection="row"
        flexWrap="wrap"
        width={[1, 1, 1, 1024]}
      >
        <Box width={[1, 1, 1 / 3]} p="lg">
          <Card
            flex
            style={{ justifyContent: "center", gap: "10px", width: "100%" }}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
                stroke="#3085C3"
                strokeWidth="0.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Box
              flex
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text
                textAlign="center"
                style={{
                  lineHeight: "100%",
                  marginBottom: 5,
                  padding: "0 10px",
                  color: "#808080",
                }}
              >
                Users
              </Text>
              <Text
                textAlign="center"
                style={{
                  fontSize: "2.8rem",
                  lineHeight: "100%",
                  marginBottom: 0,
                }}
              >
                {data?.usersStatistics.users_total}
              </Text>
            </Box>
          </Card>
        </Box>
        <Box width={[1, 1, 1 / 3]} p="lg">
          <Card
            flex
            style={{ justifyContent: "center", gap: "10px", width: "100%" }}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 15L6.92474 18.1137C6.49579 18.548 6.28131 18.7652 6.09695 18.7805C5.93701 18.7938 5.78042 18.7295 5.67596 18.6076C5.55556 18.4672 5.55556 18.162 5.55556 17.5515V15.9916C5.55556 15.444 5.10707 15.0477 4.5652 14.9683V14.9683C3.25374 14.7762 2.22378 13.7463 2.03168 12.4348C2 12.2186 2 11.9605 2 11.4444V6.8C2 5.11984 2 4.27976 2.32698 3.63803C2.6146 3.07354 3.07354 2.6146 3.63803 2.32698C4.27976 2 5.11984 2 6.8 2H14.2C15.8802 2 16.7202 2 17.362 2.32698C17.9265 2.6146 18.3854 3.07354 18.673 3.63803C19 4.27976 19 5.11984 19 6.8V11M19 22L16.8236 20.4869C16.5177 20.2742 16.3647 20.1678 16.1982 20.0924C16.0504 20.0255 15.8951 19.9768 15.7356 19.9474C15.5558 19.9143 15.3695 19.9143 14.9969 19.9143H13.2C12.0799 19.9143 11.5198 19.9143 11.092 19.6963C10.7157 19.5046 10.4097 19.1986 10.218 18.8223C10 18.3944 10 17.8344 10 16.7143V14.2C10 13.0799 10 12.5198 10.218 12.092C10.4097 11.7157 10.7157 11.4097 11.092 11.218C11.5198 11 12.0799 11 13.2 11H18.8C19.9201 11 20.4802 11 20.908 11.218C21.2843 11.4097 21.5903 11.7157 21.782 12.092C22 12.5198 22 13.0799 22 14.2V16.9143C22 17.8462 22 18.3121 21.8478 18.6797C21.6448 19.1697 21.2554 19.5591 20.7654 19.762C20.3978 19.9143 19.9319 19.9143 19 19.9143V22Z"
                stroke="#6F61C0"
                strokeWidth="0.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Box
              flex
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text
                textAlign="center"
                style={{
                  lineHeight: "100%",
                  marginBottom: 5,
                  padding: "0 10px",
                  color: "#808080",
                }}
              >
                Conversations
              </Text>
              <Text
                textAlign="center"
                style={{
                  fontSize: "2.8rem",
                  lineHeight: "100%",
                  marginBottom: 0,
                }}
              >
                {data?.conversationsStatistics.conversations_total}
              </Text>
            </Box>
          </Card>
        </Box>
        <Box width={[1, 1, 1 / 3]} p="lg">
          <Card
            flex
            style={{ justifyContent: "center", gap: "10px", width: "100%" }}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5 18L14.8571 12M9.14286 12L2.50003 18M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
                stroke="#F86F03"
                strokeWidth="0.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Box
              flex
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text
                textAlign="center"
                style={{
                  lineHeight: "100%",
                  marginBottom: 5,
                  padding: "0 10px",
                  color: "#808080",
                }}
              >
                Messages
              </Text>
              <Text
                textAlign="center"
                style={{
                  fontSize: "2.8rem",
                  lineHeight: "100%",
                  marginBottom: 0,
                }}
              >
                {data?.messagesStatistics.messages_total}
              </Text>
            </Box>
          </Card>
        </Box>
        <Card width={1} m="lg">
          <Text textAlign="center" style={{ marginBottom: 0 }}>
            <H5>
              <b>USERS:</b> statistics for all time
            </H5>
            {data?.usersStatistics.users_per_month
              ? getCharts(
                  data?.usersStatistics.users_per_month,
                  "count",
                  "date",
                  "#0802A3",
                  "#3085C3"
                )
              : null}
          </Text>
        </Card>
        <Card width={1} m="lg">
          <Text textAlign="center" style={{ marginBottom: 0 }}>
            <H5>
              <b>USERS:</b> statistics for the last 30 days
            </H5>
            {data?.usersStatistics.users_per_day
              ? getCharts(
                  data?.usersStatistics.users_per_day,
                  "count",
                  "date",
                  "#0802A3",
                  "#3085C3"
                )
              : null}
            Total number of entries for 30 days:
            <b>{" " + data?.usersStatistics.users_last_month}</b>
          </Text>
        </Card>
        <Card width={1} m="lg">
          <Text textAlign="center" style={{ marginBottom: 0 }}>
            <H5>
              <b>CONVERSATIONS:</b> statistics for the last 30 days
            </H5>
            {data?.conversationsStatistics.conversations_per_day
              ? getCharts(
                  data?.conversationsStatistics.conversations_per_day,
                  "count",
                  "date",
                  "#40128B",
                  "#6F61C0"
                )
              : null}
            Total number of entries for 30 days:
            <b>
              {" " + data?.conversationsStatistics.conversations_last_month}
            </b>
          </Text>
        </Card>
        <Card width={1} m="lg">
          <Text textAlign="center" style={{ marginBottom: 0 }}>
            <H5>
              <b>MESSAGES:</b> statistics for the last 30 days
            </H5>
            {data?.messagesStatistics.messages_per_day
              ? getCharts(
                  data?.messagesStatistics.messages_per_day,
                  "count",
                  "date",
                  "#B31312",
                  "#F86F03"
                )
              : null}
            Total number of entries for 30 days:
            <b>{" " + data?.messagesStatistics.messages_last_month}</b>
          </Text>
        </Card>
      </Box>
    </Box>
  );
}
