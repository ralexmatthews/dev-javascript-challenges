export const getWaterVolume = (walls: number[]) => {
  let maxWaterVolume = 0;

  walls.forEach((leftWall, leftIndex) => {
    walls.slice(leftIndex + 1).forEach((rightWall, rightIndex) => {
      const x = rightIndex + 1;
      const y = Math.min(leftWall, rightWall);

      const waterVolume = x * y;

      if (waterVolume > maxWaterVolume) {
        maxWaterVolume = waterVolume;
      }
    });
  });

  return maxWaterVolume;
};
