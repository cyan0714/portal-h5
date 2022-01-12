layui.define(['layer', 'form', 'laytpl'], function (exports) {
    "use strict";
  
    let $ = layui.$
        , form = layui.form
        , layarea = {
      _id: 0
      , config: {}
      , set: function (options) {
        let that = this;
        that.config = $.extend({}, that.config, options);
        return that;
      }
      , on: function (events, callback) {
        return layui.onevent.call(this, 'layarea', events, callback);
      }
    }
        , thisArea = function () {
      let that = this;
      return {
        layarea: function (files) {
          that.layarea.call(that, files);
        }
        , config: that.config
      }
    }
        , Class = function (options) {
      let that = this;
      that.config = $.extend({}, that.config, layarea.config, options);
      that.render();
    };
  
    let areaList = {
      province_list: {
        460000: '海南省'
      },
      city_list: {
        460100: '海口市',
        460200: '三亚市',
        460300: '三沙市',
        460400: '儋州市',
        469000: '省直辖县'
      },
      county_list: {
        460105: '秀英区',
        460106: '龙华区',
        460107: '琼山区',
        460108: '美兰区',
        460202: '海棠区',
        460203: '吉阳区',
        460204: '天涯区',
        460205: '崖州区',
        460321: '西沙群岛',
        460322: '南沙群岛',
        460323: '中沙群岛的岛礁及其海域',
        460401: '那大镇',
        460402: '和庆镇',
        460403: '南丰镇',
        460404: '大成镇',
        460405: '雅星镇',
        460406: '兰洋镇',
        460407: '光村镇',
        460408: '木棠镇',
        460409: '海头镇',
        460410: '峨蔓镇',
        460411: '王五镇',
        460412: '白马井镇',
        460413: '中和镇',
        460414: '排浦镇',
        460415: '东成镇',
        460416: '新州镇',
        469001: '五指山市',
        469002: '琼海市',
        469005: '文昌市',
        469006: '万宁市',
        469007: '东方市',
        469021: '定安县',
        469022: '屯昌县',
        469023: '澄迈县',
        469024: '临高县',
        469025: '白沙黎族自治县',
        469026: '昌江黎族自治县',
        469027: '乐东黎族自治县',
        469028: '陵水黎族自治县',
        469029: '保亭黎族苗族自治县',
        469030: '琼中黎族苗族自治县'
      },
	  town_list: [{"city_id":"460105","town":"秀英街道办事处"},{"city_id":"460105","town":"海秀街道办"},{"city_id":"460105","town":"长流镇"},{"city_id":"460105","town":"西秀镇"},{"city_id":"460105","town":"海秀镇"},{"city_id":"460105","town":"石山镇"},{"city_id":"460105","town":"永兴镇"},{"city_id":"460105","town":"东山镇"},{"city_id":"460106","town":"中山街道办事处"},{"city_id":"460106","town":"滨海街道办事处"},{"city_id":"460106","town":"金贸街道办事处"},{"city_id":"460106","town":"大同街道办事处"},{"city_id":"460106","town":"海垦街道办事处"},{"city_id":"460106","town":"金宇街道办事处"},{"city_id":"460106","town":"城西镇"},{"city_id":"460106","town":"龙桥镇"},{"city_id":"460106","town":"新坡镇"},{"city_id":"460106","town":"遵谭镇"},{"city_id":"460106","town":"龙泉镇"},{"city_id":"460107","town":"国兴街道办"},{"city_id":"460107","town":"府城街道办"},{"city_id":"460107","town":"滨江街道办"},{"city_id":"460107","town":"凤翔街道办"},{"city_id":"460107","town":"龙塘镇"},{"city_id":"460107","town":"云龙镇"},{"city_id":"460107","town":"红旗镇"},{"city_id":"460107","town":"三门坡镇"},{"city_id":"460107","town":"大坡镇"},{"city_id":"460107","town":"甲子镇"},{"city_id":"460107","town":"旧州镇"},{"city_id":"460107","town":"国营红明农场"},{"city_id":"460107","town":"国营东昌农场"},{"city_id":"460107","town":"省岭脚热带作物场"},{"city_id":"460107","town":"省长昌煤矿"},{"city_id":"460108","town":"海府街道办事处"},{"city_id":"460108","town":"蓝天街道办事处"},{"city_id":"460108","town":"博爱街道办事处"},{"city_id":"460108","town":"海甸街道办事处"},{"city_id":"460108","town":"人民路街道办事处"},{"city_id":"460108","town":"白龙街道办事处"},{"city_id":"460108","town":"和平南街道办事处"},{"city_id":"460108","town":"白沙街道办事处"},{"city_id":"460108","town":"新埠街道办事处"},{"city_id":"460108","town":"灵山镇"},{"city_id":"460108","town":"演丰镇"},{"city_id":"460108","town":"三江镇"},{"city_id":"460108","town":"大致坡镇"},{"city_id":"460108","town":"国营桂林洋农场"},{"city_id":"460108","town":"国营三江农场"},{"city_id":"460108","town":"罗牛山农场"},{"city_id":"460201","town":"海棠湾镇"},{"city_id":"460201","town":"吉阳镇"},{"city_id":"460201","town":"凤凰镇"},{"city_id":"460201","town":"崖城镇"},{"city_id":"460201","town":"天涯镇"},{"city_id":"460201","town":"育才镇"},{"city_id":"460201","town":"国营南田农场"},{"city_id":"460201","town":"国营南新农场"},{"city_id":"460201","town":"国营立才农场"},{"city_id":"460201","town":"国营南滨农场"},{"city_id":"460201","town":"河西区街道办"},{"city_id":"460201","town":"河东区街道办"},{"city_id":"460321","town":"永兴岛"},{"city_id":"460322","town":"永暑岛"},{"city_id":"460323","town":"中沙岛礁"},{"city_id":"469001","town":"通什镇"},{"city_id":"469001","town":"南圣镇"},{"city_id":"469001","town":"毛阳镇"},{"city_id":"469001","town":"番阳镇"},{"city_id":"469001","town":"畅好乡"},{"city_id":"469001","town":"毛道乡"},{"city_id":"469001","town":"水满乡"},{"city_id":"469001","town":"国营畅好农场"},{"city_id":"469002","town":"嘉积镇"},{"city_id":"469002","town":"万泉镇"},{"city_id":"469002","town":"石壁镇"},{"city_id":"469002","town":"中原镇"},{"city_id":"469002","town":"博鳌镇"},{"city_id":"469002","town":"阳江镇"},{"city_id":"469002","town":"龙江镇"},{"city_id":"469002","town":"潭门镇"},{"city_id":"469002","town":"塔洋镇"},{"city_id":"469002","town":"长坡镇"},{"city_id":"469002","town":"大路镇"},{"city_id":"469002","town":"会山镇"},{"city_id":"469002","town":"国营东太农场"},{"city_id":"469002","town":"国营东红农场"},{"city_id":"469002","town":"国营东升农场"},{"city_id":"469002","town":"彬村山华侨农场"},{"city_id":"469003","town":"那大镇"},{"city_id":"469003","town":"和庆镇"},{"city_id":"469003","town":"南丰镇"},{"city_id":"469003","town":"大成镇"},{"city_id":"469003","town":"雅星镇"},{"city_id":"469003","town":"兰洋镇"},{"city_id":"469003","town":"光村镇"},{"city_id":"469003","town":"木棠镇"},{"city_id":"469003","town":"海头镇"},{"city_id":"469003","town":"峨蔓镇"},{"city_id":"469003","town":"三都镇"},{"city_id":"469003","town":"王五镇"},{"city_id":"469003","town":"白马井镇"},{"city_id":"469003","town":"中和镇"},{"city_id":"469003","town":"排浦镇"},{"city_id":"469003","town":"东成镇"},{"city_id":"469003","town":"新州镇"},{"city_id":"469003","town":"国营西培农场"},{"city_id":"469003","town":"国营西联农场"},{"city_id":"469003","town":"国营蓝洋农场"},{"city_id":"469003","town":"国营八一农场"},{"city_id":"469003","town":"洋浦经济开发区"},{"city_id":"469003","town":"华南热作学院"},{"city_id":"469005","town":"文城镇"},{"city_id":"469005","town":"重兴镇"},{"city_id":"469005","town":"蓬莱镇"},{"city_id":"469005","town":"会文镇"},{"city_id":"469005","town":"东路镇"},{"city_id":"469005","town":"潭牛镇"},{"city_id":"469005","town":"东阁镇"},{"city_id":"469005","town":"文教镇"},{"city_id":"469005","town":"东郊镇"},{"city_id":"469005","town":"龙楼镇"},{"city_id":"469005","town":"昌洒镇"},{"city_id":"469005","town":"翁田镇"},{"city_id":"469005","town":"抱罗镇"},{"city_id":"469005","town":"冯坡镇"},{"city_id":"469005","town":"锦山镇"},{"city_id":"469005","town":"铺前镇"},{"city_id":"469005","town":"公坡镇"},{"city_id":"469005","town":"国营东路农场"},{"city_id":"469005","town":"国营南阳农场"},{"city_id":"469005","town":"国营罗豆农场"},{"city_id":"469006","town":"万城镇"},{"city_id":"469006","town":"龙滚镇"},{"city_id":"469006","town":"和乐镇"},{"city_id":"469006","town":"后安镇"},{"city_id":"469006","town":"大茂镇"},{"city_id":"469006","town":"东澳镇"},{"city_id":"469006","town":"礼纪镇"},{"city_id":"469006","town":"长丰镇"},{"city_id":"469006","town":"山根镇"},{"city_id":"469006","town":"北大镇"},{"city_id":"469006","town":"南桥镇"},{"city_id":"469006","town":"三更罗镇"},{"city_id":"469006","town":"国营东兴农场"},{"city_id":"469006","town":"国营东和农场"},{"city_id":"469006","town":"国营新中农场"},{"city_id":"469006","town":"兴隆华侨农场"},{"city_id":"469006","town":"地方国营六连林场"},{"city_id":"469007","town":"八所镇"},{"city_id":"469007","town":"东河镇"},{"city_id":"469007","town":"大田镇"},{"city_id":"469007","town":"感城镇"},{"city_id":"469007","town":"板桥镇"},{"city_id":"469007","town":"三家镇"},{"city_id":"469007","town":"四更镇"},{"city_id":"469007","town":"新龙镇"},{"city_id":"469007","town":"天安乡"},{"city_id":"469007","town":"江边乡"},{"city_id":"469007","town":"国营广坝农场"},{"city_id":"469007","town":"东方华侨农场"},{"city_id":"469021","town":"定城镇"},{"city_id":"469021","town":"新竹镇"},{"city_id":"469021","town":"龙湖镇"},{"city_id":"469021","town":"黄竹镇"},{"city_id":"469021","town":"雷鸣镇"},{"city_id":"469021","town":"龙门镇"},{"city_id":"469021","town":"龙河镇"},{"city_id":"469021","town":"岭口镇"},{"city_id":"469021","town":"翰林镇"},{"city_id":"469021","town":"富文镇"},{"city_id":"469021","town":"国营中瑞农场"},{"city_id":"469021","town":"国营南海农场"},{"city_id":"469021","town":"国营金鸡岭农场"},{"city_id":"469022","town":"屯城镇"},{"city_id":"469022","town":"新兴镇"},{"city_id":"469022","town":"枫木镇"},{"city_id":"469022","town":"乌坡镇"},{"city_id":"469022","town":"南吕镇"},{"city_id":"469022","town":"南坤镇"},{"city_id":"469022","town":"坡心镇"},{"city_id":"469022","town":"西昌镇"},{"city_id":"469022","town":"国营中建农场"},{"city_id":"469022","town":"国营中坤农场"},{"city_id":"469023","town":"金江镇"},{"city_id":"469023","town":"老城镇"},{"city_id":"469023","town":"瑞溪镇"},{"city_id":"469023","town":"永发镇"},{"city_id":"469023","town":"加乐镇"},{"city_id":"469023","town":"文儒镇"},{"city_id":"469023","town":"中兴镇"},{"city_id":"469023","town":"仁兴镇"},{"city_id":"469023","town":"福山镇"},{"city_id":"469023","town":"桥头镇"},{"city_id":"469023","town":"大丰镇"},{"city_id":"469023","town":"国营红光农场"},{"city_id":"469023","town":"国营西达农场"},{"city_id":"469023","town":"国营金安农场"},{"city_id":"469024","town":"临城镇"},{"city_id":"469024","town":"波莲镇"},{"city_id":"469024","town":"东英镇"},{"city_id":"469024","town":"博厚镇"},{"city_id":"469024","town":"皇桐镇"},{"city_id":"469024","town":"多文镇"},{"city_id":"469024","town":"和舍镇"},{"city_id":"469024","town":"南宝镇"},{"city_id":"469024","town":"新盈镇"},{"city_id":"469024","town":"调楼镇"},{"city_id":"469024","town":"国营红华农场"},{"city_id":"469024","town":"国营加来农场"},{"city_id":"469025","town":"牙叉镇"},{"city_id":"469025","town":"七坊镇"},{"city_id":"469025","town":"邦溪镇"},{"city_id":"469025","town":"打安镇"},{"city_id":"469025","town":"细水乡"},{"city_id":"469025","town":"元门乡"},{"city_id":"469025","town":"南开乡"},{"city_id":"469025","town":"阜龙乡"},{"city_id":"469025","town":"青松乡"},{"city_id":"469025","town":"金波乡"},{"city_id":"469025","town":"荣邦乡"},{"city_id":"469025","town":"国营白沙农场"},{"city_id":"469025","town":"国营龙江农场"},{"city_id":"469025","town":"国营邦溪农场"},{"city_id":"469026","town":"石碌镇"},{"city_id":"469026","town":"叉河镇"},{"city_id":"469026","town":"十月田镇"},{"city_id":"469026","town":"乌烈镇"},{"city_id":"469026","town":"昌化镇"},{"city_id":"469026","town":"海尾镇"},{"city_id":"469026","town":"七叉镇"},{"city_id":"469026","town":"王下乡"},{"city_id":"469026","town":"国营红林农场"},{"city_id":"469026","town":"国营霸王岭林场"},{"city_id":"469026","town":"海南矿业联合有限公司"},{"city_id":"469027","town":"抱由镇"},{"city_id":"469027","town":"万冲镇"},{"city_id":"469027","town":"大安镇"},{"city_id":"469027","town":"志仲镇"},{"city_id":"469027","town":"千家镇"},{"city_id":"469027","town":"九所镇"},{"city_id":"469027","town":"利国镇"},{"city_id":"469027","town":"黄流镇"},{"city_id":"469027","town":"佛罗镇"},{"city_id":"469027","town":"尖峰镇"},{"city_id":"469027","town":"莺歌海镇"},{"city_id":"469027","town":"国营山荣农场"},{"city_id":"469027","town":"国营乐光农场"},{"city_id":"469027","town":"国营保国农场"},{"city_id":"469027","town":"国营尖峰岭林业公司"},{"city_id":"469027","town":"国营莺歌海盐场"},{"city_id":"469028","town":"椰林镇"},{"city_id":"469028","town":"光坡镇"},{"city_id":"469028","town":"三才镇"},{"city_id":"469028","town":"英州镇"},{"city_id":"469028","town":"隆广镇"},{"city_id":"469028","town":"文罗镇"},{"city_id":"469028","town":"本号镇"},{"city_id":"469028","town":"新村镇"},{"city_id":"469028","town":"黎安镇"},{"city_id":"469028","town":"提蒙乡"},{"city_id":"469028","town":"群英乡"},{"city_id":"469028","town":"国营岭门农场"},{"city_id":"469028","town":"国营南平农场"},{"city_id":"469028","town":"国营吊罗山林业公司"},{"city_id":"469029","town":"保城镇"},{"city_id":"469029","town":"什玲镇"},{"city_id":"469029","town":"加茂镇"},{"city_id":"469029","town":"响水镇"},{"city_id":"469029","town":"新政镇"},{"city_id":"469029","town":"三道镇"},{"city_id":"469029","town":"六弓乡"},{"city_id":"469029","town":"南林乡"},{"city_id":"469029","town":"毛感乡"},{"city_id":"469029","town":"国营新星农场"},{"city_id":"469029","town":"海南保亭热带作物研究所"},{"city_id":"469029","town":"国营金江农场"},{"city_id":"469029","town":"国营三道农场"},{"city_id":"469030","town":"营根镇"},{"city_id":"469030","town":"湾岭镇"},{"city_id":"469030","town":"黎母山镇"},{"city_id":"469030","town":"和平镇"},{"city_id":"469030","town":"长征镇"},{"city_id":"469030","town":"红毛镇"},{"city_id":"469030","town":"中平镇"},{"city_id":"469030","town":"吊罗山乡"},{"city_id":"469030","town":"上安乡"},{"city_id":"469030","town":"什运乡"},{"city_id":"469030","town":"国营阳江农场"},{"city_id":"469030","town":"国营乌石农场"},{"city_id":"469030","town":"国营加钗农场"},{"city_id":"469030","town":"国营长征农场"},{"city_id":"469030","town":"国营黎母山林业公司"}]
    };
  
  
    Class.prototype.config = {
      elem: '',
      data: {
        province: '--选择市--',
        city: '--选择区--',
        county: '--选择镇--',
      },
      change: function(result){}
    };
  
    Class.prototype.index = 0;
  
    Class.prototype.render = function () {
      let that = this, options = that.config;
      options.elem = $(options.elem);
      options.bindAction = $(options.bindAction);
  
      that.events();
    };
  
    Class.prototype.events = function () {
      let that = this, options = that.config, index;
      let provinceFilter = 'province-' + layarea._id;
      let cityFilter = 'city-' + layarea._id;
      let countyFilter = 'county-' + layarea._id;
  
      let provinceEl = options.elem.find('.province-selector');
      let cityEl = options.elem.find('.city-selector');
      let countyEl = options.elem.find('.county-selector');
  
      //filter
      if(provinceEl.attr('lay-filter')){
        provinceFilter = provinceEl.attr('lay-filter');
      }
      if(cityEl.attr('lay-filter')){
        cityFilter = cityEl.attr('lay-filter');
      }
      if(countyEl.attr('lay-filter')){
        countyFilter = countyEl.attr('lay-filter');
      }
      provinceEl.attr('lay-filter', provinceFilter);
      cityEl.attr('lay-filter', cityFilter);
      countyEl.attr('lay-filter', countyFilter);
  
      //获取默认值
      if(provinceEl.data('value')){
        options.data.province = provinceEl.data('value');
      }
      if(cityEl.data('value')){
        options.data.city = cityEl.data('value');
      }
      if(countyEl.data('value')){
        options.data.county = countyEl.data('value');
      }
      provinceEl.attr('lay-filter', provinceFilter);
      cityEl.attr('lay-filter', cityFilter);
      countyEl.attr('lay-filter', countyFilter);
  
      //监听结果
      form.on('select('+provinceFilter+')', function(data){
        options.data.province = data.value;
        let code = getCode('province', data.value);
        renderCity(code);
  
        options.change(options.data);
      });
      form.on('select('+cityFilter+')', function(data){
        options.data.city = data.value;
        let code = getCode('city', data.value);
        renderCounty(code);
  
        options.change(options.data);
      });
      form.on('select('+countyFilter+')', function(data){
        options.data.county = data.value;
  
        options.change(options.data);
      });
  
      renderProvince();
  
      //查找province
      function renderProvince(){
        let tpl = '';
        let provinceList = getList("province");
        let currentCode = '';
        let currentName = '';
        provinceList.forEach(function(_item){
          if (!currentCode){
            currentCode = _item.code;
            currentName = _item.name;
          }
          if(_item.name === options.data.province){
            currentCode = _item.code;
            currentName = _item.name;
          }
          tpl += '<option value="'+_item.name+'">'+_item.name+'</option>';
        });
        options.data.province = currentName;
        provinceEl.html(tpl);
        provinceEl.val(options.data.province);
        form.render('select');
        renderCity(currentCode);
      }
  
      function renderCity(provinceCode){
        let tpl = '';
        let cityList = getList('city', provinceCode.slice(0, 2));
        let currentCode = '';
        let currentName = '';
        cityList.forEach(function(_item){
          if (!currentCode){
            currentCode = _item.code;
            currentName = _item.name;
          }
          if(_item.name === options.data.city){
            currentCode = _item.code;
            currentName = _item.name;
          }
          tpl += '<option value="'+_item.name+'">'+_item.name+'</option>';
        });
        options.data.city = currentName;
        cityEl.html(tpl);
        cityEl.val(options.data.city);
        form.render('select');
        renderCounty(currentCode);
      }
  
      function renderCounty(cityCode){
        let tpl = '';
        let countyList = getList('county', cityCode.slice(0, 4));
        let currentCode = '';
        let currentName = '';
        countyList.forEach(function(_item){
          if (!currentCode){
            currentCode = _item.code;
            currentName = _item.name;
          }
          if(_item.name === options.data.county){
            currentCode = _item.code;
            currentName = _item.name;
          }
          tpl += '<option value="'+_item.name+'">'+_item.name+'</option>';
        });
        options.data.county = currentName;
        countyEl.html(tpl);
        countyEl.val(options.data.county);
  
        form.render('select');
      }
  
      function getList(type, code) {
        let result = [];
  
        if (type !== 'province' && !code) {
          return result;
        }
  
        let list = areaList[type + "_list"] || {};
        result = Object.keys(list).map(function (code) {
          return {
            code: code,
            name: list[code]
          };
        });
  
        if (code) {
          // oversea code
          if (code[0] === '9' && type === 'city') {
            code = '9';
          }
  
          result = result.filter(function (item) {
            return item.code.indexOf(code) === 0;
          });
        }
  
        return result;
      }
  
      function getCode(type, name){
        let code = '';
        let list = areaList[type + "_list"] || {};
        layui.each(list, function(_code, _name){
          if(_name === name){
            code = _code;
          }
        });
  
        return code;
      }
    };
  
    layarea.render = function (options) {
      let inst = new Class(options);
      layarea._id++;
      return thisArea.call(inst);
    };
  
    //暴露接口
    exports('layarea', layarea);
  });