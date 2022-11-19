export type colorRange =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;

interface DrawSquareProps {
  stepSize: number;
  startingColor: colorRange;
}

export const DrawSquare: React.FC<DrawSquareProps> = ({
  stepSize,
  startingColor,
}) => {
  const shade = startingColor * 17;
  const height = (16 - startingColor) * stepSize * 2;

  if (startingColor === 15) {
    return (
      <div
        data-testid="drawsquare"
        style={{
          width: height,
          height: height,
          background: `rgb(${shade},${shade},${shade})`,
          paddingTop: stepSize,
          paddingLeft: stepSize,
        }}
      />
    );
  }

  return (
    <div
      data-testid="drawsquare"
      style={{
        width: height,
        height: height,
        background: `rgb(${shade},${shade},${shade})`,
        paddingTop: stepSize,
        paddingLeft: stepSize,
      }}
    >
      <DrawSquare
        stepSize={stepSize}
        startingColor={(startingColor + 1) as colorRange}
      />
    </div>
  );
};
