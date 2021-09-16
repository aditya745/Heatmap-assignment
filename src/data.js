const generateData = (count, yrange) => {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
        yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
};

const initialState = {
    options: {
      chart: {
        height: 350,
        type: "heatmap",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#7EC17E"],
      xaxis: {
          categories: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "Aug",
              "September",
              "October",
              "November",
              "December"
          ]
      },
      title: {
        text: "Activity chart",
        align: "center"
      },
    },
    series: [
      {
        name: "Monday",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Tuesday",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Wednesday",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Thursday",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Friday",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Saturday",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Sunday",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
    ],
}

export default initialState;