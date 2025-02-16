import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../App/App.types";

interface ImageGalleryProps {
  photos: {}[];
  onPhotoClick: (image: Image) => void;
}
// interface PhotoItem {

// }

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, onPhotoClick }) => {
  const length = photos.length;
 
  return (
    <ul className={styles.imageList}>
      {photos.map((photo: any) => (
        <li key={photo.id} className={styles.card}>
          <ImageCard photo={photo} onClick={() => onPhotoClick(photo)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
