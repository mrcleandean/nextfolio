"use client";
import { Navbar, Projects, About, Techs, Contact, AudioPlayer, Hero, SectionWrapper, Education } from "@/components/portfolio";
import { useState, useCallback, useEffect } from "react";
import { Loader } from '@/components/shared'
import { useDebouncedCallback } from "use-debounce";
export default function Home() {
  const [loadingStates, setLoadingStates] = useState({
    buddha: true,
    raygun: true,
    ball0: true,
    ball1: true,
    ball2: true,
    ball3: true,
    ball4: true,
    ball5: true,
    ball6: true,
    ball7: true,
    ball8: true,
    ball9: true,
    ball10: true,
    ball11: true,
    ball12: true
  });
  const [entered, setEntered] = useState(false);
  const setLoadingState = useCallback((canvasId: string, isLoading: boolean) => {
    setLoadingStates(prevStates => ({ ...prevStates, [canvasId]: isLoading }));
  }, []);
  const globalLoading = Object.values(loadingStates).some(isLoading => isLoading);
  const debouncedHandleResize = useDebouncedCallback(() => {
    const zoomLevel = window.outerWidth / window.innerWidth;
    if (zoomLevel !== 1) {
      alert('For the best viewing experience, please press Ctrl+0 (Windows) or Command+0 (Mac) to set your zoom level to 100%.')
    }
  }, 450);
  useEffect(() => {
    debouncedHandleResize();
    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
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


