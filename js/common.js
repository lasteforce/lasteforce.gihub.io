document.addEventListener('DOMContentLoaded', function(){

    setTimeout(function(){
        document.querySelector('.nav-menu').style.display = 'block';
    }, 1000);

    const btn = document.getElementById('firstviewBtn');
    // console.log(btn);

    document.querySelector('.header-navi').addEventListener('click', function(){
        document.querySelector('.menu-btn').classList.toggle('close');
        document.querySelector('.nav-menu').classList.toggle('active');
        if(btn !== null) {
            btn.classList.toggle('nav-menu-active');
        }
    });


    const targets = document.getElementsByClassName('fade');
        for(let i = targets.length; i--;){
            let observer = new IntersectionObserver((entries, observer) => {
            for(let j = entries.length; j--;){
                if (entries[j].isIntersecting) {
                    entries[j].target.classList.add('active');
                    observer.unobserve(entries[j].target);
                }
            }
        });
        observer.observe(targets[i]);
    }


    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        // console.log(scrollTop);

        //.headerの表示・非表示
        if (scrollTop > lastScrollTop){
            header.style.opacity = '0';
            document.querySelector('.menu-btn').classList.remove('close');
            document.querySelector('.nav-menu').classList.remove('active');
            if(btn !== null) {
                btn.classList.remove('nav-menu-active');
            }
        } else {
            header.style.opacity = '1';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;


    }, false);

});

