import Header from "./components/Header";

function App() {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-dark">
      <div className="pt-5 px-14 dark:bg-pattern dark:rounded-bl-3xl dark:rounded-br-3xl">
        <Header />
      </div>
      <div className="attribution mt-5"> 
          <span className="text-light-darkBlue dark:text-white">Challenge by</span>{" "}
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
