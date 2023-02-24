import { createTheme } from "@mui/material/styles";
// import headerImage from "./Images/PublicImages/image-2.jpg";
// import imageLeft from "./Images/PublicImages/image-4.jpg";
// import imageRight from "./Images/PublicImages/image-1.jpg";
// import lostImage from "./Images/PublicImages/image-3.jpg";

export const mainOpacity = "rgba(0, 0, 0, 0.55)";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0e76a8",
    },
  },
  typography: {
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: "2.5rem",
    },
    h3: {
      fontFamily: "Raleway",
      fontSize: "2.5rem",
    },
    h4: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      lineHeight: 1.5,
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 300,
    },
  },
});

export default theme;

// type CustomTheme = {
//   [Key in keyof typeof theme]: typeof theme[Key];
// };

// declare module "@mui/material/styles" {
//   interface ThemeOptions {
//     [key: string]: any;
//   }
// }

// ,
//   header: {
//     backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${headerImage})`,
//     opacity: `${mainOpacity}`,
//     height: "25em",
//   },
//   darkOverlay: {
//     backgroundColor: "rgba(0, 0, 0, 0.35)",
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//   },
//   colImageLeft: {
//     backgroundImage: `url(${imageLeft})`,
//     height: "25em",
//   },
//   colImageRight: {
//     backgroundImage: `url(${imageRight})`,
//     height: "25em",
//   },
//   lostImage: {
//     backgroundImage: `url(${lostImage})`,
//     height: "25em",
//     width: "720",
//   },
//   bookSize: {
//     width: "480px",
//     height: "384px",
//   },
//   inActiveLink: {
//     pointerEvents: "none",
//     cursor: "default",
//   },
