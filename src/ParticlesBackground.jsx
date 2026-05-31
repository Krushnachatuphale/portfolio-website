import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#050816",
          },
        },

        fpsLimit: 120,

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },

          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.5,
              },
            },
          },
        },

        particles: {
          color: {
            value: "#3b82f6",
          },

          links: {
            color: "#3b82f6",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },

          collisions: {
            enable: false,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },

          number: {
            density: {
              enable: true,
            },
            value: 70,
          },

          opacity: {
            value: 0.3,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: { min: 1, max: 5 },
          },
        },

        detectRetina: true,
      }}
    />
  );
}