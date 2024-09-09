import css from './App.module.css';
import NavBarChild from './components/NavBarChild';
import NavBarForm from './components/NavBarForm';
import NavBarSimple from './components/NavBarSimple';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import ControlledForm from './components/ControlledForm';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      <Content /> 
      <NavBarChild />
      <NavBarForm />
      <NavBarSimple />
      <ControlledForm />
    </div>
  );
}

export default App;