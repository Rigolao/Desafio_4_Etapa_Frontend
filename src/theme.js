import { createTheme } from "@mui/material";

let theme = createTheme();
export default theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          textAlign: "center",
        },
      },
      variants: [
        {
          props: { variant: "ancora" },
          style: {
            color: "#6C63FF",
            fontSize: "12px",
            textDecoration: "none",
          },
        },
      ],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
