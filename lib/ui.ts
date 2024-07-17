import { createSystem } from "frog/ui";

export const { Box, Image, Icon, Text, VStack, Spacer, vars } = createSystem({
  colors: {
    bg: "rgb(255,255,255)",
    white: "rgb(245,254,255)",
    black: "rgb(32,32,32)",
    grey: "rgb(131,131,131)",
    blue: "rgb(68,137,255)"
  },
  fonts: {
    default: [
      {
        name: "Poppins",
        source: "google",
        weight: 400,
      },
      {
        name: "Poppins",
        source: "google",
        weight: 600,
      },
    ],
  },
});