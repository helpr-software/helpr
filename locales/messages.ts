import en_navigation from "./en/navigation.json";
import fr_navigation from "./fr/navigation.json";

import en_home from "./en/home.json";
import fr_home from "./fr/home.json";

import en_pricing from "./en/premium.json";
import fr_pricing from "./fr/premium.json";

import en_integrations from "./en/integrations.json";
import fr_integrations from "./fr/integrations.json";

import en_team from "./en/team.json";
import fr_team from "./fr/team.json";

import en_contact from "./en/contact.json";
import fr_contact from "./fr/contact.json";

import en_login from "./en/auth/login.json";
import fr_login from "./fr/auth/login.json";

import en_signup from "./en/auth/signup.json";
import fr_signup from "./fr/auth/signup.json";

const messages = {
  en: {
    navigation: en_navigation,
    home: en_home,
    pricing: en_pricing,
    integrations: en_integrations,
    team: en_team,
    contact: en_contact,
    login: en_login,
    signup: en_signup,
  },
  fr: {
    navigation: fr_navigation,
    home: fr_home,
    pricing: fr_pricing,
    integrations: fr_integrations,
    team: fr_team,
    contact: fr_contact,
    login: fr_login,
    signup: fr_signup,
  },
};

export default messages;
