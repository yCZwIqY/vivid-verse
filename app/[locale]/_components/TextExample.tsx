'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface TextExampleProps {
  preText: string;
  nextText: string;
  inView: boolean;
}

const pStyle = 'h-full flex justify-center items-center break-keep text-center';

export default function TextExample({ preText, nextText, inView }: TextExampleProps) {
  const nextControls = useAnimationControls();
  const preControls = useAnimationControls();
  const nextRef = useRef<HTMLParagraphElement>(null);
  const preRef = useRef<HTMLParagraphElement>(null);
  const [height, setHeight] = useState<number>(35);

  useEffect(() => {
    setHeight(
      Math.max(...[nextRef.current?.offsetHeight ?? 35, preRef.current?.offsetHeight ?? 35]),
    );
  }, [preText, nextText]);
  useEffect(() => {
    if (inView) {
      nextControls.start({
        y: 0,
        opacity: 1,
      });
      preControls.start({
        y: 0,
        opacity: 0,
      });
    } else {
      setTimeout(() => {
        nextControls.set({
          y: -height,
          opacity: 0,
        });
        preControls.set({
          y: -height,
          opacity: 1,
        });
      }, 2000);
    }
  }, [inView]);

  return (
    <div
      className={`w-full 
      font-bold
      text-3xl
      p-4
       h-[${height / 2}px] overflow-hidden`}
    >
      <motion.p
        ref={nextRef}
        animate={nextControls}
        className={pStyle}
        initial={{
          y: -height,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        {nextText}
      </motion.p>
      <motion.p
        ref={preRef}
        animate={preControls}
        className={pStyle}
        initial={{
          y: -height,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        {preText}
      </motion.p>
    </div>
  );
}
