const reactDescriptions = ["Fundamental", "Crucial", "Core"];
const imageSrc = "src/assets/react-core-concepts.png";
const compImages = "src/assets/components.png";

function getRandomInt(max) {
  /*
    Math.floor()
    Metode Math.floor() statis selalu membulatkan ke bawah 
    dan mengembalikan bilangan bulat terbesar yang kurang 
    dari atau sama dengan angka yang diberikan.
  */
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src={imageSrc} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts 
              title="Components"
              description="-"
              image={compImages}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
