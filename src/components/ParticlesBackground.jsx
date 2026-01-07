import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0" // Asegura que esté detrás del contenido
      options={{
        fullScreen: { enable: false }, // Importante para que respete el contenedor padre
        background: {
          color: {
            value: "transparent", // Transparente para ver tu gradiente de fondo
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // Efecto de conectar líneas al pasar el mouse
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#6366f1", // Color 'Electric' (Indigo-500)
          },
          links: {
            color: "#cbd5e1", // Color 'Slate-300' para las líneas
            distance: 150,
            enable: true,
            opacity: 0.5, // Líneas sutiles
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1, // Velocidad lenta y elegante
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60, // Cantidad de partículas
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;