import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getWorkoutById } from "../api";

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Video = styled.video`
  width: 100%;
  margin-bottom: 20px;
`;

const Details = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
`;

const WorkoutDetails = () => {
  const { _id } = useParams();
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      const token = localStorage.getItem("fittrack-app-token");
      const res = await getWorkoutById(_id, token);
      setWorkout(res?.data);
    };
    fetchWorkout();
  }, [_id]);

  if (!workout) return <div>Loading...</div>;

  return (
    <Container>
      <Title>{workout.workoutName}</Title>
      <Image src={workout.imageUrl} alt={workout.workoutName} />
      <Video src={workout.videoUrl} controls />
      <Details>
        <p>Category: {workout.category}</p>
        <p>Sets: {workout.sets}</p>
        <p>Reps: {workout.reps}</p>
        <p>Weight: {workout.weight} kg</p>
        <p>Duration: {workout.duration} min</p>
        <p>Calories Burned: {workout.caloriesBurned}</p>
        <p>Type: {workout.workoutType}</p>
        <p>Info: {workout.info}</p>
      </Details>
    </Container>
  );
};

export default WorkoutDetails;
