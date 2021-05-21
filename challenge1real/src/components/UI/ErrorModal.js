import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {

    const onClickHandler = () =>{
    props.checkValidUser();
    };

  return (
    <div>
      <div className={styles.backdrop} onClick={onClickHandler}/>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>{props.message}</div>
        <footer className={styles.actions}>
          <Button onClick={onClickHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
