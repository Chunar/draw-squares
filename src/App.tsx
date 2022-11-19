import { useState } from "react";
import { colorRange, DrawSquare } from "./DrawSquare";

function App() {
  const [stepSize, setStepSize] = useState<number>(0);
  const [startingColor, setStartingColor] = useState<colorRange>(0);

  return (
    <>
      <input
        data-testid="stepSizeInput"
        type="number"
        placeholder="Enter StepSize"
        onChange={(e) => {
          setStepSize(parseInt(e.target.value));
        }}
      />
      <input
        data-testid="startingColotInput"
        type="number"
        placeholder="Enter Starting Color"
        max={15}
        onChange={(e) => {
          const val = parseInt(e.target.value);
          if (!isNaN(val) && val < 16) {
            setStartingColor(parseInt(e.target.value) as colorRange);
          }
        }}
      />
      <DrawSquare stepSize={stepSize} startingColor={startingColor} />
    </>
  );
}

export default App;
