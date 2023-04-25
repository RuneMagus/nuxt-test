export default {
  breakpoints: {
    tablet: 1024,
    desktop: 1280,
  },
  colors: {
    primary: {
      black: "#000",
      white: "#fff",
      red: "#E63228",
    },
    secondary: {
      darkGrey: "#555",
      midGreyBlack: "#979797",
      midGreyWhite: "#757575",
      lightGrey: "#DADADA",
      green: "#698532",
      lightRed: "#EA515B",
      blue: "#1E76C8",
    },
    notice: {
      error: "#C22A22",
      alert: "#EC8F39",
      success: "#29A01E",
    },
  },
  effects: {
    shadows: {
      medium: "0px 4px 24px rgba(0, 0, 0, 0.16)",
      large: "0px 4px 64px rgba(0, 0, 0, 0.12)",
    },
    gradient: {
      "horiz-white-0-100":
        "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
      "horiz-white-100-0":
        "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
      "vert-white-0-100":
        "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
      "vert-white-100-0":
        "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
      "horiz-black-0-100":
        "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
      "horiz-black-100-0":
        "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
      "vert-black-0-100":
        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
      "vert-black-100-0":
        "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
    },
  },
  sizing: {
    8: "0.5rem",
    16: "1rem",
    24: "1.5rem",
    32: "2rem",
    40: "2.5rem",
    48: "3rem",
    56: "3.5rem",
    64: "4rem",
    72: "4.5rem",
    80: "5rem",
    88: "5.5rem",
    96: "6rem",
  },
  text: {
    body: {
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      20: "1.25rem",
      28: "1.75rem",
    },
    heading: {
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
      56: "3.5rem",
      72: "4.5rem",
      104: "6.5rem",
    },
    lineHeight: {
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
      56: "3.5rem",
      64: "4rem",
      88: "5.5rem",
      120: "7.5rem",
    },
  },
};
