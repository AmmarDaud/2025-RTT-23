export type dimensions = {
  width: number;
  height: number;
  depth: number;
};

export type reviews = [
  {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  },
];

export type meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};