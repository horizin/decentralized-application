/* --- Global --- */
import {ThemeProvider} from 'theme-ui';

/* --- Local --- */
import theme from '@assets/theme';

/* --- Component --- */
export default props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
