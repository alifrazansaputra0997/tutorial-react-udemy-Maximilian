import { useState } from "react";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton/TabButton";
import { EXAMPLES } from "./data-with-example";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Plase select a topic</p>;

  function onClick(tabInfo) {
    setSelectedTopic(tabInfo);
  }

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].decsription}</p>
        <pre>{EXAMPLES[selectedTopic].code}</pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
            isSelected={selectedTopic === "components"}
            onClick={() => onClick("components")}>
              Components
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === "jsx"}
            onClick={() => onClick("jsx")}>JSX</TabButton>
            <TabButton 
            isSelected={selectedTopic === "props"}
            onClick={() => onClick("props")}>Props</TabButton>
            <TabButton 
            isSelected={selectedTopic === "state"}
            onClick={() => onClick("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
