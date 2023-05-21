// --------- completed ---------------------
// document.addEventListener('mousemove', parallax);
// function parallax(e) {
//     document.querySelectorAll(".object").forEach(function(move){

//         let moving_value = move.getAttribute('data-value');
//         let x = e.clientX * moving_value /250;
//         let y = e.clientY * moving_value /250;

//         move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
//     });
// }


ScrollReveal({
    reset: true,
    distance: "80px",
    duration: "2500",
    delay: 400,
  });

  ScrollReveal().reveal('.main-title', { delay: 500 });
  ScrollReveal().reveal('.aboutme-text', { delay: 200 , origin: 'right'});
  ScrollReveal().reveal('.pj figure img', { delay: 200 , origin: 'left' });
  ScrollReveal().reveal('.link', { delay: 200 , origin: 'right' });

  ScrollReveal().reveal('.stack img', { origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('.overlay', { delay: 0 , origin: 'right' });
  ScrollReveal().reveal('.flex', { delay: 0 , origin: 'bottom' });
  ScrollReveal().reveal('#m-1', { delay: -500 , origin: 'bottom' });
  ScrollReveal().reveal('#m-2', { delay: -400 , origin: 'bottom' });
  ScrollReveal().reveal('#m-3', { delay: -200 , origin: 'bottom' });
  ScrollReveal().reveal('#m-4', { delay: -200 , origin: 'bottom' });
  ScrollReveal().reveal('#flash-1', { delay: -200 , origin: 'right' });
  ScrollReveal().reveal('#flash-2', { delay: -200 , origin: 'left' });
  ScrollReveal().reveal('#note-1, #note-2, #note-3', { delay: -200 , origin: 'bottom' });

  document.addEventListener('mousemove', parallax);
  function parallax(e) {
      document.querySelectorAll(".object").forEach(function(move){

          let moving_value = move.getAttribute('data-value');
          let x = e.clientX * moving_value /250;
          let y = e.clientY * moving_value /250;

          move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      });
  }

  function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  $(document).ready(function() {

    $('.allContainer-btn').click(function() {

        TweenMax.to('.allContainer-btn', 1, {
            y: -100,
            opacity: 0
        });

        TweenMax.to('.allContainer-text', 1, {
            y: -400,
            opacity: 0,
            ease: Power2.easeInOut,
            delay: 0.5
        });

        TweenMax.to('.allContainer', 2, {
            top: '-110%',
            delay: 1,
            ease: Expo.easeInOut,
        });

    })
  });