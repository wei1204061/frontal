/**
 * Created by WeiSW on 2015/5/28.
 * ��װ�������ߵķ���
 */
var Quadratic = {
    /**
     * ������������ƶ�������
     * @param selector      ����canvas
     * @param point0        ����0
     * @param point1        ����1
     * @param control       ���Ƶ�
     */
    drawBy3Points:function(selector,point0,point1,control){
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
         * ȷ���������㣬�ɿ��Ƶ�pcontrol�������ߵ���״
         * ���ε������ǲ�����ģ�
         * point0 = ���
         * control = ���Ƶ�
         * point1 = �յ�
         */
        context.quadraticCurveTo(control.x,control.y,point1.x,point1.y);

        context.stroke();

        /**
         * ��������
         * ������������
         */
        context.beginPath();
        context.strokeStyle = "blue" ;

        context.moveTo(point0.x,point0.y);
        context.lineTo(control.x,control.y);
        context.lineTo(point1.x,point1.y);
        context.closePath();
        context.stroke();

        /**
         * �����
         */
        context.beginPath();
        context.fillStyle = "black";
        context.fillText("p0("+point0.x+","+point0.y+")",point0.x,point0.y);
        context.fillText("control("+control.x+","+control.y+")",control.x,control.y);
        context.fillText("p1("+point1.x+","+point1.y+")",point1.x,point1.y);

        context.stroke() ;
    }

}