import { Box, Button, FormControl, FormLabel, Input, VStack, List, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";

const TrackWorkout = () => {
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const [workouts, setWorkouts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = { exercise, duration, calories };
    setWorkouts([...workouts, newWorkout]);
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
      <Box mt={8}>
        <Text fontSize="xl" fontWeight="bold">Logged Workouts</Text>
        <List spacing={3}>
          {workouts.map((workout, index) => (
            <ListItem key={index} borderWidth="1px" borderRadius="lg" p={4}>
              <Text><strong>Exercise:</strong> {workout.exercise}</Text>
              <Text><strong>Duration:</strong> {workout.duration} minutes</Text>
              <Text><strong>Calories:</strong> {workout.calories} kcal</Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default TrackWorkout;