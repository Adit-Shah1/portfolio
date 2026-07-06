/**
 * MediaPipe-style 21-landmark hand skeleton, drawn in the current accent.
 * Placeholder until Adit records a real demo of the controller.
 */

// Landmark positions (open right hand, palm forward) in a 200×220 box
const POINTS: [number, number][] = [
  [100, 205], // 0 wrist
  [76, 188], [58, 168], [46, 150], [38, 134], // thumb
  [84, 140], [80, 112], [78, 92], [76, 74], // index
  [100, 136], [100, 104], [100, 82], [100, 62], // middle
  [115, 140], [118, 110], [120, 90], [122, 72], // ring
  [129, 148], [135, 124], [139, 106], [142, 92], // pinky
];

// MediaPipe HAND_CONNECTIONS
const BONES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [5, 9], [9, 10], [10, 11], [11, 12],
  [9, 13], [13, 14], [14, 15], [15, 16],
  [13, 17], [17, 18], [18, 19], [19, 20],
  [0, 17],
];

export default function GestureFigure() {
  return (
    <svg viewBox="0 0 200 220" className="w-44 text-accent md:w-52" aria-hidden>
      {BONES.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={POINTS[a][0]}
          y1={POINTS[a][1]}
          x2={POINTS[b][0]}
          y2={POINTS[b][1]}
          stroke="currentColor"
          strokeOpacity={0.45}
          strokeWidth={1.5}
        />
      ))}
      {POINTS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 ? 4 : i % 4 === 0 ? 3.2 : 2.4} fill="currentColor" />
      ))}
    </svg>
  );
}
