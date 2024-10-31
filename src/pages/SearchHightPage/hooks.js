import { useState } from "react";

const useSearchHighlights = () => {
  // Data generated using chat gpt
  const [totalPostFound, setTotalPostFound] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const data = [
    {
      articleHeader:
        "Understanding the difference between grid-template and grid-auto",
      articleDate: "Oct,10,2024",
      articleBody:
        "With all new related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto* properties.",
    },
    {
      articleHeader: "A Beginner's Guide to CSS Grid Layout",
      articleDate: "Sep,10,2024",
      articleBody:
        "CSS Grid Layout is a powerful layout system available in CSS. It allows for the creation of complex layouts without the need for float or positioning tricks.",
    },
    {
      articleHeader: "Top 10 CSS Grid Layout Examples",
      articleDate: "Aug,10,2024",
      articleBody:
        "Here are some of the best examples of CSS Grid Layout in action. These examples will help you understand how to effectively use grid in your projects.",
    },
    {
      articleHeader: "How to Create Responsive Layouts with CSS Grid",
      articleDate: "Jul,10,2024",
      articleBody:
        "In this article, we explore how to create responsive web designs using CSS Grid. Learn about media queries and flexible grid units.",
    },
    {
      articleHeader: "Common Mistakes When Using CSS Grid",
      articleDate: "Jun,10,2024",
      articleBody:
        "Even experienced developers can make mistakes when using CSS Grid. This article covers some common pitfalls and how to avoid them.",
    },
    {
      articleHeader: "CSS Grid vs. Flexbox: When to Use Each",
      articleDate: "May,10,2024",
      articleBody:
        "CSS Grid and Flexbox are both powerful layout tools. This article discusses the differences between them and when to use each.",
    },
    {
      articleHeader: "Advanced CSS Grid Techniques",
      articleDate: "Apr,10,2024",
      articleBody:
        "Take your CSS Grid skills to the next level with these advanced techniques. Learn about grid areas, implicit grids, and more.",
    },
    {
      articleHeader: "Creating Grid Layouts for Mobile Devices",
      articleDate: "Mar,10,2024",
      articleBody:
        "Mobile devices require special considerations when using grid layouts. This article provides tips on how to create mobile-friendly grid designs.",
    },
  ];

  return { data, searchTerm, totalPostFound, setSearchTerm, setTotalPostFound };
};

export default useSearchHighlights;
