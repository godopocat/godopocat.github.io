   function engl() {
            //Переключение на английский
            document.getElementById('rusl').style.display="none"
            document.getElementById('engl').style.display="block"
        }

        function rusl() {
            //Переключение на русский язык
            document.getElementById('rusl').style.display="block"
            document.getElementById('engl').style.display="none"
        }

        function list() {
            //Открывает лист предметов
            document.getElementById('listru').style.display="block"
            document.getElementById('listeng').style.display="block"
            document.getElementById('menuru').style.display="none"
            document.getElementById('menueng').style.display="none"
        }
            
        function contacts() {
            document.getElementById('contactsru').style.display="block"
            document.getElementById('contactseng').style.display="block"
            document.getElementById('menuru').style.display="none"
            document.getElementById('menueng').style.display="none"
        }

        function back() {
            //Производит переход обратно в меню
            document.getElementById('listru').style.display="none"
            document.getElementById('listeng').style.display="none"
            document.getElementById('contactsru').style.display="none"
            document.getElementById('contactseng').style.display="none"
            document.getElementById('menuru').style.display="block"
            document.getElementById('menueng').style.display="block"
        }
