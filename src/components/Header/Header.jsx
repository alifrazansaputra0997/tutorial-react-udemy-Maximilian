const reactDescriptions = ["Fundamental", "Crucial", "Core"];
const imageSrc = "../../src/assets/react-core-concepts.png";
import "./Header.css";

function getRandomInt(max) {
  /*
    Math.floor()
    Metode Math.floor() statis selalu membulatkan ke bawah 
    dan mengembalikan bilangan bulat terbesar yang kurang 
    dari atau sama dengan angka yang diberikan.
  */
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
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
