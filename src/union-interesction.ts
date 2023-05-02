type NoobDeveloper = {
  name: string;
};

// type JuniorDeveloper = {
//   name: string;
//   expertise: string;
//   experience: number;
// };

type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};

enum Level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}

type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
  level: Level;
};

const newDeveloper: JuniorDeveloper = {
  name: "Razibul Hossen",
  expertise: "JavaScript",
  experience: 6,
};

const developer: NextLevelDeveloper = {
  name: "Rahim Bhai",
  expertise: "TypeScript",
  experience: 2,
  leadershipExperience: 1,
  level: Level.mid,
};
