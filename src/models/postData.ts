export interface PostData {
  imageUrl: File | null;
  description: string;
  position: {
    latitude: number;
    longitude: number;
  };
  address: string;
}
