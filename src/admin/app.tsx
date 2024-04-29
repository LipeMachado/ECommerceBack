import Icon from './extensions/Icon.svg'
import Logo from './extensions/Logo.svg'

export default {
  config: {
    auth: { 
      logo: Logo,
    },
    head: {
      favicon: Icon,
    },
    locales: [],
    translations: {
      en: {
        'Auth.form.welcome.title': 'Welcome to Won Games!',
        'Auth.form.welcome.subtitle': 'Log In to your account',
        'app.components.LeftMenu.navbrand.title': 'Won Games Dashboard'
      }
    },
    menu: {
      logo: Icon,
    },
    theme: {
      light: {
        
      },
      dark: {
        colors: {
          primary100: "#030415",
          primary600: "#f231a5",
          primary700: "#f231a5",
          neutral10: "#0d102f",
          neutral100: "#030415"
        }
      },
    }
  },
  bootstrap() {},
};
