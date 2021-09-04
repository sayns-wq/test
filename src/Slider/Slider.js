import Header from '../header/Header';
import FirstSlide from './firstSlide/FirstSlide';
import SecondSlide from './SecondSlide/SecondSlide';
import classes from './Slider.module.css'
import ThirdSlide from './ThirdSlide/ThirdSlide';
import sliderAnimation from './sliderAnimation';
import React from 'react'

class Slider extends React.Component {
  constructor(props){
    super(props)
    this.wrapperRef = React.createRef();
    this.innerRef = React.createRef();
    this.FirstRef = React.createRef();
    this.SecondRef = React.createRef();
    this.ThirdRef = React.createRef();
  }
  componentDidMount(){
    sliderAnimation(this.wrapperRef.current, this.innerRef.current, [this.FirstRef.current,this.SecondRef.current,this.ThirdRef.current] )
  }
  render(){
  return (
    <div ref = {this.wrapperRef} className={classes.slider}>
        <Header props = {(back) => {sliderAnimation(this.wrapperRef.current, this.innerRef.current, [this.FirstRef.current,this.SecondRef.current,this.ThirdRef.current], false,back )}}/>
        <div ref = {this.innerRef} className = {classes.slider__inner}>
      <FirstSlide ref = {this.FirstRef} props = {(click) => {sliderAnimation(this.wrapperRef.current, this.innerRef.current, [this.FirstRef.current,this.SecondRef.current,this.ThirdRef.current], click )}}/>
      <SecondSlide ref = {this.SecondRef}/>
      <ThirdSlide ref = {this.ThirdRef}/>
        </div>
       
    </div>
  );
  }
}

export default Slider;
