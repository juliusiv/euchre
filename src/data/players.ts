const PLAYER_IDS = [
  "doug",
  "jr",
  "amy",
  "terri",
  "marcia",
  "pete",
  "jimmy",
  "becky",
  "jamie",
  "rich",
  "alex",
];

export type PlayerId = typeof PLAYER_IDS[number];

export type Player = {
  id: PlayerId;
  firstName: string;
  lastName: string;
}