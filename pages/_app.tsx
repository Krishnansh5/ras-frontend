import React from "react";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import { NotificationsProvider } from "@mantine/notifications";
import { ThemeProvider } from "@mui/material";

import theme from "@components/theme/theme";
import LayoutWrapper from "@components/Layouts/LayoutWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationsProvider position="top-right" zIndex={2077}>
      <ThemeProvider theme={theme}>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </NotificationsProvider>
  );
}

export default MyApp;
