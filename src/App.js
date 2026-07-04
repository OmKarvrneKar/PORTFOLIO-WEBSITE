import { Scene } from './canvas/Scene';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useMouse } from './hooks/useMouse';
import { useStore } from './store/useStore';

function AppInner() {
  useScrollProgress();
  useMouse();
  const webglAvailable = useStore((s) => s.webglAvailable);

  return (
    <>
      <div id="canvas-container">
        <Scene />
      </div>

      {!webglAvailable && (
        <div className="no-webgl-notice">WebGL unavailable — 3D disabled</div>
      )}

      <div id="page-content">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <footer>
          <p>Designed &amp; built by <span>Omkar Vernekar</span> &middot; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  );
}

export default function App() {
  return <AppInner />;
}
