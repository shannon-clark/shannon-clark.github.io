export type BuildStatus = "Built" | "In Progress" | "Not Built";
export type WishlistPriority = "High" | "Medium" | "Low";

export interface LegoSet {
  setNumber: string;
  name: string;
  theme: string;
  pieceCount: number;
  year: number;
  buildStatus: BuildStatus;
  legoStoreUrl?: string;
  imageUrl?: string;
  notes?: string;
  featured?: boolean;
}

export interface WishlistSet {
  setNumber: string;
  name: string;
  theme: string;
  pieceCount: number;
  year: number;
  priority: WishlistPriority;
  legoStoreUrl?: string;
  imageUrl?: string;
  notes?: string;
}

export interface CollectionStats {
  ownedCount: number;
  totalPieces: number;
  builtCount: number;
  inProgressCount: number;
  notBuiltCount: number;
  wishlistCount: number;
  highPriorityWishlistCount: number;
  themeBreakdown: Array<{ theme: string; count: number }>;
}
