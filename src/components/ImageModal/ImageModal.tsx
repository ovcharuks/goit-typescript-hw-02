import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";
import { ClimbingBoxLoader } from "react-spinners";
import { Image } from "../App/App.types";

interface ImageModalProps {
  photo: Image;
  onClose: () => void;
  
}

interface Image {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
  user: string;
  name: any;
}


const ImageModal: React.FC<ImageModalProps> = ({ photo, onClose }) => (
  
  <ReactModal isOpen onRequestClose={onClose} ariaHideApp={false}>
    <div>
      <img
        className={styles.fullImage}
        src={photo.urls.regular}
        alt={photo.alt_description}
      />
      <p className={styles.text}>{photo.alt_description}</p>
           <button onClick={onClose}>Close</button>
    </div>
  </ReactModal>
);

export default ImageModal;
