
import house from '../img/house.png'
import classes from './Header.module.css'

function Header(props) {
  return (
    <header className = {classes.header}>
      <img src = {house} className = {classes.header__house} onClick = {() => props.props(true)}></img> 
      <span className = {classes.header__stick}>|</span>
      <span className = {classes.header__title}>PROJECT</span>
    </header>
  );
}

export default Header;
