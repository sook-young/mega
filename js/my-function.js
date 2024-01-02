function setActive(el){
  el.addClass('active');
}
function removeActive(el){
  el.removeClass('active');
}

function setHeight(el,tHeight){
  el.css({
    height:tHeight,
  })
}

function autoHeight(widthValue){
  return widthValue * 0.5645;
}