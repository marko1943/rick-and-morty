import styles from "./Pagination.module.scss";

type Props = {
  pages: number;
  selectNumber: (num: number) => void;
  currentPage: number;
};

const Pagination = ({ pages, selectNumber, currentPage }: Props) => {
  return (
    <div className={styles.Pagination}>
      {[...Array(pages)].map((_, index) => (
        <button key={index} onClick={() => selectNumber(index + 1)}>
          {currentPage === index + 1 ? (
            <span className={styles.active} data-testid="active">
              {index + 1}
            </span>
          ) : (
            index + 1
          )}
        </button>
      ))}
    </div>
  );
};

export { Pagination };
