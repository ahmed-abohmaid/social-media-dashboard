import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full h-screen bg-white dark:bg-dark relative z-10 before:absolute before:bg-lightTheme-pattern before:dark:bg-darkTheme-pattern before:rounded-bl-3xl before:rounded-br-3xl before:w-full before:h-44 before:z-0">
      <div className="pt-7 px-24 relative">
        <Header />
        <Cards />
      </div>
      <div className="attribution mt-5">
        <span className="text-light-darkBlue dark:text-white">
          Challenge by
        </span>{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          <span className="text-blue-400">Frontend Mentor</span>
        </a>
        . <span className="text-light-darkBlue dark:text-white">Coded by</span>{" "}
        <a
          href="https://github.com/Ahmed-AboHmaiD"
          rel="noreferrer"
          target="_blank"
        >
          <span className="text-blue-400">Ahmed Ramadan (AboHmaiD)</span>
        </a>
        .
      </div>
    </div>
  );
}

export default App;
