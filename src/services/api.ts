import axios from 'axios'

export interface Image {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
  };
}

interface Data {
  results: Image[];
  total: number;
  total_pages: number;
}

export const fetchPhotos = async (query:string): Promise<Data> => {
const { data } = await axios.get<Data>(`https://api.unsplash.com/photos/?;client_id=nAqYtCF7l8JE6SJBDYVHGnZ2Qc3TJV6mXaOTUZQGnWs`);

return data;
}