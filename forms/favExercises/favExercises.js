
var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
    selExercises.clear()   
  for (i = 0; i <= exercises.length - 1; i++) 
    selExercises.addItem(exercises[i])
      for (i = 0; i <= coreExercises.length - 1; i++) 
    selExercises.addItem(coreExercises[i])
}

btnShow.onclick=function(){
  let message = `You chose: `
  for (i = 0; i <= selExercises.text.length - 1; i++)
     message = message + "<br />" + selExercises.text[i]
  NSB.MsgBox(message)
}

btnMob.onclick=function(){
  ChangeForm(mobileNav)
}
