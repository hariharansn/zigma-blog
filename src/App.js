import TimelineView from "./components/TimelineView";

import "./App.css";

const timelineItemsList = [
  {
    id: "1",

    title: "1997",
    courseTitle: "Begin",
    description:
      "The Company owed to its growth and incorporated as The Zigma Technologies India (P) Limited in 2004",
    duration: "7 YEARS"
  },
  {
    id: "2",
    categoryId: "PROJECT",

    projectTitle: "Software Development",
    description:
      "Zigma made significant progress in Software Development and provided solutions to various customers. Zigma has a extensive experience in all portfolios like Block chain, AI, ML and Security Solutions.",
    imageUrl: "https://www.zigmaindia.com/images/logo.png"
  },
  {
    id: "3",

    courseTitle: "More than 2300 employees",
    description:
      "Build a responsive website that appears beautifully on the screen of any size. Develop a personal portfolio website, an E-commerce product listing website and a website to host conferences and events.",
    duration: "Years"
  },

  {
    id: "4",

    title: "2023",
    courseTitle: "VISION/MISSION",
    description:
      "The Zigma Technologies aim to develop the most optimized solutions to customize the individual requirement. The right combination of skills, technology, effort and efficiency is adaptive to enhance the client satisfaction. We empower to change the market strategies that go technical with the right technology. Every moment we work more than just a promise to see the success of our clients."
  }
];

const App = () => <TimelineView timelineItemsList={timelineItemsList} />;

export default App;
