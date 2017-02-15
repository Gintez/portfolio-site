require ('./style/main.scss');

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
});



