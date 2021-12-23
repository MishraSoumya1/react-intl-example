import React, { createContext, useState } from "react";
import { IntlProvider } from "react-intl";

export const AppContext = createContext();

const Wrapper = (props) => {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(
    require(`../languages/${locale}.json`)
  );

  const setLang = (selectedLang) => {
    let lang = selectedLang;
    if (selectedLang.length == 0) {
      lang = "en-GB";
    }
    const messages = require(`../languages/${lang}.json`);
    setLocale(lang);
    setMessages(messages);
  };

  return (
    <AppContext.Provider value={{ locale, setLang }}>
      <IntlProvider locale={locale} messages={messages}>
        {props.children}
      </IntlProvider>
    </AppContext.Provider>
  );
};

export default Wrapper;
