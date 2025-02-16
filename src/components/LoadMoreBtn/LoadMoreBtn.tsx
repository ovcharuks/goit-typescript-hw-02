import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onNextPage: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onNextPage }) => {
  return (
    <button onClick={onNextPage} className={styles.loadMoreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
