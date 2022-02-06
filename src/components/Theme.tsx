import {
  createBox,
  createText,
  useTheme as useReTheme,
  ThemeProvider as ReStyleThemeProvider
} from "@shopify/restyle";


const theme  = {
  colors: {
      primary: "#2CB9B0",
      secondary: "#0C0D34",
      danger: "#FF0058",
      text: "rgba(12, 13, 52, 0.7)",
      white: "white",
      grey: "#F4F0EF",
      darkGrey: "#8A8D90",
      primaryLight: "#E7F9F7",
      orange:"#FE5E33",
      yellow:"#FFC641",
      pink:"#FF87A2",
      violet:"#442CB9",
      lightBlue:"#BFEAF5",
      lightGrey: "#FAFAFA",
      white2: '#ffffff',
      black: '#000000',
      green: '#00AC76',
      red: '#C04345',
      blue: '#0043F9',
      backgroundLight: '#F0F0F3',
      backgroundMedium: '#B9B9B9',
      backgroundDark: '#777777',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
        fontsize: 80,
        lineHeight: 80,
        fontFamily: "SFProDisplay-Bold",
        color: "white",
        textAlign: "center",
    },
    title1: {
        fontsize: 28,
        fontFamily: "SFProDisplay-Semibold",
        color: "secondary"
    },
    title2: {
        fontSize: 24,
        lineHeight: 30,
        fontFamily: "SFProDisplay-Semibold",
        color: "secondary",
      },
      body: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "SFProDisplay-Regular",
        color: "text",
      },
      button: {
        fontSize: 15,
        // lineHeight: 24,
        fontFamily: "SFProDisplay-Medium",
        color: "text",
      },
      header: {
        fontSize: 12,
        fontFamily: "SFProDisplay-Semibold",
        lineHeight: 24,
        color: "secondary",
      }
  
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;