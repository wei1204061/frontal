/**
 * Created by WeiSW on 2015/5/28.
 * 封装二次曲线的方法
 */
var Quadratic = {
    /**
     * 根据三个点绘制二次曲线
     * @param selector      画布canvas
     * @param point0        定点0
     * @param point1        定点1
     * @param control       控制点
     */
    drawBy3Points:function(selector,point0,point1,control){
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
         * 确定两个定点，由控制点pcontrol决定曲线的形状
         * 弧形的曲线是不规则的，
         * point0 = 起点
         * control = 控制点
         * point1 = 终点
         */
        context.quadraticCurveTo(control.x,control.y,point1.x,point1.y);

        context.stroke();

        /**
         * 画辅助线
         * 相关三点的连线
         */
        context.beginPath();
        context.strokeStyle = "blue" ;

        context.moveTo(point0.x,point0.y);
        context.lineTo(control.x,control.y);
        context.lineTo(point1.x,point1.y);
        context.closePath();
        context.stroke();

        /**
         * 坐标点
         */
        context.beginPath();
        context.fillStyle = "black";
        context.fillText("p0("+point0.x+","+point0.y+")",point0.x,point0.y);
        context.fillText("control("+control.x+","+control.y+")",control.x,control.y);
        context.fillText("p1("+point1.x+","+point1.y+")",point1.x,point1.y);

        context.stroke() ;
    }

}