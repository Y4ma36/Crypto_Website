const colors = {
  black: "#2f3640",
  white: "#f5f6fa",
};

const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1280px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
  desktop: `screen and (max-width: ${deviceSizes.desktop})`,
};

export const theme = {
  colors,
  device,
};
