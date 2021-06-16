window.addEventListener('DOMContentLoaded', () => {
    const contans = document.querySelectorAll('.block__text'),
          tabs = document.querySelectorAll('.block__tab'),
          tabPerent = document.querySelector('.block__tabs');

    function removeTabContent() {
        contans.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('block__tab_activ');
        });
    }

    function showTabContent(i = 0) {
        contans[i].style.display = 'block';
        tabs[i].classList.add('block__tab_activ');

    }

    removeTabContent();
    showTabContent();

    tabPerent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('block__tab')) {
            tabs.forEach((item, i) => {
                if(target == item) {
                    removeTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});
