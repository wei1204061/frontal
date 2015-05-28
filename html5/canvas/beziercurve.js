/**
 * Created by WeiSW on 2015/5/27.
 * 封装贝塞尔曲线函数
 */
var Bezier = {
    /**
     * 根据四点绘制贝塞尔曲线
     * @param selector      canvas画布
     * @param point0        定点0
     * @param point1        定点1
     * @param control0      控制点0
     * @param control1      控制点1
     */
    drawBy4Points:function(selector,point0,point1,control0,control1){
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

        //开始绘制
        context.beginPath() ;
        context.strokeStyle = "red" ;

        context.moveTo(point0.x,point0.y);

        /**
         * 贝赛尔曲线
         * 涉及到四个控制点。起点p0，终点p1，控制点control1，控制点control2
         * 如果控制点分别在p0,p1连线的两侧，则会绘制出贝赛尔曲线。
         * 如果控制点在p0,p1连线的同侧，那么效果和quadraticCurveTo类似
         */
        context.bezierCurveTo(control0.x,control0.y,control1.x,control1.y,point1.x,point1.y);

        context.stroke() ;

        /**
         * 五条辅助线
         * 1、将起点和终点两个定点连起来
         * 2、将两个控制点，分别与两个定点连起来（4条）
         */
        context.beginPath();
        context.strokeStyle = "blue" ;

        context.moveTo(point0.x,point0.y);
        context.lineTo(point1.x,point1.y);

        context.moveTo(control0.x,control0.y);
        context.lineTo(point0.x,point0.y);
        context.moveTo(control0.x,control0.y);
        context.lineTo(point1.x,point1.y);

        context.moveTo(control1.x,control1.y);
        context.lineTo(point0.x,point0.y);
        context.moveTo(control1.x,control1.y);
        context.lineTo(point1.x,point1.y);

        context.stroke();

        /**
         * 坐标点的值
         */
        context.beginPath() ;
        context.fillStyle = "black";
        context.fillText("p0("+point0.x+","+point0.y+")",point0.x,point0.y);
        context.fillText("p1("+point1.x+","+point1.y+")",point1.x,point1.y);
        context.fillText("c0("+control0.x+","+control0.y+")",control0.x,control0.y);
        context.fillText("c1("+control1.x+","+control1.y+")",control1.x,control1.y);
        context.stroke();

        /**
         * 添加备注
         */
        context.beginPath() ;
        context.fillStyle = "red" ;
        context.font = "1px consolas" ;
        context.fillText("red line is Bezier curve ",canvas.width/10,canvas.height-15);
        context.stroke() ;
        context.beginPath();
        context.fillStyle = "blue" ;
        context.font = "1px consolas" ;
        context.fillText("blue line is auxiliary line ",canvas.width/10,canvas.height-5);
        context.stroke();
    }



};