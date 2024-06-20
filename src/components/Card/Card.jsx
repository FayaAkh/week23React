import s from './Card.module.css'


function Card({ theme, price,speed }) {
  return (
        <div className={`${theme.fon} ${s.card}}`}>
      <h2>Безлимитный {price}</h2>
      <div >
        <hr />
        <span>Руб</span>
        <h1>
            {price}
        </h1>
        <span>/мес</span>
      </div>
      <div className={s.info}>
      <div>До {speed} Мбит/сек</div>
      <div>
        <p>Объем включенного <br /> трафика не ограничен </p>
      </div>
      </div>
    </div>
  );
}

export default Card;
