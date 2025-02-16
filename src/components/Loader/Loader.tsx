import styles from './Loader.module.css'
import {Bars} from "react-loader-spinner";

const Loader: React.FC = () => {

    return (
       <div className={styles.spinner}>
        <p>Завантажується</p>
        <Bars />
        </div>
      );

}


export default Loader;