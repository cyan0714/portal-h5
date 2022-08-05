const censusDetails1 = echarts.init(document.getElementById('censusDetails1'))
const censusDetails2 = echarts.init(document.getElementById('censusDetails2'))
const chartsUnique1 = echarts.init(document.getElementById('chartsUnique1'))
const chartsUnique2 = echarts.init(document.getElementById('chartsUnique2'))

const censusDetails1Option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {
    data: ['数量(次)', '涨幅']
  },
  xAxis: [
    {
      type: 'category',
      data: ['2017', '2018', '2019', '2020', '2021'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '数量(次)',
      min: 0,
      max: 4000,
      interval: 1000
    },
    {
      type: 'value',
      name: '涨幅',
      min: 0,
      max: 100,
      interval: 5,
      splitLine: { show: false }, // 去除网格线
      show: false, // 隐藏该轴
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [
    {
      name: '数量(次)',
      type: 'bar',
      barWidth : 30,
      data: [200.6, 500.9, 900.0, 800.4, 1200.7]
    },
    {
      name: '涨幅',
      type: 'line',
      label: {
        show: true,
        position: 'top',
        formatter: function (value) {
          return value.value + '%'
        }
      },
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' °C'
        }
      },
      data: [20, 30, 80, 4.5, 6.3]
    }
  ]
}

const censusDetails2Option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    left: 'center',
    top: 'bottom',
    data: [
      'rose1',
      'rose2',
      'rose3',
      'rose4',
      'rose5',
      'rose6',
      'rose7',
      'rose8'
    ]
  },
  series: [
    {
      name: 'Area Mode',
      type: 'pie',
      radius: [20, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 5
      },
      data: [
        { value: 30, name: 'rose 1' },
        { value: 28, name: 'rose 2' },
        { value: 26, name: 'rose 3' },
        { value: 24, name: 'rose 4' },
        { value: 22, name: 'rose 5' },
        { value: 20, name: 'rose 6' },
        { value: 18, name: 'rose 7' },
        { value: 16, name: 'rose 8' }
      ]
    }
  ]
};

const chartsUnique1Option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
    
  },
  yAxis: {
    type: 'value',
    backgroundColor: 'red',
    min: 0,
      max: 1500,
      interval: 500
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {
      }
    }
  ]
};

const chartsUnique2Option = {
  tooltip: {
    trigger: 'item'
  },
  // series 中放两个对象的目的是使饼图内部显示百分比，外部显示文字说明
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      label: {
        show: true,
        position: "inside",
        formatter: `{d}%`,
        fontSize: 10,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
    },
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      label: {
        show: true,
        position: "outside",
        color: "#7F8FA4",
        fontSize: 12,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
    }
  ]
};

censusDetails1.setOption(censusDetails1Option)
censusDetails2.setOption(censusDetails2Option)

chartsUnique1.setOption(chartsUnique1Option)
chartsUnique2.setOption(chartsUnique2Option)
