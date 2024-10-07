import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Aboutme from "./page/aboutme";
import Skill from "./page/skill";
import Skill1 from "./page/skill1";
import Skill2 from "./page/skill2";
import Footer from "./page/footer";
import ContactForm from "./page/contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Skill1 />  
      <Skill />
      <Skill2 />
      <ContactForm />
      <Footer />
    </>
  );
};


export default App;
