import './App.css';
import AutoReadText from './components/AutoReadText';
import { description } from './constants/auto';
import MainText from './components/MainText';
import Layout from './layouts/Layout';
import Card from './components/EsplaiCard';
import Navbar from './components/navbar';
import CardsWrapper from './components/CardsWrapper';
import PersonalLogo from './components/PersonalLogo';

function App() {
  // const [activeSection, setActiveSection] = useState('home');

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     { threshold: 0.6 } // Trigger when 60% of the section is visible
  //   );

  //   sections.forEach(({ id }) => {
  //     const section = document.getElementById(id);
  //     if (section) observer.observe(section);
  //   });

  //   return () => observer.disconnect();
  // }, []);

  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <Layout>
      {/* <PersonalLogo /> */}
      <Navbar />
      <MainText />
      <CardsWrapper />

      <AutoReadText text={description} />
    </Layout>
  );
}

export default App;
