'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type ISourceOptions } from '@tsparticles/engine';

import { loadSlim } from '@tsparticles/slim';

const ParticlesComponent = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            fpsLimit: 120,
            fullScreen: false,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push',
                    },
                    // onHover: {
                    //     enable: true,
                    //     mode: 'repulse',
                    // },
                },
                modes: {
                    push: {
                        quantity: 1,
                    },
                    repulse: {
                        distance: 100,
                        duration: 2,
                    },
                },
            },
            particles: {
                color: {
                    value: '#ffffff',
                },
                links: {
                    color: '#ffffff',
                    distance: 100,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: {
                        default: 'bounce',
                    },
                    random: true,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.4,
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: { min: 1, max: 4 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    if (init) {
        return <Particles id="tsparticles" className="w-full h-full" options={options} />;
    }

    return <></>;
};

export default ParticlesComponent;
