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
        {
          props: { variant: "nav-link" },
          style: {
            color: "#000000",
            textDecoration: "none",
          },
        },
      ],
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#E9E9E9",
            "&:hover": {
              backgroundColor: "#E9E9E9"
            }
          },
        },
      },
    }
  },
  palette: {
    primary: {
      main: "#6C63FF"
    },
    secondary: {
      main: "#FFF"
    }
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
