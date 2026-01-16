"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TypeAnimation() {
  const povRef = useRef<HTMLDivElement>(null);
  const trayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trayRef.current) return;

    gsap.set(".pov", { opacity: 0, visibility: "hidden" });
    gsap.set(".tray", { opacity: 0 });
    gsap.set(".die", { opacity: 0 });
    gsap.set(".face", { opacity: 0 });

    const isTablet = window.innerWidth > 480 && window.innerWidth <= 768;
    
    const n = isTablet ? 25 : 40;
    const spacing = isTablet ? 38 : 56;
    
    const rots = [
      { ry: 270, a: 0.6 },
      { ry: 0, a: 0.85 },
      { ry: 90, a: 0.5 },
      { ry: 180, a: 0.35 },
    ];

    const zDepth = isTablet ? 140 : 180;
    const originDepth = isTablet ? -100 : -161;
    
    gsap.set(".face", {
      z: zDepth,
      rotateY: (i) => rots[i].ry,
      transformOrigin: `50% 50% ${originDepth}px`,
      opacity: 0,
    });

    for (let i = 0; i < n; i++) {
      let die = document.querySelector(".die") as HTMLElement;
      let cube = die?.querySelector(".cube") as HTMLElement;

      if (i > 0) {
        let clone = document.querySelector(".die")?.cloneNode(true) as HTMLElement;
        document.querySelector(".tray")?.append(clone);
        cube = clone.querySelector(".cube") as HTMLElement;
      }

      gsap
        .timeline({ repeat: -1, yoyo: true, defaults: { ease: "power3.inOut", duration: 2.5 } })
        .fromTo(
          cube,
          {
            rotateY: -90,
          },
          {
            rotateY: 90,
            ease: "power1.inOut",
            duration: 5,
          }
        )
        .fromTo(
          cube.querySelectorAll(".face"),
          {
            color: (j) =>
              `hsl(0, 0%, ${100 * [rots[3].a, rots[0].a, rots[1].a][j]}%)`,
          },
          {
            color: (j) =>
              `hsl(0, 0%, ${100 * [rots[0].a, rots[1].a, rots[2].a][j]}%)`,
          },
          0
        )
        .to(
          cube.querySelectorAll(".face"),
          {
            color: (j) =>
              `hsl(0, 0%, ${100 * [rots[1].a, rots[2].a, rots[3].a][j]}%)`,
          },
          1
        )
        .progress(i / n);
    }

    const h = n * spacing;
    gsap.set(".tray", { height: h, opacity: 0 });
    gsap.set(".pov", { x: 500 });

    setTimeout(() => {
      gsap.set(".pov", { visibility: "visible" });
      gsap.to(".pov", { 
        opacity: 1, 
        x: 0,
        duration: 0.7, 
        ease: "power2.out" 
      });
      gsap.to(".tray", { opacity: 1, duration: 0.6, ease: "power2.out" });
      gsap.to(".die", { opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.02 });
      gsap.to(".face", { opacity: 1, duration: 0.6, ease: "power2.out" });
    }, 300);

    const scale = isTablet ? 1.0 : 1.2;
    
    gsap
      .timeline({ delay: 1.5 })
      .from(".tray", { yPercent: -3, duration: 4, ease: "power1.inOut", yoyo: true, repeat: -1 }, 0)
      .fromTo(
        ".tray",
        { rotate: -15 },
        { rotate: 15, duration: 8, ease: "power1.inOut", yoyo: true, repeat: -1 },
        0
      )
      .to(".tray", { scale: scale, duration: 4, ease: "power3.inOut", yoyo: true, repeat: -1 }, 0);
  }, []);

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap");

        .pov {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .die {
          width: 400px;
          height: 55px;
          padding-bottom: 9px;
          perspective: 999px;
        }

        .cube {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: hidden;
          font-family: "Montserrat", sans-serif;
          font-optical-sizing: auto;
          font-weight: 900;
          font-style: normal;
        }

        .back {
          justify-content: flex-start !important;
          padding-left: 45px;
        }

        @media (max-width: 920px) {
          .pov {
            display: none !important;
          }
        }
      `}</style>

      <div className="pov fixed 2xl:-right-210  xl:-right-180 -right-120 lg:-right-150 -top-40 -rotate-30 z-1" ref={povRef}>
        <div className="tray" ref={trayRef}>
          <div className="die">
            <div className="cube">
              <div className="face" style={{ fontSize: "50px" }}>
                FULL STACK
              </div>
              <div className="face" style={{ fontSize: "50px" }}>
                FRONTEND
              </div>
              <div className="face back" style={{ fontSize: "50px" }}>
                BACKEND
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
