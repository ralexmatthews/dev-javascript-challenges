export const getWaterVolume = (walls: number[]) =>
  walls.reduce(
    ({ answer, subWalls }, leftWall) => ({
      answer: Math.max(
        answer,
        Math.max(
          ...subWalls.map(
            (rightWall, index) => Math.min(leftWall, rightWall) * (index + 1)
          )
        )
      ),
      subWalls: subWalls.slice(1),
    }),
    { answer: 0, subWalls: walls.slice(1) }
  ).answer;
