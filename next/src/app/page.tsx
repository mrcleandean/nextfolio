"use client";
import { Navbar, Projects, About, Techs, Contact, AudioPlayer, Hero, SectionWrapper, Education, Loader, Demos, LocalLoader } from "@/components/portfolio";
import { Preload, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect, useRef } from "react";
import { ReactLenis } from '@studio-freight/react-lenis';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [entered, setEntered] = useState(false);
  const handleResize = () => {
    const zoomLevel = window.outerWidth / window.innerWidth;
    if (zoomLevel !== 1) {
      alert('For the best viewing experience, please press Ctrl+0 (Windows) or Command+0 (Mac) to set your zoom level to 100%.')
    }
  };
  const viewsRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    window.addEventListener('resize', handleResize, { once: true });
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  return (
    <ReactLenis
      root
      options={{
        syncTouch: true
      }}
    >
      <div ref={viewsRef} className="absolute h-full w-full">
        <AudioPlayer />
        <Navbar />
        <Hero />
        <SectionWrapper idName="projects">
          <Projects />
        </SectionWrapper>
        <SectionWrapper>
          <Demos />
        </SectionWrapper>
        <SectionWrapper idName="about">
          <About />
        </SectionWrapper>
        <SectionWrapper idName="education">
          <Education />
        </SectionWrapper>
        <SectionWrapper idName="technologies">
          <Techs />
        </SectionWrapper>
        <SectionWrapper idName="contact">
          <Contact />
        </SectionWrapper>
        <Canvas
          frameloop="always"
          eventSource={viewsRef}
          className="!fixed inset-0 z-10"
          gl={{
            antialias: true,
            alpha: true,
          }}
        >
          <View.Port />
          <Preload all />
        </Canvas>
        <LocalLoader setIsLoading={setIsLoading} />
      </div>
      <Loader
        isLoading={isLoading}
        entered={entered}
        setEntered={setEntered}
        letters={['C', 'L', 'E', 'A', 'N', ' ', 'D', 'E', 'A', 'N']}
        subTitle={'Dev Portfolio'}
      />
    </ReactLenis>
  );
}


