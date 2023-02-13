import React from "react";
import './css/App.css'

export function Navigation() {
  return <nav>Navigation</nav>;
}

export function SubNav(){
  return <div className="subnav">Logo and mob number</div>
}

export function MainNav(){
  return <div className="mainNav">Nav items</div>
}

export const Slider = () => {
  return <div className="slider">Slider</div>
}
export const Media = () => {
  return(
    <div className="media">Media section</div>
  )
}
export const Poll = () => {
  return <div className="poll">Poll & Calendar section</div>
};
export const Weather = () => {
  return <div className="weather">Weather section</div>
};
export const Footer = () => {
  return <footer>Footer section</footer>
};



const App = () => {
  return (
    <>
      <Navigation />
      <SubNav/>
      <MainNav/>
      <Slider/>
      <Media/>
      <Poll/>
      <Weather/>
      <Footer/>
    </>
  );
};
React.PureComponent(App)

export default App;
