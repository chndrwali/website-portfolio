"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguageContext } from "@/context/language-context";
import { TYPHOGRAPHY } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About");
  const { language } = useLanguageContext();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        {TYPHOGRAPHY[language].ABOUT_ME}
      </SectionHeading>
      <p className="mb-3">
        {TYPHOGRAPHY[language].ABOUT_ME_DESC}
       
      </p>
    </motion.section>
  );
}
