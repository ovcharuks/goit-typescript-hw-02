import { Image } from "../App/App.types";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  photo: Image;
  onClick: () => void;
  // user: string;
}
const ImageCard: React.FC<ImageCardProps> = ({ photo, onClick }) => {
 
  return (
    <>
      <div onClick={onClick} className={styles.photoBox}>
        <img
          src={photo.urls.small}
          alt={photo.alt_description}
          // className={photo}
        />
        {/* <div className={styles.cardDescription}>Athor: {photo.user.user}</div> */}
        
      </div>
    </>
  );
};
export default ImageCard;
