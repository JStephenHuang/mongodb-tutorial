import { Link } from "react-router-dom";

interface ExerciseBubbleProperties {
  exercise: string;
  selectedExercise: string;
  setSelectedExercise: (string: string) => void;
}

const ExerciseBubble = (props: ExerciseBubbleProperties) => {
  if (props.selectedExercise === props.exercise) {
    return (
      <div
        className="bubbles-active"
        onClick={() => props.setSelectedExercise(props.exercise)}
      >
        {props.exercise}
      </div>
    );
  } else {
    return (
      <div
        className="bubbles"
        onClick={() => props.setSelectedExercise(props.exercise)}
      >
        {props.exercise}
      </div>
    );
  }
};

export default ExerciseBubble;
