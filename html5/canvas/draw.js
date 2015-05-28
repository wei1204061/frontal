/**
 * Created by WeiSW on 2015/5/26.
 * 绘制canvas图形封装的一些方法
 */
var DrawFunc = {
    /**刷新页面*/
    reload:function(){
        window.location.reload();
    },
    /**
     * 绘制字符串
     * @param selector      canvas元素
     */
    drawString:function(selector){
        var canvas = selector ;
        var context = canvas.getContext("2d");
        if(null == context){
            console.log("context is null");
            return false ;
        }

        /**开始绘图*/
        context.beginPath() ;
        /**结束路径*/
        context.closePath();

        /**
         * 文字水平对齐方式
         * start,end,left,right,center。默认start
         * right表示，以整段文字的最右侧作为定位点，
         * 然后这个点的位置位于下面所定义的x（横向）位置
         * @type {string}       start,end,left,right,center 默认start
         */
        context.textAlign = "left";

        /**
         * 文字垂直对齐方式
         * top,hanging,middle,alphabetic,ideographic,bottom。默认值alphabetic
         * top表示，以整段文字的上侧作为定位点，
         * 然后这个点的位置位于下面所定义的y（纵向）位置
         * @type {string}   top,hanging,middle,alphabetic,ideographic,bottom。默认值alphabetic
         */
        context.textBaseline = "top" ;

        /**
         * font = "[文字特殊样式]字体大小 字体"
         * 注意顺序
         * 文字特殊样式 = italic、inherit、bold等，默认normal...可选
         * 字体 = monospace、sans-serif等，
         * @type {string}   [文字特殊样式]字体大小 字体
         */
        context.font = "italic 40px consolas";

        /**文字描边颜色*/
        context.strokeStyle = "green" ;

        /**
         * 使用描边创建文字，控制文字的起始位置
         * void strokeText(text, x, y, [maxWidth]);
         * text = 文字内容
         * x = 开始绘制文本的 x 坐标位置（相对于画布）。
         * y = 开始绘制文本的 y 坐标位置（相对于画布）。
         * maxWidth = 可选。允许的最大文本宽度，以像素计。
         */
        context.strokeText("Hello Canvas!",20,40, canvas.width);
    },
    /**
     * 绘制直线
     * @param selector      canvas元素
     */
    drawLine:function(selector){
        var canvas = selector ;
        var context = canvas.getContext("2d");
        if(null == context){
            console.log("context is null");
            return false ;
        }

        /**开始绘图*/
        context.beginPath() ;

        /**
         * 绘制宽度100，高度40的矩形
         */
        /**
         * void moveTo(x, y);
         * 用于显式地指定路径的起点。
         * 默认状态下，第一条路径的起点是画布的(0, 0)点，之后的起点是上一条路径的终点。
         * 两个参数分为表示起点的x、y坐标值。
         */
        context.moveTo(40,40);
        /**
         * void lineTo(x, y);
         * 用于描绘一条从起点到指定位置的直线路径，描绘完成后绘制的起点会移动到该指定位置。
         * 参数表示指定位置的x、y坐标值。
         */
        context.lineTo(140,40);
        context.lineTo(140,80);
        context.lineTo(40,80);
        context.lineTo(40,40);
        /**
         * 设置线的样式
         */
        context.strokeStyle = "blue" ;
        context.lineWidth = "10" ;
        /**
         * lineJoin
         * 线条的转折处样式，有round（圆角）、bevel（平角）、miter（尖角）三种；默认为miter。
         * @type {string}
         */
        context.lineJoin = "round" ;

        /**
         * 线条的端点样式，有butt（无）、round（圆头）、square（方头）三种；默认为butt。
         * @type {string}
         */
        /*context.lineCap = "square" ;*/

        /**关闭路径*/
        context.closePath() ;
        /**进行绘图*/
        context.stroke();
    },
    /**
     * 线性渐变
     * @param selector      Canvas元素
     */
    linearGradient: function (selector) {
        var canvas = selector ;
        var context = canvas.getContext("2d");
        if(null == context){
            console.log("context is null");
            return false ;
        }

        /**
         * 创建线性渐变
         * LinearGradient createLinearGradient(xStart,yStart,xEnd,yEnd) ;
         * xStart = 渐变起始地点横坐标
         * yStart = 渐变起始地点纵坐标
         * xEnd = 渐变结束地点横坐标
         * yEnd = 渐变结束地点纵坐标
         * 返回值，使用了两个点的LinearGradient对象
         * @type {CanvasGradient}
         */
        var linear = context.createLinearGradient(0,0,0,200);
        /**
         * 追加渐变颜色
         * addColorStop(offset,color);
         * offset = 设定颜色离开渐变起始点的偏移量。该值是0~1之间的浮点值
         * color = 绘制时使用的颜色
         */
        linear.addColorStop(0.0,"lightblue");
        linear.addColorStop(0.5,"blue");
        linear.addColorStop(1.0,"darkblue");
        /**
         * 把渐变色给填充样式
         * @type {CanvasGradient}
         */
        context.fillStyle = linear ;
        /**
         * 绘制矩形
         */
        context.fillRect(0,0,300,300);
        /**进行绘制*/
        context.stroke();
    },
    /**
     * 径向渐变
     * @param selector      Canvas元素
     */
    radialGradient: function (selector) {
        var canvas = selector ;
        var context = canvas.getContext("2d");
        if(null == context){
            console.log("context is null");
            return false ;
        }

        /**
         * 清空给定矩形内的指定像素
         * clearRect(x,y,width,height);
         * x、y = 清空区域左上角的位置
         * width、height = 清空矩形的宽度和高度，单位像素
         */
        context.clearRect(0,0,canvas.width,canvas.height);
        /**
         * 创建径向渐变
         * LinearGradient createRadialGradient(xStart,yStart,radiusStart,xEnd,yEnd,radiusEnd)
         * 其中xStart,yStart,radiusStart定位渐变起点圆
         * xEnd,yEnd,radiusEnd定位渐变结束圆
         * @type {CanvasGradient}
         */
        var radial = context.createRadialGradient(80,80,0,80,80,50);

        /**
         * 径向渐变的起点色是从起点圆的范围之外绘制的，起点圆的整个颜色都是起点色。
         * 终点圆以外的颜色是终点色
         * context.createRadialGradient(80,80,45,80,80,50);
         * 非同心径向渐变
         * context.createRadialGradient(60,60,45,80,80,50);
         * 同心径向渐变
         * context.createRadialGradient(80,80,45,80,80,50);
         * 反向渐变,由外而内的渐变
         * context.createRadialGradient(80,80,50,80,80,0);
         */

        /**
         * 渐变颜色值
         */
        radial.addColorStop(0.1,'red');
        radial.addColorStop(0.2,'yellow');
        radial.addColorStop(0.3,'black');
        radial.addColorStop(0.4,'cyan');
        radial.addColorStop(0.5,'blue');
        radial.addColorStop(0.6,'gray');
        radial.addColorStop(0.8,'white');
        radial.addColorStop(1,'green');

        context.fillStyle = radial ;

        context.fillRect(0,0,300,300);

        context.stroke();
    },
    /**
     * 绘制曲线1
     * @param selector      canvas元素
     */
    arc:function(selector){
        var canvas = selector ;
        var context = canvas.getContext("2d");
        if(null == context){
            console.log("context is null");
            return false ;
        }
        /**
         * 先清空画布区域
         */
        context.clearRect(0,0,canvas.width,canvas.height);
        //数据
        var p0 = {x : 80 , y : 80} ;
        var radius = 30 ;

        context.beginPath() ;

        /**
         * 绘制正圆或圆的一段弧线
         * context.arc(x, y, radius, startAngle, endAngle, anticlockwise)
         * x,y,radius = 确定一个圆
         * startAngle = 开始的角度
         * endAngle = 结束的角度
         * anticlockwise = 是否逆时针，true为逆时针；false为顺时针
         */
        context.strokeStyle = "red" ;
        context.arc(p0.x,p0.y,radius,0,Math.PI*2/4,true);
        context.stroke();

        /**
         * 画辅助线
         * 坐标轴
         */
        context.beginPath();
        context.strokeStyle = "blue" ;

        context.moveTo(p0.x-radius-10,p0.y);
        context.lineTo(p0.x+radius+10,p0.y);

        context.moveTo(p0.x,p0.y-radius-10);
        context.lineTo(p0.x,p0.y+radius+10);

        context.stroke();
    },
    /**
     * 绘制曲线2
     * @param selector      canvas元素
     */
    arcTo:function(selector){
        var canvas = selector ;
        var context = canvas.getContext("2d");
        if(null == context){
            console.log("context is null");
            return false ;
        }

        /**
         * 先清空画布区域
         */
        context.clearRect(0,0,canvas.width,canvas.height);
        /**
         * 数据准备
         */
        //画笔落点
        var p0 = {x : 50 , y : 50} ;
        //直线终点
        var p1 = {x : 100 , y : 50} ;
        //两个端点
        var p2 = {x : 200 , y : 50} ;
        var p3 = {x : 200 , y : 150} ;
        //圆弧半径
        var radius = 50 ;

        context.beginPath() ;
        context.strokeStyle = "red" ;
        /**
         * 绘制一条直线
         */
        context.moveTo(p0.x,p0.y);
        context.lineTo(p1.x,p1.y);

        /**
         * 绘制正圆的圆弧
         * arcTo(x1, y1, x2, y2, radius)
         * 利用当前端点p1、端点p2和端点p3这三个点所形成的夹角，
         * 然后绘制一段与夹角的两边相切并且半径为radius的圆上的弧线。
         * 弧线的起点就是p1所在边与圆的切点，弧线的终点就是p3所在边与圆的切点，
         * 并且绘制的弧线是两个切点之间长度最短的那个圆弧。
         * 此外，如果当前端点不是弧线起点，arcTo()方法还将添加一条当前端点到弧线起点的直线线段。
         * x1,y1,x2,y2 = 两个端点的坐标
         * radius = 圆弧的半径
         */
        context.arcTo(p2.x,p2.y,p3.x,p3.y,radius);
        context.stroke();

        /**
         * 画辅助线
         * 相关三点的连线
         */
        context.beginPath();
        context.strokeStyle = "blue" ;

        context.moveTo(p1.x,p1.y);
        context.fillText("p1("+p1.x+","+p1.y+")",p1.x,p1.y);
        context.lineTo(p2.x,p2.y);
        context.fillText("p2("+p2.x+","+p2.y+")",p2.x,p2.y);
        context.lineTo(p3.x,p3.y);
        context.fillText("p3("+p3.x+","+p3.y+")",p3.x,p3.y);
        context.closePath();
        context.stroke();
    },
    /**
     * 绘制曲线3
     * @param selector      canvas元素
     */
    quadraticCurveTo:function(selector){
        var canvas = selector ;
        var context = canvas.getContext("2d");
        if(null == context){
            console.log("context is null");
            return false ;
        }

        /**
         * 先清空画布区域
         */
        context.clearRect(0,0,canvas.width,canvas.height);
        /**
         * 数据准备
         */
        //画笔落点
        var p0 = {x : 10 , y : 50} ;
        //控制端点
        var pcontrol = {x : 210 , y : 40} ;

        var p1 = {x : 200 , y : 120} ;

        //开始绘制
        context.beginPath() ;
        context.strokeStyle = "red" ;

        context.moveTo(p0.x,p0.y);
        /**
         * 确定两个定点，由控制点pcontrol决定曲线的形状
         * 弧形的曲线是不规则的，
         * p0 = 起点
         * pcontrol = 控制点
         * p1 = 终点
         */
        context.quadraticCurveTo(pcontrol.x,pcontrol.y,p1.x,p1.y);

        context.stroke();

        /**
         * 画辅助线
         * 相关三点的连线
         */
        context.beginPath();
        context.strokeStyle = "blue" ;

        context.moveTo(p0.x,p0.y);
        context.fillText("p0("+p0.x+","+p0.y+")",p0.x,p0.y);
        context.lineTo(pcontrol.x,pcontrol.y);
        context.fillText("control("+pcontrol.x+","+pcontrol.y+")",pcontrol.x,pcontrol.y);
        context.lineTo(p1.x,p1.y);
        context.fillText("p1("+p1.x+","+p1.y+")",p1.x,p1.y);
        context.closePath();
        context.stroke();
    },
    /**
     * 绘制曲线4 --贝塞尔曲线
     * @param selector      canvas元素
     */
    bezierCurveTo:function(selector){
        var canvas = selector ;
        var context = canvas.getContext("2d");
        if(null == context){
            console.log("context is null");
            return false ;
        }

        /**
         * 先清空画布区域
         */
        context.clearRect(0,0,canvas.width,canvas.height);

        /**
         * 数据准备
         */
        //画笔落点
        var p0 = {x : 30 , y : 50} ;
        //控制端点
        var control1 = {x : 20 , y : 120} ;
        var control2 = {x : 180 , y : 20} ;
        var p1 = {x : 230 , y : 120} ;

        //开始绘制
        context.beginPath() ;
        context.strokeStyle = "red" ;

        context.moveTo(p0.x,p0.y);

        /**
         * 贝赛尔曲线
         * 涉及到四个控制点。起点p0，终点p1，控制点control1，控制点control2
         * 如果控制点分别在p0,p1连线的两侧，则会绘制出贝赛尔曲线。
         * 如果控制点在p0,p1连线的同侧，那么效果和quadraticCurveTo类似
         */
        context.bezierCurveTo(control1.x,control1.y,control2.x,control2.y,p1.x,p1.y);

        context.stroke() ;

        /**
         * 五条辅助线
         * 1、将起点和终点两个定点连起来
         * 2、将两个控制点，分别与两个定点连起来（4条）
         */
        context.beginPath();
        context.strokeStyle = "blue" ;

        context.moveTo(p0.x,p0.y);
        context.fillText("p0("+p0.x+","+p0.y+")",p0.x,p0.y);
        context.lineTo(p1.x,p1.y);
        context.fillText("p1("+p1.x+","+p1.y+")",p1.x,p1.y);

        context.moveTo(control1.x,control1.y);
        context.fillText("control1("+control1.x+","+control1.y+")",control1.x,control1.y);
        context.lineTo(p0.x,p0.y);
        context.moveTo(control1.x,control1.y);
        context.lineTo(p1.x,p1.y);

        context.moveTo(control2.x,control2.y);
        context.fillText("control2("+control2.x+","+control2.y+")",control2.x,control2.y);
        context.lineTo(p0.x,p0.y);
        context.moveTo(control2.x,control2.y);
        context.lineTo(p1.x,p1.y);

        context.stroke();
    },
    /**
     * 绘制图片
     * @param  selector     画布canvas
     */
    drawImage:function(selector){
        var canvas = selector ;
        var context = canvas.getContext("2d");
        if(null == context){
            console.log("context is null");
            return false ;
        }

        /**
         * 先清空画布区域
         */
        context.clearRect(0,0,canvas.width,canvas.height);

        image = new Image();
        image.src = "../images/bluesky.jpg" ;

        /**
         * 图片加载完成后，进行绘图
         */
        /**
         * drawImage(image, x, y)
         * 不对图像进行缩放，x,y对应绘制时该图像在画布中的起始坐标
         * drawImage(image, x, y, width, height)
         * width,height指绘制时的图像的宽度和高度，可以用来对图像进行【缩放】
         * drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
         * 将画布中已绘制好的图像的全部或者局部区域复制到画布中的另一个位置。。【切割源图像】
         */
        image.onload = function(){
            for(var i = 0 ; i < 10 ; i++){
                context.drawImage(image,i*20,i*20,60,40,i*40,i*20,60,40);
            }
        }

    },

    /**
     * 画布画面的位移translate、缩放scale、旋转rotate
     */
    transform:function(selector){
        var canvas = selector ;
        var context = canvas.getContext("2d");
        if(null == context){
            console.log("context is null");
            return false ;
        }

        context.fillStyle = "#EEEEFF" ;
        context.fillRect(0,0,400,300) ;

        context.translate(250,0) ;

        context.fillStyle = 'rgba(255,0,0,0.2)' ;

        for(var i = 0 ; i < 50 ; i++){
            /**
             * 【位移】
             * translate的作用就是把画面左上角到处移动,每次移动都是在上次的基础之上
             * translate(x,y)
             * x = x轴的偏移值
             * y = y轴的偏移值
             */
            context.translate(25,25) ;
            /**
             * 【缩放】
             * 缩放是基于左上角，原点的
             * scale(x,y)
             * x = 水平方向的缩放
             * y = 垂直方向的缩放
             * 参数可以是小数,如果小于1就是缩小,大于1则是放大,等于1则什么都不做
             */
            context.scale(0.95,0.95) ;
            /**
             * 【旋转】
             * 旋转也是基于原点的
             * rotate(radian)
             * radian = 旋转的弧度
             */
            context.rotate(Math.PI/10) ;
            context.fillRect(0,0,100,50);
        }

    },

    basicShapes:function(selector){

    }





};
