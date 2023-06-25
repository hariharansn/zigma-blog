import {
  RightCardContainer,
  Image,
  Title,
  RightTitle,
  Description
} from "./styledComponents";

const RightCard = (props) => {
  const { projectDetails } = props;
  const { imageUrl, projectTitle, description } = projectDetails;

  return (
    <RightCardContainer>
      <Image src={imageUrl} alt="project" />
      <Title>
        <RightTitle>{projectTitle}</RightTitle>
      </Title>
      <Description>{description}</Description>
    </RightCardContainer>
  );
};

export default RightCard;
