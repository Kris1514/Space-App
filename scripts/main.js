var ctx = document.getElementById("myChart").getContext("2d"); // Получение контекста рисования холста по идентификатору
var myChart = new Chart(ctx, {
  // Создание объекта графика с помощью конструктора Chart
  type: "line", // Установка типа графика - линейный
  data: {
    // Установка данных для графика
    labels: ["2015", "2016", "2017", "2018", "2019", "2020"], // Массив меток для оси X
    datasets: [
      {
        // Массив наборов данных для графика
        label: "", // Подпись набора данных
        data: [38, 43, 49, 51, 54, 57], // Массив значений для оси Y
        borderColor: [
          // Массив цветов для границы линии
          "rgba(255,99,132)", // Красный цвет в формате RGBA
        ],
        borderWidth: 2, // Толщина границы линии в пикселях
        lineTension: 0.5,
        fill: false,
        pointBackgroundColor: "red", // Цвет точек
        pointBorderColor: "red", // Цвет границы точек
        pointRadius: 5, // Размер точек
      },
    ],
  },
  options: {
    // Установка опций для графика
    legend: {
      display: false,
    },
    scales: {
      // Установка параметров для шкал графика
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            padding: 40,
            fontFamily: "PF Agora Sans Pro", // Шрифт значений оси X
            fontColor: "#666666", // Цвет значений оси X
            fontStyle: "bold",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
          }, // Установка параметров для оси Y
          ticks: {
            beginAtZero: true,
            min: 30, // Установка минимального значения оси Y
            max: 60, // Установка максимального значения оси Y
            stepSize: 5, // Установка шага между значениями оси Y
            padding: 30,
            fontFamily: "PF Agora Sans Pro", // Шрифт значений оси X
            fontColor: "#999999", // Цвет значений оси X
            callback: function (value, index, values) {
              // Определение функции для форматирования значений оси Y
              return Math.round(value) + "%"; // Округление числа до двух знаков после запятой и добавление знака процента
            },
          },
        },
      ],
    },
  },
});


const createEmptyPoints = (count) => {
    const emptyPoints = [];
    for (let i = 0; i < count; i++) {
      emptyPoints.push(null);
    }
    return emptyPoints;
  };
  // Данные и конфигурация для радарного графика
  const data = {
    datasets: [{
      data: createEmptyPoints(3).concat([3, 2, 3, 1, 2, 2, 3], createEmptyPoints(3)),
      backgroundColor: "transparent", // Прозрачный фон
      borderColor: "transparent", // Красный цвет границы
      pointBackgroundColor: "red", // Красный цвет фона точек
      pointBorderColor: "white", // Красный цвет границы точек
      pointRadius: 10, // Радиус точек
      pointStyle: 'circle' // Стиль точек (круг)
    }
   ]
  };

  // Получение контекста холста
  const ctx1 = document.getElementById('myChart1').getContext('2d');

  // Создание экземпляра радарного графика
  const myChart1 = new Chart(ctx1, {
    type: 'radar',
    data: {
       labels: ['', '', '', 'Налог на ввоз', 'Расходы', 'Прибыль', 'Надбавка N2', 'Пошлина в таую-то структуру', 'Закупка', 'Продажи', '', '', ''], // Метки для каждой точки
      datasets: data.datasets // Наборы данных
    },
    options: {
        plugins: {
            tooltip: {
                intersect: false,
                rtl: true
            }
        }, // Добавить плагин для меток данных
      scales: {
        r: {
            beginAtZero: true,
            grid: {
            circular: true, // Круговая сетка
            color: "black",// Черный цвет сетки
            },
            
            pointLabels: {
                display: false, // Отображение названий угловых линий
            },
            
            angleLines: {
            display: false,
            pointLabels: {
                display: false// Отображение названий угловых линий
                }
            },
            min: 0,
            max: 3,
            ticks: {
            display: false,
            stepSize: 1},
            startAngle: -500, // Устанавливаем начальный угол в градусах
        }
      }
    }
  });



  const mySwiper = new Swiper('.swiper-container', {
            // Настройки слайдера
            loop: true, // Зацикливание слайдов
            slidesPerView: 1, // Отображение одного слайда за раз
            pagination: {
                el: '.swiper-pagination-bullets', // Элемент для точек
                clickable: true, // Возможность клика по точкам
            },
        });

