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
        <Box width={[1, 1, 1 / 2]} p="lg">
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
        </Box>
        {/* <Card width={1} m="lg">
          <Text textAlign="center">
            <Illustration variant="AdminJSLogo" />
            <H5>{"needMoreSolutions_title"}</H5>
            <Text>{"needMoreSolutions_subtitle"}</Text>
            <Text mt="xxl">
              <Button
                as="a"
                variant="contained"
                href="https://share.hsforms.com/1IedvmEz6RH2orhcL6g2UHA8oc5a"
                target="_blank"
              >
                {"contactUs"}
              </Button>
            </Text>
          </Text>
        </Card>
        <Card width={1} m="lg">
          <Card>
            <Box flexShrink={0}>
              <Illustration variant="GithubLogo" />
            </Box>
            <Box ml="xl">
              <H5>{"foundBug_title"}</H5>
              <Text>{"foundBug_subtitle"}</Text>
            </Box>
          </Card>
        </Card> */}
      </Box>
    </Box>
  );
}
