function lists(firstlist,secondlist, next, prev, leftbutton,rightbutton){
    leftbutton.style.backgroundColor = "#ff6a9f";
    if(next) {
        secondlist.style.display = '';
        firstlist.style.display = 'none';
        leftbutton.style.backgroundColor = "#fff";
        rightbutton.style.backgroundColor = "#ff6a9f";
    }
    
     else if(prev) {
          secondlist.style.display = 'none';
          firstlist.style.display = '';
          leftbutton.style.backgroundColor = "#ff6a9f";
          rightbutton.style.backgroundColor = "#fff";
    }
}
export default lists