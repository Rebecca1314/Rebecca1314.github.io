	//鼠标点击特效
	//页面加载事件
	jQuery(function () {
	 
	//声明变量
	//鼠标点击次数
	var clickNumber = 0;
	 
	//给页面创建点击事件
	$("html").click(function (e) {
	 
	//创建颜色库
	//随机颜色
	//创建颜色码
	//前颜色库
	const beforeColors = new Array('00', '11', '22', '33', '44', '55', '66', '77', '88', '99',
	'aa', 'bb', 'cc', 'dd', 'ee', 'ff');
	//中颜色库
	const middleColors = new Array('00', '11', '22', '33', '44', '55', '66', '77', '88', '99',
	'aa', 'bb', 'cc', 'dd', 'ee', 'ff');
	//后颜色库
	const behindColors = new Array('00', '11', '22', '33', '44', '55', '66', '77', '88', '99',
	'aa', 'bb', 'cc', 'dd', 'ee', 'ff');
	//内容
	const contens = new Array('富强','民主','文明','和谐','自由','平等 ','爱国','法治','公正','敬业','诚信','友善');
	 
	//从颜色库选取一种颜色;当然这是数组的方式;随机性
	//前颜色码
	var beforeColor = Math.floor(Math.random() * beforeColors.length);
	//中颜色码
	var middleColor = Math.floor(Math.random() * middleColors.length);
	//后颜色码
	var behindColor = Math.floor(Math.random() * behindColors.length);
	//内容
	var conten = Math.floor(Math.random() * contens.length);
	 
	// console.log("前颜色码 = " + 前颜色码 + "; 中颜色码 = " + 中颜色码 + "; 后颜色码 = " + 后颜色码 + ";")
	// console.log("#" + 前颜色码库[前颜色码] + 中颜色码库[中颜色码] + 后颜色码库[后颜色码]);
	 
	//每当鼠标点击页面增加点击数
	clickNumber++;
	 
	//创建元素; 创建的元素是span元素,这个元素的内容是"鼠标点击了第" + 点击数(这个是一个变量) + "次"
	//var 创建元素 = $("<span>").text("鼠标点击了第" + 点击数 + "次");
	var element = $('<span style=\'font-size: 16px;\'>').text('❤ '+contens[conten]+' ❤');
	 
	//在页面上添加span元素
	jQuery("html").append(element);
	 
	//获取鼠标点击坐标
	//横坐标
	var abscissa = e.pageX;
	//纵坐标
	var ordinate = e.pageY;
	 
	//给span元素添加css样式
	element.css({
	"z-index": 999, //设置或获取定位对象的堆叠次序(z-index):999
	"top": ordinate - 20, //上(top):y-20
	"left": abscissa, //左:x
	"position": "absolute", //定位:绝对定位
	"font-weight": "bold", //字体粗细:粗体
	"color": "#" + beforeColors[beforeColor] + middleColors[middleColor] + behindColors[behindColor], //颜色:绿色
	"user-select": "none", //使文字不被选中
	});
	 
	//
	element.animate({
	"top": ordinate - 180, //上:y-180
	"opacity": 0 //透明度(opacity):0
	}, 2000, //1500,调节动画速度
	function () { //功能函数
	element.remove(); //$i的删除
	}
	);
	 
	})
	})
