var index = 0;



function changeColors() {
    var colors= ["Silver","Black","White","Red","Lime","Blue","Yellow	","Cyan",
                 "Magenta","Gray","Maroon","Olive","Green","Purple","Teal","Navy" ];
                 

    document.getElementsByTagName("body")[0].
  style.background = colors[index++];

  if(index > colors.length-1)
  index=0;

}


