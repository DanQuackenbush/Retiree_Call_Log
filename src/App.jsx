import Header from './Header.jsx';
import ClickMeButton from './ClickMeButton.jsx';
import Footer from './Footer.jsx'
import Food from './Food.jsx';

function App() {
  return (
    <>
      <Header />
      <ClickMeButton />
      <Food />
      <Footer />
    </>
  );
}

/*function displaySwitch(res){
  switch(res){
    case -1:
      return "negative one";
    case 0:
      return "zero";
    case 1:
      return "one";
    default:
      return "unknown value";
  }
}

console.log(displaySwitch(1));
*/


export default App;