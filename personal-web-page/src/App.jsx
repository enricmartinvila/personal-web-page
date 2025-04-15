import './App.css';
import AutoReadText from './components/AutoReadText';
import CardsWrapper from './components/CardsWrapper';
import MainText from './components/MainText';
import Navbar from './components/navbar';
import ScrollDownButton from './components/Scrolldown';
import { description } from './constants/auto';
import Layout from './layouts/Layout';
import { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: '' },
    { id: 'cards-targets' },
    { id: 'auto-read' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.target.id, entry.isIntersecting);
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    });

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <ScrollDownButton />
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <MainText />
      <CardsWrapper />
      <AutoReadText text={description} />
    </Layout>
  );
}

export default App;
