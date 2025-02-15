"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
    const [isDesktop, setIsDesktop] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
          const checkDevice = () => {
               if (window.innerWidth > 1024) {
                    setIsDesktop(true);
               } else {
                    setIsDesktop(false);
               }
          };

          checkDevice();

          window.addEventListener("resize", checkDevice);

          return () => {
               window.removeEventListener("resize", checkDevice);
          };
    }, []);

    useEffect(() => {
          if (isDesktop) {
               const handleMouseMove = (e: MouseEvent) => {
                    mouseX.set(e.clientX);
                    mouseY.set(e.clientY);
               };

               const handlePointerDown = (e: PointerEvent) => {
                    if (e.pointerType === "mouse") {
                         document.body.style.cursor = 'none';
                    };
               };

               const handlePointerUp = () => {
                    document.body.style.cursor = '';
               };

               window.addEventListener("mousemove", handleMouseMove);
               window.addEventListener("pointerdown", handlePointerDown);
               window.addEventListener("pointerup", handlePointerUp);

               return () => {
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("pointerdown", handlePointerDown);
                    window.removeEventListener("pointerup", handlePointerUp);
               };
          }
    }, [isDesktop, mouseX, mouseY]);

    return (
          isDesktop && (
               <motion.div
                    className="fixed top-0 left-0 w-10 h-10 bg-white rounded-full pointer-events-none mix-blend-difference"
                    style={{
                         x: mouseX,
                         y: mouseY,
                         translateX: "-60%",
                         translateY: "-60%",
                    }}
               />
          )
    );
}
