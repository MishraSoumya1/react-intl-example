import React, { useContext } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import logo from "./logo.svg";
import "./App.css";
import { FormattedMessage, useIntl } from "react-intl";
import { AppContext } from "./components/Wrapper";

const options = [
  { value: "", label: "Select an option" },
  { value: "en-GB", label: "English" },
  { value: "es-MX", label: "Spanish" },
];
//          <FormattedMessage id="app.content" defaultMessage={`Learn React`} />
function App(props) {
  const { setLang, locale } = useContext(AppContext);
  const defaultOption = options[0];
  const intl = useIntl();
  console.log("Selected locale", locale);
  console.log(intl);
  const learnReact = intl.formatMessage({
    id: "app.content",
    defaultMessage: "Learn React",
  });
  const channelPlug = intl.formatMessage(
    {
      id: "app.channel.plug",
      defaultMessage: "Code written by Soumya",
    },
    { channelName: `Asmita` }
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Dropdown
          options={options}
          onChange={(e) => {
            setLang(e.value);
          }}
          value={defaultOption}
          placeholder="Select an option"
        />
        ;
        <p>
          <FormattedMessage
            id="app.header"
            defaultMessage={`Edit <code>src/App.js</code> and save to reload.`}
            values={{
              fileName: `src/App.js`,
              code: (word) => <code>{word}</code>,
            }}
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {learnReact}
        </a>
        <p>
          {/* <FormattedMessage
            id="app.channel.plug"
            defaultMessage={`Code written by Soumya`}
            values={{ channelName: `Asmita` }}
          /> */}
          {channelPlug}
        </p>
      </header>
    </div>
  );
}

export default App;
