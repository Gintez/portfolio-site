import './style/main.scss';
import 'font-awesome/css/font-awesome.css';

var options = {
  scaleColor: false,
  trackColor: '#D3CBBD',
  barColor: '#348177',
  lineWidth: 6,
  lineCap: 'butt',
  size: 80
};

window.addEventListener('DOMContentLoaded', function() {
  [].forEach.call(document.querySelectorAll('.chart'),  function(el) {
    new EasyPieChart(el, options);
  });
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
});
