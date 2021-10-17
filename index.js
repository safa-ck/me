const close_menu=()=>{
  if(is_mobile()){
    document.querySelector('.menu').style.display='block';
    document.querySelector('.close').style.display='none';
    document.querySelector('.navbar').style.display='none';
  }
}

const is_mobile=()=>window.innerWidth<696

document.querySelector('.menu').addEventListener('click',()=>{
  document.querySelector('.menu').style.display='none';
  document.querySelector('.close').style.display='block';
  document.querySelector('.navbar').style.display='grid';
});
document.querySelector('.close').addEventListener('click',close_menu);
document.querySelectorAll('.navbar a').forEach(i=>{
  i.addEventListener('click',(e)=>{
    e.preventDefault()
    close_menu();
    let hash=e.target.href.split('#').pop()
    if(hash){
      document.querySelector(`#${hash}`).scrollIntoView({behavior:"smooth",block:"center"});
    }
  });
});