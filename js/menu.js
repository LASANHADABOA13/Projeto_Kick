function menur(){
    let menu = document.getElementById("m_menu")
    
    if(menu.className == "menu"){
        menu.className += " responsive";
    }
    else{
        menu.className = "menu";
    }
}