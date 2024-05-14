"use client";
import { Navbar, Projects, About, Techs, Contact, AudioPlayer, Hero, SectionWrapper, Education, Loader } from "@/components/portfolio";
import { useState, useCallback, useEffect } from "react";

export default function Home() {
  const [loadingStates, setLoadingStates] = useState({
    buddha: true,
    raygun: true,
    ball: true
  });
  const [entered, setEntered] = useState(false);
  const setLoadingState = useCallback((canvasId: string, isLoading: boolean) => {
    setLoadingStates(prevStates => ({ ...prevStates, [canvasId]: isLoading }));
  }, []);
  const globalLoading = Object.values(loadingStates).some(isLoading => isLoading);
  const handleResize = () => {
    const zoomLevel = window.outerWidth / window.innerWidth;
    if (zoomLevel !== 1) {
      alert('For the best viewing experience, please press Ctrl+0 (Windows) or Command+0 (Mac) to set your zoom level to 100%.')
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize, { once: true });
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  return (
    <>
      <div className={`${entered ? '' : 'pointer-events-none h-screen overflow-hidden'}`}>
        <AudioPlayer entered={entered} />
        <Navbar />
        <Hero id="buddha" setLoadingState={setLoadingState} />
        <SectionWrapper idName="projects">
          <Projects />
        </SectionWrapper>
        <SectionWrapper idName="about">
          <About />
        </SectionWrapper>
        <SectionWrapper idName="education">
          <Education />
        </SectionWrapper>
        <SectionWrapper idName="technologies">
          <Techs id="ball" setLoadingState={setLoadingState} /> {/* Concats index of ball canvas to ball id */}
        </SectionWrapper>
        <SectionWrapper idName="contact">
          <Contact id="raygun" setLoadingState={setLoadingState} />
        </SectionWrapper>
      </div>
      <Loader
        globalLoading={globalLoading}
        entered={entered}
        setEntered={setEntered}
        letters={['C', 'L', 'E', 'A', 'N', ' ', 'D', 'E', 'A', 'N']}
        subTitle={'Dev Portfolio'}
      />
    </>
  );
}


