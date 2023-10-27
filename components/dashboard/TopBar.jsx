import React from "react";
import { Box, Text, Icon, CurrentUserNav } from "@adminjs/design-system";
import { useSelector } from "react-redux";

const LoggedIn = (props) => {
  const { session, paths } = props;

  const dropActions = [
    {
      label: "logout",
      onClick: (event) => {
        event.preventDefault();
        window.location.href = paths.logoutPath;
      },
      icon: "LogOut",
    },
  ];
  return (
    <Box flexShrink={0} data-css="logged-in">
      <CurrentUserNav
        name={session.email}
        title={session.title}
        avatarUrl={session.avatarUrl}
        dropActions={dropActions}
      />
    </Box>
  );
};

const TopBar = (props) => {
  const { toggleSidebar } = props;
  const session = useSelector((state) => state.session);
  const paths = useSelector((state) => state.paths);

  return (
    <Box data-css="topbar">
      <Box
        py="lg"
        px={["default", "lg"]}
        onClick={toggleSidebar}
        display={["block", "block", "block", "block", "none"]}
        style={{ cursor: "pointer" }}
        data-css="menu"
      >
        <Icon icon="Menu" size={24} />
      </Box>
      <Box data-css="nav-links">
        <Box
          data-css="nav-link"
          onClick={() =>
            window
              .open("https://github.com/SAMA-Communications", "_blank")
              .focus()
          }
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z"
              fill="#000000"
            />
          </svg>
        </Box>
        <Box
          data-css="nav-link"
          onClick={() =>
            window
              .open("https://medium.com/sama-communications", "_blank")
              .focus()
          }
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path
              d="M13 12C13 15.3137 10.3137 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C10.3137 6 13 8.68629 13 12Z"
              fill="#0F0F0F"
            />
            <path
              d="M23 12C23 14.7614 22.5523 17 22 17C21.4477 17 21 14.7614 21 12C21 9.23858 21.4477 7 22 7C22.5523 7 23 9.23858 23 12Z"
              fill="#0F0F0F"
            />
            <path
              d="M17 18C18.6569 18 20 15.3137 20 12C20 8.68629 18.6569 6 17 6C15.3431 6 14 8.68629 14 12C14 15.3137 15.3431 18 17 18Z"
              fill="#0F0F0F"
            />
          </svg>
        </Box>
      </Box>
      {session && session.email ? (
        <LoggedIn session={session} paths={paths} />
      ) : (
        ""
      )}
    </Box>
  );
};

export default TopBar;
