import createJournal from "./Journal/create.js";
import readJournals from "./Journal/read.js";
import { getStatistics } from "./Journal/stats.js";

const journalController = {
  create: createJournal,
  read: readJournals,
  stats: getStatistics,
};

export default journalController;
