export default interface CatsResponse {
  id: number;
  latitude: number;
  longitude: number;
  image: string;
  description: string;
  _count: {
    likes: number;
  };
}
