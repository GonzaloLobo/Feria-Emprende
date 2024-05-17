import '../css/animate.css';
import '../css/style.css';

import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import ApexCharts from 'apexcharts';
import WOW from 'wowjs';

Alpine.plugin(intersect);
window.Alpine = Alpine;
Alpine.start();

window.wow = new WOW.WOW({
  live: false,
});

window.wow.init({
  offset: 50,
});

// ==== Token Chart


function createChart(chartElementId, chartOptions) {
  const chartElement = document.querySelector(`#${chartElementId}`);
  if (chartElement) {
    // Create and render the chart using the provided options
    new ApexCharts(chartElement, chartOptions).render();
  }
}

// Original chart options
const originalChartOptions = {
  series: [73, 55, 38, 20],
  chart: {
    type: "donut",
    width: 400,
  },
  colors: ["#2347B9", "#3363FF", "#8BA6FF", "#8696CA"],
  legend: {
    show: false,
  },
  stroke: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

// Copied chart options (different data)
const copiedChartOptions = {
  series: [50, 30, 20, 10],
  chart: {
    type: "donut",
    width: 400,
  },
  colors: ["#F7CAC9", "#F5936C", "#ED7957", "#E56738"],
  legend: {
    show: false,
  },
  stroke: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

// Third chart options (customize data and colors)
const thirdChartOptions = {
  series: [90, 20, 30, 10], // Same data series
  chart: {
    type: "donut",
    width: 400,
  },
  colors: [ 
    "grey",
    "#D7CCC8", 
    "#F5F5F4", 
    "#C6E0CC", 
  ],
  legend: {
    show: false,
  },
  stroke: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};


createChart('chart', originalChartOptions);

// Create and render the copied chart
createChart('chart2', copiedChartOptions);
createChart('chart3', thirdChartOptions);

// ==== darkToggler
const darkTogglerCheckbox = document.querySelector('#darkToggler');
const html = document.querySelector('html');

const darkModeToggler = () => {
  darkTogglerCheckbox.checked ? html.classList.remove('dark') : html.classList.add('dark');
};
darkModeToggler();

darkTogglerCheckbox.addEventListener('click', darkModeToggler);

// ====== scroll top js
function scrollTo(element, to = 0, duration = 500) {
  const start = element.scrollTop;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;

    const val = Math.easeInOutQuad(currentTime, start, change, duration);

    element.scrollTop = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

document.querySelector('.back-to-top').onclick = () => {
  scrollTo(document.documentElement);
};
