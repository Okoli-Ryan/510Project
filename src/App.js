import "./App.css";

import { useState, useRef } from "react";
import { data } from "./data";
import { Dropdown } from "semantic-ui-react";

const normalize = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
};

function App() {
  const [selected, setSelected] = useState(null);
  const selectValue = useRef({});

  const getTranslate = (value) => {
    let a = data.filter((item) => {
      if (item.value === value) return item;
      return false;
    });
    selectValue.current = a[0];
    setSelected(value);
    return a;
  };

  return (
    <div className="App">
      <div className="app_container">
        <header className="header">
          <h3>Encyclopaedia for Household Items</h3>
        </header>
        <section className="section-drop">
          <Dropdown
            placeholder="Select Item"
            fluid
            search={(options, value) => {
              return options.filter((item) =>
                normalize(item.text).startsWith(value.toLowerCase())
              );
            }}
            selection
            onChange={(l, { value }) => getTranslate(value)}
            options={data}
          />
        </section>
        <section className="data-containerX">
          {selected !== null && (
            <>
              <h2 className="text">
                Searched Text: {selectValue.current.text}
              </h2>
              <h2 className="translate">
                Translation in Yoruba: {selectValue.current.translateYor}
              </h2>
              <h2
                dangerouslySetInnerHTML={{
                  __html: `Yoruba transcription: ${normalize(
                    selectValue.current.transcribeYor
                  )}`,
                }}></h2>
              <h2 className="translate">
                Translation in Igbo: {selectValue.current.translateIgb}
              </h2>
              <h2
                dangerouslySetInnerHTML={{
                  __html: `Igbo transcription: ${normalize(
                    selectValue.current.transcribeIgb
                  )}`,
                }}></h2>
              <h2 className="translate">
                Translation in Hausa: {selectValue.current.translateHau}
              </h2>
              <h2
                dangerouslySetInnerHTML={{
                  __html: `Hausa transcription: ${normalize(
                    selectValue.current.transcribeHau
                  )}`,
                }}></h2>
            </>
          )}
          {selected && (
            <div>
              <div className="image">
                <img src={selectValue.current.image} alt="" />
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
