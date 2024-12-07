// import React, { useState } from "react";
// import styled from "styled-components";
// import TextInput from "./TextInput";
// import Button from "./Button";

// const Card = styled.div`
//   flex: 1;
//   min-width: 280px;
//   padding: 24px;
//   border: 1px solid ${({ theme }) => theme.text_primary + 20};
//   border-radius: 14px;
//   box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
//   @media (max-width: 600px) {
//     padding: 16px;
//   }
// `;
// const Title = styled.div`
//   font-weight: 600;
//   font-size: 16px;
//   color: ${({ theme }) => theme.primary};
//   @media (max-width: 600px) {
//     font-size: 14px;
//   }
// `;
// const addNewWorkout = async () => {
//   try {
//     const response = await axios.post('http://localhost:8080/api/workouts', { workout });
//     console.log("Workout added:", response.data);
//     setWorkout(''); // Clear the input field
//   } catch (error) {
//     console.error("Failed to add workout:", error.message);
//   }
// };

// const AddWorkout = ({ workout, setWorkout, addNewWorkout, buttonLoading }) => {
//   return (
//     <Card>
//       <Title>Add New Workout</Title>
//       <TextInput
//         label="Workout"
//         textArea
//         rows={10}
//         placeholder={`Enter in this format:

// #Category
// -Workout Name
// -Sets
// -Reps
// -Weight
// -Duration`}
//         value={workout}
//         handelChange={(e) => setWorkout(e.target.value)}
//       />
//       <Button
//         text="Add Workout"
//         small
//         onClick={() => addNewWorkout()}
//         isLoading={buttonLoading}
//         isDisabled={buttonLoading}
//       />
//     </Card>
//   );
// };

// export default AddWorkout;
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import TextInput from "./TextInput";
import Button from "./Button";

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const AddWorkout = () => {
  // Define workout and setWorkout using useState
  const [workout, setWorkout] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);

  // Function to handle adding a new workout
  const addNewWorkout = async () => {
    if (!workout.trim()) {
      alert("Please fill in the workout details.");
      return;
    }

    setButtonLoading(true); // Show loading state
    try {
      // Send the workout to the backend
      // const response = await axios.post("http://localhost:8080/api/workouts", { workout });
      const response = await axios.post("http://localhost:8080/user/workout", { workout });
      console.log("Workout added:", response.data);

      // Clear the input field
      setWorkout("");
    } catch (error) {
      console.error("Error adding workout:", error.message);
      alert("Failed to add workout. Please try again.");
    } finally {
      setButtonLoading(false); // Reset loading state
    }
  };

  return (
    <Card>
      <Title>Add New Workout</Title>
      <TextInput
        label="Workout"
        textArea
        rows={10}
        placeholder={`Enter in this format:

#Category
-Workout Name
-Sets
-Reps
-Weight
-Duration`}
        value={workout}
        handelChange={(e) => setWorkout(e.target.value)}
      />
      <Button
        text="Add Workout"
        small
        onClick={addNewWorkout}
        isLoading={buttonLoading}
        isDisabled={buttonLoading}
      />
    </Card>
  );
};

export default AddWorkout;

