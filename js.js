var greetingEls = document.getElementsByClassName('greeting');
        var langElsNodeList = document.querySelectorAll('.radio');
        var langEls = Array.from(langElsNodeList);
        var $submitButton = document.forms[0].elements[3];

        //Logic for when user has previously submitted prferred language or if he's first-timer 
        if (localStorage.lang) {
            var currentLang = localStorage.lang;
            showLocalizedGreeting();
        } else {
            var currentLang = 'ua';
            showLocalizedGreeting();
        };
        //Adding event globally and not in previous block so user can change his/hers language preferences later
        for (i = 0; i < langEls.length; i++) {
            langEls[i].addEventListener('click', changeLang);
        };

        $submitButton.addEventListener('click', saveToStorage);

        function saveToStorage() {
            localStorage.setItem('lang', currentLang);
            alert('Your preferred and saved language is ' + currentLang);
        };

        function changeLang(event) {
            currentLang = event.target.value;
            showLocalizedGreeting();
        };

        function showLocalizedGreeting() {
            for (var i = 0; i < greetingEls.length; i++) {
                if (greetingEls[i].getAttribute('data-version') == currentLang) {
                    greetingEls[i].style.display = 'block';
                } else {
                    greetingEls[i].style.display = 'none';
                }
            }
        };