import classes from './FirstSlide.module.css'
import picture from '../../img/стрелка.png'
import bakti from '../../img/bakti_1.png'
import bakti1 from '../../img/Layer_4_copy_2.png'
import bakti2 from '../../img/Layer_4_copy.png'
import bakti3 from '../../img/Layer_4.png'
import bakti4 from '../../img/Layer_5.png'
import bakti5 from '../../img/Layer_7.png'
import bakti6 from '../../img/Layer_8.png'
import sperm from '../../img/pink_sperm_1.png'
import sperm1 from '../../img/pink_sperm.png'
import React from 'react'

class FirstSlide extends React.Component {
  constructor(props){
    super(props)
    this.buttonRef = React.createRef();
  }
  render(){
  return (
    <div className={classes.slide}>
    <div className={classes.slide__greeting}>
      <span className={classes.slide__greeting_hi}>Привет,</span>
      <h1 className={classes.slide__greeting_info}>Это <span className={classes.slide__greeting_bold}>не</span> 
      <br></br>коммерческое задание
      
      </h1>
        <button ref = {this.buttonRef}  className={classes.slide__greeting_button} onClick = {()=> {this.props.props(true)}}>
          <img src = {picture} className={classes.slide__img}/>
          <span  className={classes.slide__button_text}>Что дальше?</span>
        </button>
    </div>
    <img src = {bakti} className={classes.slide__bakti}></img>
    <img src = {bakti1} className={classes.slide__bakti1}></img> 
    <img src = {bakti2} className={classes.slide__bakti2}></img>
    <div className={classes.slide__bakti3_scale}><img src = {bakti3} className={classes.slide__bakti3}></img></div>
    <img src = {bakti4} className={classes.slide__bakti4}></img>
    <img src = {bakti5} className={classes.slide__bakti5}></img>
    <div className={classes.slide__bakti6_rotate}> <img src = {bakti6} className={classes.slide__bakti6}></img></div>
    <img src = {sperm1} className={classes.slide__sperm1}></img>
    <img src = {sperm} className={classes.slide__sperm}></img>
    </div>
  );
  }
}

export default FirstSlide;