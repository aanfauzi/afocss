const converted = {
  body: {
    alignItems: "center",
    background: "#E3E3E3",
    display: "flex",
    height: "100vh",
    justifyContent: "center"
  },
  "@mixin white-gradient": {
    background:
      "linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)"
  },
  $animationspeed: "40s",
  "// Animation\n@keyframes scroll": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(calc(-250px * 7))" }
  },
  "// Styling\n.slider": {
    background: "white",
    boxShadow: "0 10px 20px -5px rgba(0, 0, 0, .125)",
    height: "100px",
    margin: "auto",
    overflow: "hidden",
    position: "relative",
    width: "960px",
    "&::before,\n\t&::after": {
      "@include white-gradient": true,
      content: '""',
      height: "100px",
      position: "absolute",
      width: "200px",
      zIndex: 2
    },
    "&::after": { right: "0", top: "0", transform: "rotateZ(180deg)" },
    "&::before": { left: "0", top: "0" },
    ".slide-track": {
      animation: "scroll $animationSpeed linear infinite",
      display: "flex",
      width: "calc(250px * 14)"
    },
    ".slide": { height: "100px", width: "250px" }
  }
}
