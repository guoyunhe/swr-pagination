import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material';
import { ReactNode, useMemo } from 'react';
import { useDoc } from 'react-doc-ui';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { actualTheme } = useDoc();
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: actualTheme,
        },
      }),
    [actualTheme]
  );
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
