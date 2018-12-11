import Typography from "typography"
import githubTheme from "typography-theme-github"
import overrideThemeStyles from "typography"

const custom = githubTheme.overrideThemeStyles = () => ({
  baseFontSize: '18px',
  baseLineHeight: '1.6',
  'h': {
    fontFamily: 'Varela Round',
  },
  'body': {
    fontFamily: 'Open Sans',
  }
});

const typography = new Typography(custom);

export default typography
