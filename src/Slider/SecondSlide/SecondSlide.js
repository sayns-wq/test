import classes from './SecondSlide.module.css'
import sperm from '../../img/Layer_3_copy_2.png'
import sperm1 from '../../img/Layer_3_copy_3.png'
import sperm2 from '../../img/Layer_3_copy_4.png'
import sperm3 from '../../img/Layer_3_copy_5.png'
import sperm4 from '../../img/Layer_3_copy_6.png'
import React from 'react'

class SecondSlide extends React.Component {
  render(){ 
    return (
      <div className={classes.slide}>
          <div className={classes.slide__massage}>
              Текст <br></br>сообщения
          </div>
          <div className={classes.slide__Block}></div>
          <div className={classes.slide__textBlock}>
          <div className={classes.slide__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</div>
          </div>
          <div className={classes.slide__sperms}>
            <img src = {sperm} className={classes.slide__sperm}></img>
            <img src = {sperm} className={classes.slide__sperm1}></img> 
            <img src = {sperm2} className={classes.slide__sperm2}></img>
            <img src = {sperm3} className={classes.slide__sperm3}></img>
            <img src = {sperm4} className={classes.slide__sperm4}></img>
            </div>
      </div>
    );
  }
  }
  export default SecondSlide;