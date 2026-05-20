"use client";

import { ThemeProvider } from "next-themes";

const NextThemProviders = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
    );
};

export default NextThemProviders;