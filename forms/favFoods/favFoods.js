
let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

favFoods.onshow=function(){
  lstFoods.clear()   
  for (i = 0; i <= goodFoods.length - 1; i++) 
    lstFoods.addItem(goodFoods[i])
}

lstFoods.onclick=function(choice){
    if (typeof(choice) == "object") return; 
    NSB.MsgBox("You picked " + goodFoods[choice] + " -that is a great choice")
}

btnNxtForm.onclick=function(){
  ChangeForm(dessertVoting);
}
