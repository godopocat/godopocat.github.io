function engl() {
            //Переключение на английский
            fader()
            setTimeout(() => {
            document.getElementById('rusl').style.display="none"
            document.getElementById('engl').style.display="block"
            }, 1000)
}
function rusl() {
            //Переключение на русский язык
            fader()
            setTimeout(() => {
                document.getElementById('rusl').style.display="block"
            document.getElementById('engl').style.display="none"
            }, 1000);
                      
}

function list() {
            //Открывает лист предметов
            fader()
            setTimeout(() => {
            document.getElementById('listru').style.display="block"
            document.getElementById('listeng').style.display="block"
            document.getElementById('menuru').style.display="none"
            document.getElementById('menueng').style.display="none"
            }, 1000);
            
}
    
function contacts() {
    fader()
    setTimeout(() => {
        document.getElementById('contactsru').style.display="block"
            document.getElementById('contactseng').style.display="block"
            document.getElementById('menuru').style.display="none"
            document.getElementById('menueng').style.display="none"
    }, 1000);
            
}

function back() {
            //Производит переход обратно в меню
            fader()
            setTimeout(() => {
                document.getElementById('listru').style.display="none"
            document.getElementById('listeng').style.display="none"
            document.getElementById('contactsru').style.display="none"
            document.getElementById('contactseng').style.display="none"
            document.getElementById('menuru').style.display="block"
            document.getElementById('menueng').style.display="block"
            }, 1000);
            
}

for (let index = 0; index < document.getElementsByClassName('btn').length; index++) {
    document.getElementsByClassName('btn').item(index).attributes.onclick="fader()"
}

document.getElementsByClassName('btn')

function fader() {
    if (typeof g !== 'undefined') {
       clearInterval(g)
    }
    else{
    opacityb = 100
        let g = setInterval(() => {
            opacityb-=1
            var opacityc = Math.abs(opacityb)
            document.getElementById('fader').style.opacity=opacityc+"%"
            if(opacityb== -100){
                clearInterval(g)
                opacityb = 100
            }
        }, 10);
    
    }
}