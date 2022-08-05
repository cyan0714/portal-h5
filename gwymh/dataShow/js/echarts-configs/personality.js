// 折柱混合
const lineBarP1 = echarts.init(document.getElementById('censusDetails1')) // 个体许可--数量趋势变化
const lineBarP2 = echarts.init(document.getElementById('chartsTotal1')) // 个体户数量变化趋势图

// 饼图
const pieP1 = echarts.init(document.getElementById('chartsUnique2')) // 个体资金额--分布情况
const pieP2 = echarts.init(document.getElementById('chartsUnique3')) // 登记状态占比

// 玫瑰图
const roseP1 = echarts.init(document.getElementById('censusDetails2')) // 个体许可数量--事项类型
// 折线图
const lineP1 = echarts.init(document.getElementById('chartsUnique1')) // 个体户经营异常情况
// 地图
const map = echarts.init(document.getElementById('chartsTotal2')) // 个体资金额--分布情况


const lineBarP1Option = {
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
  xAxis: [{
    type: 'category',
    data: ['2017', '2018', '2019', '2020', '2021'],
    axisPointer: {
      type: 'shadow'
    }
  }],
  yAxis: [{
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
      splitLine: {
        show: false
      }, // 去除网格线
      show: false, // 隐藏该轴
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [{
      name: '数量(次)',
      type: 'bar',
      barWidth: 30,
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
const roseP1Option = {
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
  series: [{
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
    data: [{
        value: 30,
        name: '医疗器械经营许可'
      },
      {
        value: 28,
        name: 'rose 2'
      },
      {
        value: 26,
        name: 'rose 3'
      },
      {
        value: 24,
        name: 'rose 4'
      },
      {
        value: 22,
        name: 'rose 5'
      },
      {
        value: 20,
        name: 'rose 6'
      },
      {
        value: 18,
        name: 'rose 7'
      },
      {
        value: 16,
        name: 'rose 8'
      }
    ]
  }]
};
const lineP1Option = {
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
  series: [{
    name: '被标记为经营异常的个体户数量',
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line',
    areaStyle: {}
  }]
};
// const colors = ["red", "green", "blue", "orange", "greenyellow"];
// let i = 0;
const pieP1Option = {
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
        position: "outside",
        color: "#7F8FA4",
        fontSize: 12,
        formatter: '{b}\n{c}(户)',
        // rich: {
        //   dot: {
        //     width: 6,
        //     height: 6,
        //     borderRadius: 3,
        //     backgroundColor: '#000'
        //   }
        // }
      },
      data: [{
          value: 1048,
          name: 'Search Engine'
        },
        {
          value: 1300,
          name: 'Direct'
        },
        {
          value: 484,
          name: 'Union Ads'
        },
        {
          value: 300,
          name: 'Video Ads'
        }
      ],
    },
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      // itemStyle: {
      // normal: {
      // color() {
      //   return colors[i++]
      // },
      // borderWidth: 2,
      // borderColor: 'rgb(9,37,71, 0.5)'
      // }
      // },
      label: {
        show: true,
        position: "inside",
        formatter: `{d}%`,
        fontSize: 10,
      },
      data: [{
          value: 1048,
          name: 'Search Engine'
        },
        {
          value: 1300,
          name: 'Direct'
        },
        {
          value: 484,
          name: 'Union Ads'
        },
        {
          value: 300,
          name: 'Video Ads'
        }
      ],
    },
  ]
};
const pieP2Option = {
  tooltip: {
    trigger: 'item'
  },
  // series 中放两个对象的目的是使饼图内部显示百分比，外部显示文字说明
  series: [{
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      label: {
        show: true,
        position: "outside",
        color: "#7F8FA4",
        fontSize: 12,
        formatter: '{b}\n{c}(户)',
        // rich: {
        //   dot: {
        //     width: 6,
        //     height: 6,
        //     borderRadius: 3,
        //     backgroundColor: '#000'
        //   }
        // }
      },
      data: [{
          value: 1048,
          name: 'Search Engine'
        },
        {
          value: 1300,
          name: 'Direct'
        },
        {
          value: 484,
          name: 'Union Ads'
        },
        {
          value: 300,
          name: 'Video Ads'
        }
      ],
    },
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      // itemStyle: {
      // normal: {
      // color() {
      //   return colors[i++]
      // },
      // borderWidth: 2,
      // borderColor: 'rgb(9,37,71, 0.5)'
      // }
      // },
      label: {
        show: true,
        position: "inside",
        formatter: `{d}%`,
        fontSize: 10,
      },
      data: [{
          value: 1048,
          name: 'Search Engine'
        },
        {
          value: 1300,
          name: 'Direct'
        },
        {
          value: 484,
          name: 'Union Ads'
        },
        {
          value: 300,
          name: 'Video Ads'
        }
      ],
    },
  ]
};
const lineBarP2Options = {
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
  xAxis: [{
    type: 'category',
    data: ['2017', '2018', '2019', '2020', '2021'],
    axisPointer: {
      type: 'shadow'
    }
  }],
  yAxis: [{
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
      splitLine: {
        show: false
      }, // 去除网格线
      show: false, // 隐藏该轴
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [{
      name: '数量(次)',
      type: 'bar',
      barWidth: 30,
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

// 海南地图
echarts.registerMap('hainan', haiNanCode);
let mapOption = {
  visualMap: {
    show: false,
    left: "right",
    min: 500000,
    max: 38000000,
    inRange: {
      color: [
        "#FEF7DB",
        "#FBEFBD",
        "#F7E5A0",
        "#F0E1A3",
        "#F0E1A3",
        "#E3D8AA",
        "#D8C888",
        "#CCB867",
        "#D3B954",
        "#DEBF42",
        "#ECC93E",
        "#FAD648",
        "#F7F1D6",
        "#FCF5D8",
      ],
    },
    calculable: false,
  },
  series: [{
    name: "Map",
    type: "map",
    aspectScale: 1,
    roam: false,
    map: 'hainan',
    label: {
      formatter: ["{b|{b}}", "{c|{c}}"].join("\n"),
      show: true,
      rich: {
        b: {
          color: "#000",
          lineHeight: 21,
          fontSize: 14,
        },
        c: {
          color: "#000",
          fontSize: 13,
        },
      },
    },
    itemStyle: {
      borderColor: "#F4DFCC",
      borderWidth: 1.2,
      shadowColor: "rgba(100, 100, 100, 0.6)",
      shadowBlur: 100,
      shadowOffsetX: -10,
      opacity: 0.9,
      emphasis: {
        areaColor: "#F4DFCC",
      },
    },
    data: [{
        name: "三沙市",
        value: 0,
        itemStyle: {
          borderColor: "#0e56c2"
        }
      },
      {
        name: "儋州市",
        value: 123
      },
      {
        name: "海口市",
        value: 3122
      },
      {
        name: "三亚市",
        value: 1055
      },
      {
        name: "白沙县",
        value: 102
      },
      {
        name: "保亭县",
        value: 508
      },
      {
        name: "昌江县",
        value: 86
      },
      {
        name: "澄迈县",
        value: 77
      },
      {
        name: "定安县",
        value: 45
      },
      {
        name: "东方市",
        value: 201
      },
      {
        name: "乐东县",
        value: 111
      },
      {
        name: "临高县",
        value: 53
      },
      {
        name: "陵水县",
        value: 12
      },
      {
        name: "琼海市",
        value: 331
      },
      {
        name: "琼中县",
        value: 108
      },
      {
        name: "屯昌县",
        value: 45
      },
      {
        name: "万宁市",
        value: 463
      },
      {
        name: "文昌市",
        value: 508
      },
      {
        name: "五指山市",
        value: 112
      },
      {
        name: "秀英区",
        value: 807
      },
      {
        name: "龙华区",
        value: 708
      },
      {
        name: "琼山区",
        value: 908
      },
      {
        name: "美兰区",
        value: 504
      },
      {
        name: "崖州区",
        value: 13
      },
      {
        name: "天涯区",
        value: 88
      },
      {
        name: "吉阳区",
        value: 47
      },
      {
        name: "海棠区",
        value: 14
      },
    ],
  }, ],

}


lineBarP1.setOption(lineBarP1Option)
lineBarP2.setOption(lineBarP2Options)

pieP1.setOption(pieP1Option)
pieP2.setOption(pieP2Option)

roseP1.setOption(roseP1Option)
lineP1.setOption(lineP1Option)

map.setOption(mapOption);