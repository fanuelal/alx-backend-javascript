import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  return [new ClassRoom(sizes[0]), new ClassRoom(sizes[1]), new ClassRoom(sizes[2])];
}
