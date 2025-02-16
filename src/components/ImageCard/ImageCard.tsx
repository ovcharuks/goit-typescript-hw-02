import { Image } from "../App/App.types";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  photo: any;
  onClick: () => void;
  user: string;
  username: string;
}
const ImageCard: React.FC<ImageCardProps> = ({ photo, onClick }) => {
  console.log("photo !!!!", photo.user.username)
  return (
    <>
      <div onClick={onClick} className={styles.photoBox}>
        <img
          src={photo.urls.small}
          alt={photo.alt_description}
          className={photo}
        />
        <div className={styles.cardDescription}>Athor: {photo.user.username}</div>
        
      </div>
    </>
  );
};
export default ImageCard;
