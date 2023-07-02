"use client"
import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "@/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function ThemeContext({children}: {children: React.ReactNode}) {
    const theme = useMemo(() => createTheme(themeSettings), []);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}