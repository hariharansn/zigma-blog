// Write your code here
import { AiFillCalendar } from "react-icons/ai";

import {
  LeftContainer,
  LeftTitle,
  DurationContainer,
  Duration,
  LeftDescription
} from "./styledComponents";

const LeftCard = (props) => {
  const { courseDetails } = props;
  const { courseTitle, description, duration, tagsList } = courseDetails;

  return (
    <>
      <LeftContainer>
        <LeftTitle>{courseTitle}</LeftTitle>
        <DurationContainer>
          <AiFillCalendar color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </LeftContainer>
      <LeftDescription>{description}</LeftDescription>
    </>
  );
};

export default LeftCard;
