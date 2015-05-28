/**
 * Created by WeiSW on 2015/5/27.
 * ��װ���������ߺ���
 */
var Bezier = {
    /**
     * �����ĵ���Ʊ���������
     * @param selector      canvas����
     * @param point0        ����0
     * @param point1        ����1
     * @param control0      ���Ƶ�0
     * @param control1      ���Ƶ�1
     */
    drawBy4Points:function(selector,point0,point1,control0,control1){
        var canvas = selector ;
        var context = canvas.getContext("2d");
        if(null == context){
            console.log("context is null");
            return false ;
        }

        /**
         * ����ջ�������
         */
        context.clearRect(0,0,canvas.width,canvas.height);

        //��ʼ����
        context.beginPath() ;
        context.strokeStyle = "red" ;

        context.moveTo(point0.x,point0.y);

        /**
         * ����������
         * �漰���ĸ����Ƶ㡣���p0���յ�p1�����Ƶ�control1�����Ƶ�control2
         * ������Ƶ�ֱ���p0,p1���ߵ����࣬�����Ƴ����������ߡ�
         * ������Ƶ���p0,p1���ߵ�ͬ�࣬��ôЧ����quadraticCurveTo����
         */
        context.bezierCurveTo(control0.x,control0.y,control1.x,control1.y,point1.x,point1.y);

        context.stroke() ;

        /**
         * ����������
         * 1���������յ���������������
         * 2�����������Ƶ㣬�ֱ�������������������4����
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
         * ������ֵ
         */
        context.beginPath() ;
        context.fillStyle = "black";
        context.fillText("p0("+point0.x+","+point0.y+")",point0.x,point0.y);
        context.fillText("p1("+point1.x+","+point1.y+")",point1.x,point1.y);
        context.fillText("c0("+control0.x+","+control0.y+")",control0.x,control0.y);
        context.fillText("c1("+control1.x+","+control1.y+")",control1.x,control1.y);
        context.stroke();

        /**
         * ��ӱ�ע
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