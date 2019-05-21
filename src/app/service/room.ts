import {Player} from './player';

export class Room {
  id: string;
  createdAt: string;
  startedAt?: string;
  finishedAt?: string;
  players: Array<Player>;
}
