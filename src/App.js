import { Box, useMediaQuery, useTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./Header";
import ProfileSection from "./ProfileSection";
import Place from "./Place";
import Dresscode from "./Dresscode";
import Gifts from "./Gifts";
import Giftsok from "./Giftsok";
import Notes from "./Notes";

// Создаем тему с кастомными цветами
const theme = createTheme({
  typography: {
    fontFamily: "'Caveat', 'Dancing Script', cursive",
    // Основные варианты текста с рукописными шрифтами
    h1: {
      fontFamily: "'Dancing Script', cursive",
      fontWeight: 700,
      fontSize: "4rem",
      letterSpacing: "0.5px",
    },
    h2: {
      fontFamily: "'Dancing Script', cursive",
      fontWeight: 600,
      fontSize: "3rem",
    },
    h3: {
      fontFamily: "'Dancing Script', cursive",
      fontWeight: 500,
      fontSize: "2.5rem",
    },
    h4: {
      fontFamily: "'Caveat', cursive",
      fontWeight: 500,
      fontSize: "2rem",
    },
    h5: {
      fontFamily: "'Caveat', cursive",
      fontWeight: 400,
      fontSize: "1.75rem",
    },
    h6: {
      fontFamily: "'Caveat', cursive",
      fontWeight: 400,
      fontSize: "1.5rem",
    },
    subtitle1: {
      fontFamily: "'Caveat', cursive",
      fontSize: "1.3rem",
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: "'Jura', sans-serif",
      fontSize: "1.1rem",
      fontWeight: 300,
    },
    body1: {
      fontFamily: "'Jura', sans-serif",
      fontSize: "1rem",
      fontWeight: 300,
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: "'Jura', sans-serif",
      fontSize: "0.875rem",
      fontWeight: 300,
    },
    button: {
      fontFamily: "'Caveat', cursive",
      fontSize: "1.3rem",
      fontWeight: 500,
      textTransform: "none",
    },
    caption: {
      fontFamily: "'Jura', sans-serif",
      fontSize: "0.75rem",
    },
    overline: {
      fontFamily: "'Jura', sans-serif",
      fontSize: "0.75rem",
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: "#FFB6C1",
      light: "#FFE4EC",
      dark: "#FF91A4",
      contrastText: "#5D4037",
    },
    secondary: {
      main: "#F8C8DC",
      light: "#FCE4EC",
      dark: "#F4A6C1",
      contrastText: "#5D4037",
    },
    background: {
      default: "#FFF9FB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#9b766b",
      secondary: "#8D6E63",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          padding: "8px 24px",
        },
        containedPrimary: {
          background: "linear-gradient(45deg, #FFB6C1 30%, #F8C8DC 90%)",
          boxShadow: "0 3px 5px 2px rgba(255, 182, 193, .3)",
          "&:hover": {
            background: "linear-gradient(45deg, #FF91A4 30%, #F4A6C1 90%)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(45deg, #E6E6FA 30%, #B5EAD7 90%)",
          boxShadow: "0 3px 5px 2px rgba(230, 230, 250, .3)",
          "&:hover": {
            background: "linear-gradient(45deg, #D8BFD8 30%, #A7E4C7 90%)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "0 4px 12px rgba(255, 182, 193, 0.15)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
  },
});

function App() {
  return (
    // Теперь ThemeProvider получает корректную тему
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveBox />
    </ThemeProvider>
  );
}

// Выносим логику с медиа-запросами в отдельный компонент
function ResponsiveBox() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box width={"100%"}>
      <ProfileSection />
      <Place/>
      <Dresscode/>
      <Gifts/>
      <Giftsok/>
      <Notes/>
    </Box>
  );
}

export default App;