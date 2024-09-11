import React from 'react';
import css from './App.module.css';
//import SearchBar from './components/SearchBar';
// Import other components as needed
//import NavBarChild from './components/NavBarChild';
//import NavBarForm from './components/NavBarForm';
//import NavBarSimple from './components/NavBarSimple';
//import Sidebar from "./components/Sidebar";
//import Content from "./components/Content";
//import ControlledForm from './components/ControlledForm';
//import ControlledFormHooks from './components/ControlledFormHooks';
//import UseStateWithArrays from './components/UseStateWithArrays';
//import UseStateWithObjects from './components/UseStateWithObjects';
//import UseEffectCounter from './components/UseEffectCounter';
//import UncontrolledForm from './components/UncontrolledForm';
import ContentHooks from './components/ContentHooks';

function App() {
  return (
    <div className={css.App}>
      {/* Uncomment and use these components as needed */}
      {/*<Sidebar />
      <Content />      
      <NavBarChild />
      <NavBarForm />
      <NavBarSimple />
     <ControlledForm /> 
      <UncontrolledForm />
      < SearchBar /> 
      <ControlledFormHooks />
      <UseStateWithArrays /> 
<UseStateWithObjects /> 
      <UseEffectCounter />*/}
      <ContentHooks />

    </div>
  );
}

export default App;
