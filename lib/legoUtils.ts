import { ownedSets, wishlistSets } from "../data/legoData";
import { CollectionStats } from "../types/lego";

const statusOrder = {
  Built: 0,
  "In Progress": 1,
  "Not Built": 2,
} as const;

const priorityOrder = {
  High: 0,
  Medium: 1,
  Low: 2,
} as const;

export const sortedOwnedSets = [...ownedSets].sort((a, b) => {
  const byStatus = statusOrder[a.buildStatus] - statusOrder[b.buildStatus];
  if (byStatus !== 0) {
    return byStatus;
  }
  return a.name.localeCompare(b.name);
});

export const sortedWishlistSets = [...wishlistSets].sort((a, b) => {
  const byPriority = priorityOrder[a.priority] - priorityOrder[b.priority];
  if (byPriority !== 0) {
    return byPriority;
  }
  return a.name.localeCompare(b.name);
});

export const featuredSets = ownedSets.filter((set) => set.featured);

export const getCollectionStats = (): CollectionStats => {
  const ownedCount = ownedSets.length;
  const totalPieces = ownedSets.reduce((total, set) => total + set.pieceCount, 0);
  const builtCount = ownedSets.filter((set) => set.buildStatus === "Built").length;
  const inProgressCount = ownedSets.filter(
    (set) => set.buildStatus === "In Progress",
  ).length;
  const notBuiltCount = ownedSets.filter(
    (set) => set.buildStatus === "Not Built",
  ).length;

  const themeMap = ownedSets.reduce<Record<string, number>>((acc, set) => {
    acc[set.theme] = (acc[set.theme] ?? 0) + 1;
    return acc;
  }, {});

  const themeBreakdown = Object.entries(themeMap)
    .map(([theme, count]) => ({ theme, count }))
    .sort((a, b) => b.count - a.count || a.theme.localeCompare(b.theme));

  return {
    ownedCount,
    totalPieces,
    builtCount,
    inProgressCount,
    notBuiltCount,
    wishlistCount: wishlistSets.length,
    highPriorityWishlistCount: wishlistSets.filter((set) => set.priority === "High")
      .length,
    themeBreakdown,
  };
};
