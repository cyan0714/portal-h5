// 折柱混合
const lineBarE1 = echarts.init(document.getElementById('enterprise-censusDetails1'))
const lineBarE2 = echarts.init(document.getElementById('enterprise-chartsTotal1'))

const roseE1 = echarts.init(document.getElementById('enterprise-censusDetails2'))
const lineE1 = echarts.init(document.getElementById('enterprise-chartsUnique3'))
const nestLoopE1 = echarts.init(document.getElementById('chartsUnique4')) // 行政处罚--违法及处罚类型占比


const lineBarE1Option = {
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
    left: 0,
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
      // name: '数量(次)',
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
      data: [200.6, 500.9, 900.0, 1800.4, 2200.7]
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
      data: [20, 30, 80, 85, 90]
    }
  ]
}
const lineBarE2Options = {
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
    left: 0,
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
      // name: '数量(次)',
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
      data: [200.6, 500.9, 900.0, 1800.4, 2200.7]
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
      data: [20, 30, 80, 85, 90]
    }
  ]
}
const roseE1Option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {c} ({d}%)'
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
      label: {
        formatter(text) {
          let txt = text.name.replace(/\S{5}/g, function (match) {
            console.log('match', match);
            return match + '\n'
          })
          return `${txt}:${text.value}件`
        },
      },
      data: [
        { value: 30, name: '医疗器械经营许可' },
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
const lineE1Option = {
  legend: {
    icon: 'square',
    left: 'left',
    itemWidth: 10,
    data: ['被标记为经营异常的个体户数量']
  },
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
      name: '被标记为经营异常的个体户数量',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {
      }
    }
  ]
};
const nestLoopE1Option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '40%'],
      label: {
        position: 'inner',
        fontSize: 12,
        color: '#fff'
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1548, name: '虚假宣传' },
        { value: 775, name: '商标违法'},
        { value: 679, name: '以次充好', selected: true  }
      ]
    },
    {
      name: 'Access From',
      type: 'pie',
      radius: ['55%', '68%'],
      label: {
        // formatter: `{b}:{c}件\n{d}%`
        formatter(text) {
          let txt = text.name.replace(/\S{5}/g, function (match) {
            console.log('match', match);
            return match + '\n'
          })
          return `${txt}：${text.value}件\n${text.percent}%`
        },
      },
      data: [
        { value: 1048, name: '警告' },
        { value: 335, name: '行政拘留' },
        { value: 310, name: '责令停业停产' },
        { value: 251, name: '没收违法所得和非法财产' },
        { value: 234, name: '罚款' },
      ]
    }
  ]
};


lineBarE1.setOption(lineBarE1Option)
lineBarE2.setOption(lineBarE2Options)

nestLoopE1.setOption(nestLoopE1Option)
roseE1.setOption(roseE1Option)
lineE1.setOption(lineE1Option)

