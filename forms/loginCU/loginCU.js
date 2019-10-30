
btnLogin.onclick=function(){
   req1 = ""
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inpPass.value);
    if (req1.status == 200) { //everything worked.
        lblWelcome.style.display = "block"  // none to hide
        lblResult.style.display = "block"  // none to hide
        if(req1.responseText==1){
        ChangeForm(favFoods)
      }else{
        inptNetID.value= ''
        inpPass.value= ''
        lblResult.style.display = "block"  // none to hide
        lblResult.value = "The authentication code is " + req1.responseText
        lblWelcome.value="Error Connection Not Made: " + req1.status + " readystate " + req1.readyState + " status text " + req1.statusText + ". Please Try Again!";
        }
        }
        }


btnForm.onclick=function(){
  ChangeForm(favFoods)
}
