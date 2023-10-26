import React, { useEffect, useState } from "react";
import { Box, H2, H5, Illustration, Text } from "@adminjs/design-system";
import { styled } from "@adminjs/design-system/styled-components";
import { ApiClient, useTranslation } from "adminjs";
import {
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  LabelList,
} from "recharts";

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
    if (!data) {
      return "";
    }

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
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 0 }}
        >
          <defs>
            <linearGradient
              id={`colorUv${gradientColor}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor={gradientColor} stopOpacity={0.7} />
              <stop offset="95%" stopColor={gradientColor} stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey={name} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={value}
            stroke={lineColor}
            fillOpacity={1}
            fill={`url(#colorUv${gradientColor})`}
          >
            <LabelList dataKey={value} content={renderCustomizedLabel} />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
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
        {/* <Box width={[1, 1, 1 / 2]} p="lg">
          <Card flex>
            <Box flexShrink={0}>
              <Illustration variant="SlackLogo" />
            </Box>
            <Box ml="xl">
              <H5>{"community_title"}</H5>
              <Text>{"community_subtitle"}</Text>
            </Box>
          </Card>
        </Box>
        <Box width={[1, 1, 1 / 2]} p="lg">
          <Card flex>
            <Box flexShrink={0}>
              <Illustration variant="GithubLogo" />
            </Box>
            <Box ml="xl">
              <H5>{"foundBug_title"}</H5>
              <Text>{"foundBug_subtitle"}</Text>
            </Box>
          </Card>
        </Box> */}
        <Card width={1} m="lg">
          <Text textAlign="center">
            <H5>
              <b>USERS:</b> general statistics
            </H5>
            <Text>Total: {data?.usersStatistics.users_total}</Text>
            <Text>last_month: {data?.usersStatistics.users_last_month}</Text>
          </Text>
        </Card>
        <Card width={1} m="lg">
          <Text textAlign="center">
            <H5>
              <b>USERS:</b> statistics for the last 30 days
            </H5>
            {getCharts(
              data?.usersStatistics.users_per_day,
              "count",
              "date",
              "#0802A3",
              "#3085C3"
            )}
          </Text>
        </Card>
        <Card width={1} m="lg">
          <Text textAlign="center">
            <H5>
              <b>USERS:</b> statistics for all time
            </H5>
            {getCharts(
              data?.usersStatistics.users_per_month,
              "count",
              "date",
              "#0802A3",
              "#3085C3"
            )}
          </Text>
        </Card>
        <Card width={1} m="lg">
          <Text textAlign="center">
            <H5>
              <b>CONVERSATIONS:</b> general statistics
            </H5>
            <Text>
              Total: {data?.conversationsStatistics.conversations_total}
            </Text>
            <Text>
              last_month:{" "}
              {data?.conversationsStatistics.conversations_last_month}
            </Text>
          </Text>
        </Card>
        <Card width={1} m="lg">
          <Text textAlign="center">
            <H5>
              <b>CONVERSATIONS:</b> statistics for the last 30 days
            </H5>
            {getCharts(
              data?.conversationsStatistics.conversations_per_day,
              "count",
              "date",
              "#40128B",
              "#6F61C0"
            )}
          </Text>
        </Card>
        <Card width={1} m="lg">
          <Text textAlign="center">
            <H5>
              <b>MESSAGES:</b> general statistics
            </H5>
            <Text>Total: {data?.messagesStatistics.messages_total}</Text>
            <Text>
              last_month: {data?.messagesStatistics.messages_last_month}
            </Text>
          </Text>
        </Card>
        <Card width={1} m="lg">
          <Text textAlign="center">
            <H5>
              <b>MESSAGES:</b> statistics for the last 30 days
            </H5>
            {getCharts(
              data?.messagesStatistics.messages_per_day,
              "count",
              "date",
              "#B31312",
              "#F86F03"
            )}
          </Text>
        </Card>
      </Box>
    </Box>
  );
}
