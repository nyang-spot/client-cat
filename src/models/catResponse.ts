export default interface CateResponse {
  id: number;
  latitude: number;
  longitude: number;
  imageUrl: string;
  description: string;
  _count: {
    likes: number;
  };
}
