import style from './Modal.module.scss';

export const Modal = (props) => {
  const { passedPosition, title, content, actions } = props;

  const modalPositionStyle = {
    position: 'fixed',
    top: '100px',
    right: '3rem',
  };

  const modalPositionStyleTop = {
    position: 'fixed',
    top: '100px',
    right: '3rem',
  };

  const modalPositionStyleBottom = {
    position: 'fixed',
    bottom: '180px',
    right: '3rem',
  };
  const decidePosition = (string) => {
    if (string === 'Top') {
      return modalPositionStyleTop;
    } else if (string === 'Bottom') {
      return modalPositionStyleBottom;
    } else {
      return modalPositionStyle;
    }
  };

  return (
    <div className={style.modal_wrapper} style={decidePosition(passedPosition)}>
      <div className={style.title_wrapper}>{title}</div>
      <div className={style.content_wrapper}>{content}</div>
      <div className={style.actions_wrapper}>{actions}</div>
    </div>
  );
};
