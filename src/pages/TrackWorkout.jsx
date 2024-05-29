import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

const TrackWorkout = () => {
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Workout tracked:", { exercise, duration, calories });
    // Reset form fields
    setExercise("");
    setDuration("");
    setCalories("");
  };

  return (
    <Box p={4}>
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        <FormControl id="exercise">
          <FormLabel>Exercise Name</FormLabel>
          <Input type="text" value={exercise} onChange={(e) => setExercise(e.target.value)} />
        </FormControl>
        <FormControl id="duration">
          <FormLabel>Duration (minutes)</FormLabel>
          <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </FormControl>
        <FormControl id="calories">
          <FormLabel>Calories Burned</FormLabel>
          <Input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Track Workout
        </Button>
      </VStack>
    </Box>
  );
};

export default TrackWorkout;