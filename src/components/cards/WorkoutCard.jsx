// import { FitnessCenterRounded, TimelapseRounded } from "@mui/icons-material";
// import React from "react";
// import styled from "styled-components";

// const Card = styled.div`
//   flex: 1;
//   min-width: 250px;
//   max-width: 400px;
//   padding: 16px 18px;
//   border: 1px solid ${({ theme }) => theme.text_primary + 20};
//   border-radius: 14px;
//   box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
//   @media (max-width: 600px) {
//     padding: 12px 14px;
//   }
// `;
// const Category = styled.div`
//   width: fit-content;
//   font-size: 14px;
//   color: ${({ theme }) => theme.primary};
//   font-weight: 500;
//   background: ${({ theme }) => theme.primary + 20};
//   padding: 4px 10px;
//   border-radius: 8px;
// `;
// const Name = styled.div`
//   font-size: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   font-weight: 600;
// `;
// const Sets = styled.div`
//   font-size: 15px;
//   color: ${({ theme }) => theme.text_secondary};
//   font-weight: 500;
//   display: flex;
//   gap: 6px;
// `;
// const Flex = styled.div`
//   display: flex;
//   gap: 16px;
// `;
// const Details = styled.div`
//   font-size: 15px;
//   color: ${({ theme }) => theme.text_primary};
//   font-weight: 500;
//   display: flex;
//   align-items: center;
//   gap: 6px;
// `;

// const WorkoutCard = ({ workout }) => {
//   return (
//     <Card>
//       <Category>#{workout?.category}</Category>
//       <Name>{workout?.workoutName}</Name>
//       <Sets>
//         Count: {workout?.sets} sets X {workout?.reps} reps
//       </Sets>
//       <Flex>
//         <Details>
//           <FitnessCenterRounded sx={{ fontSize: "20px" }} />
//           {workout?.weight} kg
//         </Details>
//         <Details>
//           <TimelapseRounded sx={{ fontSize: "20px" }} />
//           {workout?.duration} min
//         </Details>
//         <Details>
//          <img src={workout?.imageUrl} alt="ncos" />
//         </Details>
//         <a href={workout?.videoUrl} target="_blank">Click to view video</a>
//       </Flex>
//     </Card>
//   );
// };

// export default WorkoutCard;
import { FitnessCenterRounded, TimelapseRounded } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 400px;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 12px 14px;
  }
`;

const Category = styled.div`
  width: fit-content;
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  background: ${({ theme }) => theme.primary + 20};
  padding: 4px 10px;
  border-radius: 8px;
`;

const Name = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
`;

const Sets = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  display: flex;
  gap: 6px;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Details = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ImageWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  &:hover img {
    transform: scale(1.1); /* Slight zoom effect */
    transition: transform 0.3s ease-in-out;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// const WorkoutCard = ({ workout }) => {
//   return (
//     <Card>
//       <Category>#{workout?.category}</Category>
//       <Name>{workout?.workoutName}</Name>
//       <Sets>
//         Count: {workout?.sets} sets X {workout?.reps} reps
//       </Sets>
//       <Flex>
//         <Details>
//           <FitnessCenterRounded sx={{ fontSize: "20px" }} />
//           {workout?.weight} kg
//         </Details>
//         <Details>
//           <TimelapseRounded sx={{ fontSize: "20px" }} />
//           {workout?.duration} min
//         </Details>
//         <Details>
//           <ImageWrapper>
//             <Image src={workout?.imageUrl} alt="Workout" />
//           </ImageWrapper>
//         </Details>
//         <Details>
//           <video src={workout?.videoUrl} controls width="200"></video>
//         </Details>
//       </Flex>
//     </Card>
//   );
// };

// export default WorkoutCard;
// const WorkoutCard = ({ workout, onClick }) => {
//   return (
//     <Card onClick={onClick}>
//       <Category>#{workout?.category}</Category>
//       <Name>{workout?.workoutName}</Name>
//       <Sets>
//         Count: {workout?.sets} sets X {workout?.reps} reps
//       </Sets>
//       <Flex>
//         <Details>
//           <FitnessCenterRounded sx={{ fontSize: "20px" }} />
//           {workout?.weight} kg
//         </Details>
//         <Details>
//           <TimelapseRounded sx={{ fontSize: "20px" }} />
//           {workout?.duration} min
//         </Details>
//         <Details>
//           <ImageWrapper>
//             <Image src={workout?.imageUrl} alt="Workout" />
//           </ImageWrapper>
//         </Details>
//         <Details>
//           <video src={workout?.videoUrl} controls width="200"></video>
//         </Details>
//       </Flex>
//     </Card>
//   );
// };
const WorkoutCard = ({ workout, onClick }) => {
  return (
    <Card onClick={() => onClick(workout._id)}>
      <Category>#{workout?.category}</Category>
      <Name>{workout?.workoutName}</Name>
      <Sets>
        Count: {workout?.sets} sets X {workout?.reps} reps
      </Sets>
      <Flex>
        <Details>
          <FitnessCenterRounded sx={{ fontSize: "20px" }} />
          {workout?.weight} kg
        </Details>
        <Details>
          <TimelapseRounded sx={{ fontSize: "20px" }} />
          {workout?.duration} min
        </Details>
        <Details>
          <ImageWrapper>
            <Image src={workout?.imageUrl} alt="Workout" />
          </ImageWrapper>
        </Details>
      </Flex>
    </Card>
  );
};


export default WorkoutCard;

