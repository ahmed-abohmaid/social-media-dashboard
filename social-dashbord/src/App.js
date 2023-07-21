import MainCrads from "./components/MianCards";
import Header from "./components/Header";
import OverviewCards from "./components/OverviewCards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative z-10 before:absolute before:bg-lightTheme-pattern before:dark:bg-darkTheme-pattern before:rounded-bl-3xl before:rounded-br-3xl before:w-full before:h-44 before:z-0">
      <div className="pt-7 px-6 sm:px-16 md:px-24 relative">
        <Header />
        <MainCrads />
        <OverviewCards />
        <Footer />
      </div>
    </div>
  );
}

export default App;
