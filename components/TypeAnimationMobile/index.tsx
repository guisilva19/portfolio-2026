"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TypeAnimationMobile() {
  const povRef = useRef<HTMLDivElement>(null);
  const trayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trayRef.current) return;

    gsap.set(".pov-mobile", { opacity: 0, visibility: "hidden" });
    gsap.set(".tray-mobile", { opacity: 0 });
    gsap.set(".die-mobile", { opacity: 0 });
    gsap.set(".face-mobile", { opacity: 0 });

    const n = 35;
    const spacing = 24;
    
    const rots = [
      { ry: 270, a: 0.6 },
      { ry: 0, a: 0.85 },
      { ry: 90, a: 0.5 },
      { ry: 180, a: 0.35 },
    ];

    const zDepth = 90;
    const originDepth = -80;
    
    gsap.set(".face-mobile", {
      z: zDepth,
      rotateY: (i) => rots[i].ry,
      transformOrigin: `50% 50% ${originDepth}px`,
      force3D: true,
      opacity: 0,
    });

    for (let i = 0; i < n; i++) {
      let die = document.querySelector(".die-mobile") as HTMLElement;
      let cube = die?.querySelector(".cube-mobile") as HTMLElement;

      if (i > 0) {
        let clone = document.querySelector(".die-mobile")?.cloneNode(true) as HTMLElement;
        document.querySelector(".tray-mobile")?.append(clone);
        cube = clone.querySelector(".cube-mobile") as HTMLElement;
      }

      gsap
        .timeline({ repeat: -1, yoyo: true, defaults: { ease: "power3.inOut", duration: 2.5 } })
        .fromTo(
          cube,
          {
            rotateY: -90,
            force3D: true,
          },
          {
            rotateY: 90,
            ease: "power1.inOut",
            duration: 5,
            force3D: true,
          }
        )
        .fromTo(
          cube.querySelectorAll(".face-mobile"),
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
          cube.querySelectorAll(".face-mobile"),
          {
            color: (j) =>
              `hsl(0, 0%, ${100 * [rots[1].a, rots[2].a, rots[3].a][j]}%)`,
          },
          1
        )
        .progress(i / n);
    }

    const h = n * spacing;
    gsap.set(".tray-mobile", { height: h, opacity: 0 });
    gsap.set(".pov-mobile", { x: 300 });

    setTimeout(() => {
      gsap.set(".pov-mobile", { visibility: "visible" });
      gsap.to(".pov-mobile", { 
        opacity: 1, 
        x: 0,
        duration: 0.7, 
        ease: "power2.out" 
      });
      gsap.to(".tray-mobile", { opacity: 1, duration: 0.6, ease: "power2.out" });
      gsap.to(".die-mobile", { opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.02 });
      gsap.to(".face-mobile", { opacity: 1, duration: 0.6, ease: "power2.out" });
    }, 300);

    gsap
      .timeline({ delay: 1.5 })
      .from(".tray-mobile", { yPercent: -3, duration: 4, ease: "power1.inOut", yoyo: true, repeat: -1 }, 0)
      .fromTo(
        ".tray-mobile",
        { rotate: -15 },
        { rotate: 15, duration: 8, ease: "power1.inOut", yoyo: true, repeat: -1 },
        0
      )
      .to(".tray-mobile", { scale: 0.8, duration: 4, ease: "power3.inOut", yoyo: true, repeat: -1 }, 0);
  }, []);

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap");

        .pov-mobile {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          contain: layout style paint;
        }

        .die-mobile {
          width: 200px;
          height: 30px;
          padding-bottom: 5px;
          perspective: 600px;
          will-change: transform;
        }

        .cube-mobile {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }

        .face-mobile {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          font-family: "Montserrat", sans-serif;
          font-optical-sizing: auto;
          font-weight: 900;
          font-style: normal;
          will-change: transform, color;
          transform: translate3d(0, 0, 0);
        }

        .back-mobile {
          justify-content: flex-start !important;
          padding-left: 22px;
        }

        @media (min-width: 920px) {
          .pov-mobile {
            display: none !important;
          }
        }
      `}</style>

      <div className="pov-mobile fixed -right-50 -top-60 -rotate-30 z-1" ref={povRef}>
        <div className="tray-mobile" ref={trayRef}>
          <div className="die-mobile">
            <div className="cube-mobile">
              <div className="face-mobile" style={{ fontSize: "24px" }}>
                FULL STACK
              </div>
              <div className="face-mobile" style={{ fontSize: "24px" }}>
                FRONTEND
              </div>
              <div className="face-mobile back-mobile" style={{ fontSize: "24px" }}>
                BACKEND
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
