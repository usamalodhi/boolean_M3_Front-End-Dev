import { useState } from 'react';
import { initialWorkouts, generateWorkout } from './Workouts.js';
import './App.css';

function App() {
  const [Workouts, setWorkouts] = useState(initialWorkouts);
  const [showDone, setshowDone] = useState(false);

  // Part 1
  const addNewWorkoutHandler = () => {
    const newWorkout = generateWorkout();
    setWorkouts([...Workouts, newWorkout]);
  };

  // Part 2
  const deleteWorkoutHandler = (workout) => {
    const updatedWorkouts = Workouts.filter((workoutEl) => workoutEl !== workout);
    setWorkouts(updatedWorkouts);
  };

  // Part 3
  const completeWorkoutHandler = (workout) => {
    const updatedWorkouts = Workouts.map((workoutEl) => (workoutEl === workout ? { ...workoutEl, done: true } : workoutEl));
    setWorkouts(updatedWorkouts);
  };

  // extension 1
  //line 79

  // extension 2
  const replaceWorkoutHandler = (workout) => {
    const newWorkout = generateWorkout();
    const updatedWorkouts = Workouts.map((workoutEl) => (workoutEl === workout ? newWorkout : workoutEl));
    setWorkouts(updatedWorkouts);
  };

  //bug fix - checkbox can now be checked and unchecked
  const incompleteWorkoutHandler = (workout) => {
    const updatedWorkouts = Workouts.map((workoutEl) => (workoutEl === workout ? { ...workoutEl, done: false } : workoutEl));
    setWorkouts(updatedWorkouts);
  };

  const liElement = (workout, i) => {
    return (
      <li key={i}>
        <p>
          {workout.sets}x sets of{' '}
          <strong>
            {workout.reps}x{workout.exercise}
          </strong>{' '}
          with {workout.rest} seconds rest
        </p>
        {!workout.done && (
          <button className='btn done' onClick={() => completeWorkoutHandler(workout)}>
            Done
          </button>
        )}
        {workout.done && (
          <button type='checkbox' className='btn' onClick={() => incompleteWorkoutHandler(workout)}>
            ✅
          </button>
        )}
        <button className='btn delete' onClick={() => deleteWorkoutHandler(workout)}>
          Delete
        </button>
        <button className='btn replace' onClick={() => replaceWorkoutHandler(workout)}>
          Replace
        </button>
      </li>
    );
  };

  return (
    <div className='App'>
      <h1>🏋️‍♀️Workout Generator</h1>
      <button onClick={addNewWorkoutHandler}>Add New Workout</button>
      <br />
      <br />
      <label>Show Done Only</label>
      <input type='checkbox' defaultChecked={showDone} onClick={() => setshowDone(!showDone)} />
      <ul>
        {!showDone && Workouts.map((Workout, index) => liElement(Workout, index))}
        {showDone && Workouts.filter((Workout) => Workout.done).map((Workout, index) => liElement(Workout, index))}
      </ul>
    </div>
  );
}

export default App;
