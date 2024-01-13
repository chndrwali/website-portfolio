// Import React library
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData, TYPHOGRAPHY } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { useLanguageContext } from '@/context/language-context';
import Link from "next/link";

// Experience component
export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { language } = useLanguageContext();
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-8 mb-8 sm:mb-10 lg:mb-16">
      <SectionHeading>{TYPHOGRAPHY[language].MY_EXPERIENCE}</SectionHeading>
      <VerticalTimeline lineColor="">
        <TimelineContent />
      </VerticalTimeline>
    </section>
  );
}

// TimelineContent component
const TimelineContent = () => {
  const { theme } = useTheme();

  return (
    <React.Fragment>
      {experiencesData.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          contentStyle={{
            background:
              theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
            boxShadow: "none",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight:
              theme === "light"
                ? "0.4rem solid #9ca3af"
                : "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          date={item.date}
          icon={item.icon}
          iconStyle={{
            background:
              theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
            fontSize: "1.5rem",
          }}
        >
          <h3 className="font-semibold capitalize">{item.title}</h3>
          <p className="font-normal !mt-0">{item.location}</p>
          <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
            {item.description}
            {item.description?.includes('learn') && (
              <Link className="text-gray dark:text-white/75 underline ml-1" href={"https://www.linkedin.com/in/chndrwali/"} target="_blank" rel="noreferrer">
                see more
              </Link>
            )}
          </p>
        </VerticalTimelineElement>
      ))}
    </React.Fragment>
  );
};
