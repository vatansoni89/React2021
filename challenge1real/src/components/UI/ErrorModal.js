import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import React from "react";
import ReactDOM from "react-dom";

const ErrorModal = (props) => {
  const onClickHandler = () => {
    props.checkValidUser();
  };

  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClickHandler} />;
  };

  const Overlay = (props) => {
    return (
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>{props.message}</div>
        <footer className={styles.actions}>
          <Button onClick={onClickHandler}>Okay</Button>
        </footer>
      </Card>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClickHandler={onClickHandler} />, document.getElementById('root-backdrop'))}
      {ReactDOM.createPortal(<Overlay message={props.message} title={props.title}/>, document.getElementById('root-overlay'))}
    </React.Fragment>
  );
};

export default ErrorModal;
