// Write your code here
import { Chrono } from "react-chrono";

import RightCard from "../RightCard";
import LeftCard from "../LeftCard";

import {
  TimelineContainer,
  ResponsiveContainer,
  HeaderContainer,
  Heading,
  CCBPHeading
} from "./styledComponents";

const TimelineView = (props) => {
  const { timelineItemsList } = props;

  const renderTimelineCard = (item) => {
    if (item.categoryId === "PROJECT") {
      return <RightCard key={item.id} projectDetails={item} />;
    }
    return <LeftCard key={item.id} courseDetails={item} />;
  };

  return (
    <TimelineContainer>
      <ResponsiveContainer>
        <HeaderContainer>
          <Heading>
            JOURNEY OF ZIGMA <br />
            <CCBPHeading>ZT 2.0</CCBPHeading>
          </Heading>
        </HeaderContainer>
        <Chrono
          theme={{
            secondary: "white"
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map((eachItem) => renderTimelineCard(eachItem))}
        </Chrono>
      </ResponsiveContainer>
    </TimelineContainer>
  );
};

export default TimelineView;
