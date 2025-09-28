import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = (container) => {};

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            position: "fixed",      // covers the whole viewport
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            background:
              "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 50%, #1a1a1a 100%)",
            transition: "opacity 1s ease-in-out",
          }}
          options={{
            background: { color: { value: "transparent" } }, // gradient handled via style
            fullScreen: false,   // we manage size via style
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              number: {
                value: 120,
                density: { enable: true, area: 800 },
              },
              color: {
                // random palette of red/orange/yellow hues
                value: ["#ed2218", "#ff6b35", "#ffb703", "#fb8500"],
              },
              links: {
                color: "#ff6b35",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1.5,
                straight: false,
                parallax: { enable: true, force: 50, smooth: 10 },
              },
              opacity: {
                value: { min: 0.3, max: 0.7 },
                animation: { enable: true, speed: 1, minimumValue: 0.3 },
              },
              size: {
                value: { min: 1, max: 8 },
                animation: { enable: true, speed: 5, minimumValue: 1 },
              },
              shape: { type: "circle" },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}
