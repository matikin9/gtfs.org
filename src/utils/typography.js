import Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"

fairyGatesTheme.overrideThemeStyles = ({ rhythm }, options ) => ({
  // 'a': {
  //   textShadow: 'none',
  //   color: '#61b5d9',
  //   textDecoration: 'none'
  // }
});

const typography = new Typography(fairyGatesTheme)

export default typography
