import '../src/app/styles/normalize.css';
import '../src/app/styles/vars.css';
import '../src/app/styles/main.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
