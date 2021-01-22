import React from "react";
import HomeStyle from "./HomeStyle.module.css";
import all from "./all.jpg";
import hight from "./hight.jpg";
class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={HomeStyle.wrapper}>
        <div className={HomeStyle.header}>
          <div className={HomeStyle.title}>Езда с Тома</div>
          <div className={HomeStyle.phone}>+359876825221</div>
        </div>
        <div>
          <img className={HomeStyle.image} src={all} />
          <div className={HomeStyle.body}>
            Заповядайте в село Голямо Белово за едно неописуемо преживяване сред
            природата на един китен пейзаж в Родопите. Няма значение ако ще
            яздите за първи път, ние сме сигурни, че ще ви хареса! Село Голямо
            Белово се намира на един час път от Пловдив и на по-малко oт два часа път от София.
          </div>
          <img className={HomeStyle.image} src={hight} />
          <div className={HomeStyle.body}>
            За работещите в големия град. Подарете си разтоварваща почивка на
            село. Насладете се на спокойствието и красотата при нас. За
            семействата с малки (или по-големи) деца. Елате при нас през
            уикенда. Прекарайте един прекрасен ден сред природата.
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
