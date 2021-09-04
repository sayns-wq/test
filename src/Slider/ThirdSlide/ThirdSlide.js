import classes from './ThirdSlide.module.css'
import bottle from '../../img/bottle.png'
import icon1 from '../../img/icon1.png'
import icon2 from '../../img/icon2.png'
import bubble1 from '../../img/buble1.png'
import bubble3 from '../../img/bubble3.png'
import bubble4 from '../../img/bubble4.png'
import bubble5 from '../../img/bubble5.png'
import bubble6 from '../../img/bubble6.png'
import bubble7 from '../../img/bubble7.png'
import bubble8 from '../../img/bubble8.png'
import plus from '../../img/plus_sign.png'
import btn_close from '../../img/btn_close.png'
import btn_prev from '../../img/btn_prev.png'
import btn_next from '../../img/btn_next.png'
import openModal from './modal'
import closeModal from './close'
import lists from './lists'
import React from 'react'
class ThirdSlide extends React.Component {
  constructor(props){
    super(props)
    this.modalRef = React.createRef();
    this.openBtnRef = React.createRef();
    this.closeBtnRef = React.createRef();
    this.leftdotRef = React.createRef();
    this.rightdotRef = React.createRef();
    this.nextRef = React.createRef();
    this.prevRef = React.createRef();
    this.firstListRef = React.createRef();
    this.secondListRef = React.createRef();
  }
  componentDidMount(){
    lists(this.firstListRef.current,this.secondListRef.current,null,null,this.leftdotRef.current,this.rightdotRef.current)
  }
  render(){
    return (
      <div className={classes.slide}>
          <h1 className={classes.slide_keyMassage}>
              <span className={classes.slide_key}>Ключевое сообщение</span><br></br> <b className={classes.slide_Brand}>Brend XY</b>
          </h1>
          <div className={classes.slide_food}><div className={classes.slide_foodText}> Consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod </div></div>
          <div className={classes.slide_scadule}> <div className={classes.slide_sceduleText}>Ut enim ad minima</div></div>
          <img src = {bottle} className = {classes.bottle}></img>
          <img src = {icon1} className = {classes.icon1}></img>
          <img src = {icon2} className = {classes.icon2}></img>
          <img src = {bubble1} className = {classes.bubble1}></img>
          <img src = {bubble3} className = {classes.bubble3}></img>
          <div className = {classes.bubble4_movement}><img src = {bubble4} className = {classes.bubble4}></img></div>
          <img src = {bubble5} className = {classes.bubble5}></img>
          <img src = {bubble6} className = {classes.bubble6}></img>
          <img src = {bubble7} className = {classes.bubble7}></img>
          <img src = {bubble8} className = {classes.bubble8}></img>
          
        <div ref = {this.modalRef} className = {classes.modal}>
        <div className = {classes.modal__background}>
                
                </div>
            <div className = {classes.modal__main}>
            <h1 className={classes.slide_keyMassage_modal}>
              <span className={classes.slide_key}>Преимущества</span><br></br> <b className={classes.slide_Brand}>Brend XY</b>
          </h1>
                <img ref = {this.closeBtnRef}src = {btn_close} className = {classes.btn_close} onClick = {()=>closeModal(this.modalRef.current, this.openBtnRef.current, this.closeBtnRef.current)}></img>
                <ul ref = {this.firstListRef} className = {classes.modal__list}>
                    <li className = {classes.modal__list_number}>01</li>
                    <li className = {classes.modal__list_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li className = {classes.modal__list_number}>02</li>
                    <li className = {classes.modal__list_text}>sed do eiusmod tempor incididunt ut labore et dolore</li>
                    <li className = {classes.modal__list_number}>03</li>
                    <li className = {classes.modal__list_text}>sed do eiusmod tempor incididunt ut labore et dolore</li>
                </ul>
                <ul ref = {this.secondListRef} className = {classes.modal__secondList}>
                    <li className = {classes.modal__list_number}>04</li>
                    <li className = {classes.modal__list_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li className = {classes.modal__list_number}>05</li>
                    <li className = {classes.modal__list_text}>sed do eiusmod tempor incididunt ut labore et dolore</li>
                    <li className = {classes.modal__list_number}>06</li>
                    <li className = {classes.modal__list_text}>sed do eiusmod tempor incididunt ut labore et dolore</li>
                </ul>
                <img ref = {this.prevRef} src = {btn_prev}  className = {classes.btn_prev} onClick = {() =>lists(this.firstListRef.current,this.secondListRef.current,null,this.prevRef.current,this.leftdotRef.current,this.rightdotRef.current)}></img>
                <div className = {classes.dots}>
                <div ref = {this.leftdotRef} className = {classes.dot}></div>
                <div ref = {this.rightdotRef} className = {classes.dot}></div>
                </div>
                <img  ref = {this.nextRef} src = {btn_next} className = {classes.btn_next} onClick = {() =>lists(this.firstListRef.current,this.secondListRef.current,this.nextRef.current,null,this.leftdotRef.current,this.rightdotRef.current)}></img>
            </div>
        </div>
        
        <button ref = {this.openBtnRef} className={classes.slide__greeting_button} onClick = {()=>openModal(this.modalRef.current, this.openBtnRef.current)}>
          <img src = {plus} className={classes.slide__img}/>
          <span  className={classes.slide__button_text}>Подробнее</span>
        </button>
      </div> 
    );
      }
  }
  export default ThirdSlide;