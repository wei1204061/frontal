/**
 * Created by WeiSW on 2015/5/26.
 * ����canvasͼ�η�װ��һЩ����
 */
var DrawFunc = {
    /**ˢ��ҳ��*/
    reload:function(){
        window.location.reload();
    },
    /**
     * �����ַ���
     * @param selector      canvasԪ��
     */
    drawString:function(selector){
        var canvas = selector ;
        var context = canvas.getContext("2d");
        if(null == context){
            console.log("context is null");
            return false ;
        }

        /**��ʼ��ͼ*/
        context.beginPath() ;
        /**����·��*/
        context.closePath();

        /**
         * ����ˮƽ���뷽ʽ
         * start,end,left,right,center��Ĭ��start
         * right��ʾ�����������ֵ����Ҳ���Ϊ��λ�㣬
         * Ȼ��������λ��λ�������������x������λ��
         * @type {string}       start,end,left,right,center Ĭ��start
         */
        context.textAlign = "left";

        /**
         * ���ִ�ֱ���뷽ʽ
         * top,hanging,middle,alphabetic,ideographic,bottom��Ĭ��ֵalphabetic
         * top��ʾ�����������ֵ��ϲ���Ϊ��λ�㣬
         * Ȼ��������λ��λ�������������y������λ��
         * @type {string}   top,hanging,middle,alphabetic,ideographic,bottom��Ĭ��ֵalphabetic
         */
        context.textBaseline = "top" ;

        /**
         * font = "[����������ʽ]�����С ����"
         * ע��˳��
         * ����������ʽ = italic��inherit��bold�ȣ�Ĭ��normal...��ѡ
         * ���� = monospace��sans-serif�ȣ�
         * @type {string}   [����������ʽ]�����С ����
         */
        context.font = "italic 40px consolas";

        /**���������ɫ*/
        context.strokeStyle = "green" ;

        /**
         * ʹ����ߴ������֣��������ֵ���ʼλ��
         * void strokeText(text, x, y, [maxWidth]);
         * text = ��������
         * x = ��ʼ�����ı��� x ����λ�ã�����ڻ�������
         * y = ��ʼ�����ı��� y ����λ�ã�����ڻ�������
         * maxWidth = ��ѡ�����������ı���ȣ������ؼơ�
         */
        context.strokeText("Hello Canvas!",20,40, canvas.width);
    },
    /**
     * ����ֱ��
     * @param selector      canvasԪ��
     */
    drawLine:function(selector){
        var canvas = selector ;
        var context = canvas.getContext("2d");
        if(null == context){
            console.log("context is null");
            return false ;
        }

        /**��ʼ��ͼ*/
        context.beginPath() ;

        /**
         * ���ƿ��100���߶�40�ľ���
         */
        /**
         * void moveTo(x, y);
         * ������ʽ��ָ��·������㡣
         * Ĭ��״̬�£���һ��·��������ǻ�����(0, 0)�㣬֮����������һ��·�����յ㡣
         * ����������Ϊ��ʾ����x��y����ֵ��
         */
        context.moveTo(40,40);
        /**
         * void lineTo(x, y);
         * �������һ������㵽ָ��λ�õ�ֱ��·���������ɺ���Ƶ������ƶ�����ָ��λ�á�
         * ������ʾָ��λ�õ�x��y����ֵ��
         */
        context.lineTo(140,40);
        context.lineTo(140,80);
        context.lineTo(40,80);
        context.lineTo(40,40);
        /**
         * �����ߵ���ʽ
         */
        context.strokeStyle = "blue" ;
        context.lineWidth = "10" ;
        /**
         * lineJoin
         * ������ת�۴���ʽ����round��Բ�ǣ���bevel��ƽ�ǣ���miter����ǣ����֣�Ĭ��Ϊmiter��
         * @type {string}
         */
        context.lineJoin = "round" ;

        /**
         * �����Ķ˵���ʽ����butt���ޣ���round��Բͷ����square����ͷ�����֣�Ĭ��Ϊbutt��
         * @type {string}
         */
        /*context.lineCap = "square" ;*/

        /**�ر�·��*/
        context.closePath() ;
        /**���л�ͼ*/
        context.stroke();
    },
    /**
     * ���Խ���
     * @param selector      CanvasԪ��
     */
    linearGradient: function (selector) {
        var canvas = selector ;
        var context = canvas.getContext("2d");
        if(null == context){
            console.log("context is null");
            return false ;
        }

        /**
         * �������Խ���
         * LinearGradient createLinearGradient(xStart,yStart,xEnd,yEnd) ;
         * xStart = ������ʼ�ص������
         * yStart = ������ʼ�ص�������
         * xEnd = ��������ص������
         * yEnd = ��������ص�������
         * ����ֵ��ʹ�����������LinearGradient����
         * @type {CanvasGradient}
         */
        var linear = context.createLinearGradient(0,0,0,200);
        /**
         * ׷�ӽ�����ɫ
         * addColorStop(offset,color);
         * offset = �趨��ɫ�뿪������ʼ���ƫ��������ֵ��0~1֮��ĸ���ֵ
         * color = ����ʱʹ�õ���ɫ
         */
        linear.addColorStop(0.0,"lightblue");
        linear.addColorStop(0.5,"blue");
        linear.addColorStop(1.0,"darkblue");
        /**
         * �ѽ���ɫ�������ʽ
         * @type {CanvasGradient}
         */
        context.fillStyle = linear ;
        /**
         * ���ƾ���
         */
        context.fillRect(0,0,300,300);
        /**���л���*/
        context.stroke();
    },
    /**
     * ���򽥱�
     * @param selector      CanvasԪ��
     */
    radialGradient: function (selector) {
        var canvas = selector ;
        var context = canvas.getContext("2d");
        if(null == context){
            console.log("context is null");
            return false ;
        }

        /**
         * ��ո��������ڵ�ָ������
         * clearRect(x,y,width,height);
         * x��y = ����������Ͻǵ�λ��
         * width��height = ��վ��εĿ�Ⱥ͸߶ȣ���λ����
         */
        context.clearRect(0,0,canvas.width,canvas.height);
        /**
         * �������򽥱�
         * LinearGradient createRadialGradient(xStart,yStart,radiusStart,xEnd,yEnd,radiusEnd)
         * ����xStart,yStart,radiusStart��λ�������Բ
         * xEnd,yEnd,radiusEnd��λ�������Բ
         * @type {CanvasGradient}
         */
        var radial = context.createRadialGradient(80,80,0,80,80,50);

        /**
         * ���򽥱�����ɫ�Ǵ����Բ�ķ�Χ֮����Ƶģ����Բ��������ɫ�������ɫ��
         * �յ�Բ�������ɫ���յ�ɫ
         * context.createRadialGradient(80,80,45,80,80,50);
         * ��ͬ�ľ��򽥱�
         * context.createRadialGradient(60,60,45,80,80,50);
         * ͬ�ľ��򽥱�
         * context.createRadialGradient(80,80,45,80,80,50);
         * ���򽥱�,������ڵĽ���
         * context.createRadialGradient(80,80,50,80,80,0);
         */

        /**
         * ������ɫֵ
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
     * ��������1
     * @param selector      canvasԪ��
     */
    arc:function(selector){
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
        //����
        var p0 = {x : 80 , y : 80} ;
        var radius = 30 ;

        context.beginPath() ;

        /**
         * ������Բ��Բ��һ�λ���
         * context.arc(x, y, radius, startAngle, endAngle, anticlockwise)
         * x,y,radius = ȷ��һ��Բ
         * startAngle = ��ʼ�ĽǶ�
         * endAngle = �����ĽǶ�
         * anticlockwise = �Ƿ���ʱ�룬trueΪ��ʱ�룻falseΪ˳ʱ��
         */
        context.strokeStyle = "red" ;
        context.arc(p0.x,p0.y,radius,0,Math.PI*2/4,true);
        context.stroke();

        /**
         * ��������
         * ������
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
     * ��������2
     * @param selector      canvasԪ��
     */
    arcTo:function(selector){
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
        /**
         * ����׼��
         */
        //�������
        var p0 = {x : 50 , y : 50} ;
        //ֱ���յ�
        var p1 = {x : 100 , y : 50} ;
        //�����˵�
        var p2 = {x : 200 , y : 50} ;
        var p3 = {x : 200 , y : 150} ;
        //Բ���뾶
        var radius = 50 ;

        context.beginPath() ;
        context.strokeStyle = "red" ;
        /**
         * ����һ��ֱ��
         */
        context.moveTo(p0.x,p0.y);
        context.lineTo(p1.x,p1.y);

        /**
         * ������Բ��Բ��
         * arcTo(x1, y1, x2, y2, radius)
         * ���õ�ǰ�˵�p1���˵�p2�Ͷ˵�p3�����������γɵļнǣ�
         * Ȼ�����һ����нǵ��������в��Ұ뾶Ϊradius��Բ�ϵĻ��ߡ�
         * ���ߵ�������p1���ڱ���Բ���е㣬���ߵ��յ����p3���ڱ���Բ���е㣬
         * ���һ��ƵĻ����������е�֮�䳤����̵��Ǹ�Բ����
         * ���⣬�����ǰ�˵㲻�ǻ�����㣬arcTo()�����������һ����ǰ�˵㵽��������ֱ���߶Ρ�
         * x1,y1,x2,y2 = �����˵������
         * radius = Բ���İ뾶
         */
        context.arcTo(p2.x,p2.y,p3.x,p3.y,radius);
        context.stroke();

        /**
         * ��������
         * ������������
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
     * ��������3
     * @param selector      canvasԪ��
     */
    quadraticCurveTo:function(selector){
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
        /**
         * ����׼��
         */
        //�������
        var p0 = {x : 10 , y : 50} ;
        //���ƶ˵�
        var pcontrol = {x : 210 , y : 40} ;

        var p1 = {x : 200 , y : 120} ;

        //��ʼ����
        context.beginPath() ;
        context.strokeStyle = "red" ;

        context.moveTo(p0.x,p0.y);
        /**
         * ȷ���������㣬�ɿ��Ƶ�pcontrol�������ߵ���״
         * ���ε������ǲ�����ģ�
         * p0 = ���
         * pcontrol = ���Ƶ�
         * p1 = �յ�
         */
        context.quadraticCurveTo(pcontrol.x,pcontrol.y,p1.x,p1.y);

        context.stroke();

        /**
         * ��������
         * ������������
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
     * ��������4 --����������
     * @param selector      canvasԪ��
     */
    bezierCurveTo:function(selector){
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

        /**
         * ����׼��
         */
        //�������
        var p0 = {x : 30 , y : 50} ;
        //���ƶ˵�
        var control1 = {x : 20 , y : 120} ;
        var control2 = {x : 180 , y : 20} ;
        var p1 = {x : 230 , y : 120} ;

        //��ʼ����
        context.beginPath() ;
        context.strokeStyle = "red" ;

        context.moveTo(p0.x,p0.y);

        /**
         * ����������
         * �漰���ĸ����Ƶ㡣���p0���յ�p1�����Ƶ�control1�����Ƶ�control2
         * ������Ƶ�ֱ���p0,p1���ߵ����࣬�����Ƴ����������ߡ�
         * ������Ƶ���p0,p1���ߵ�ͬ�࣬��ôЧ����quadraticCurveTo����
         */
        context.bezierCurveTo(control1.x,control1.y,control2.x,control2.y,p1.x,p1.y);

        context.stroke() ;

        /**
         * ����������
         * 1���������յ���������������
         * 2�����������Ƶ㣬�ֱ�������������������4����
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
     * ����ͼƬ
     * @param  selector     ����canvas
     */
    drawImage:function(selector){
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

        image = new Image();
        image.src = "../images/bluesky.jpg" ;

        /**
         * ͼƬ������ɺ󣬽��л�ͼ
         */
        /**
         * drawImage(image, x, y)
         * ����ͼ��������ţ�x,y��Ӧ����ʱ��ͼ���ڻ����е���ʼ����
         * drawImage(image, x, y, width, height)
         * width,heightָ����ʱ��ͼ��Ŀ�Ⱥ͸߶ȣ�����������ͼ����С����š�
         * drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
         * ���������ѻ��ƺõ�ͼ���ȫ�����߾ֲ������Ƶ������е���һ��λ�á������и�Դͼ��
         */
        image.onload = function(){
            for(var i = 0 ; i < 10 ; i++){
                context.drawImage(image,i*20,i*20,60,40,i*40,i*20,60,40);
            }
        }

    },

    /**
     * ���������λ��translate������scale����תrotate
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
             * ��λ�ơ�
             * translate�����þ��ǰѻ������Ͻǵ����ƶ�,ÿ���ƶ��������ϴεĻ���֮��
             * translate(x,y)
             * x = x���ƫ��ֵ
             * y = y���ƫ��ֵ
             */
            context.translate(25,25) ;
            /**
             * �����š�
             * �����ǻ������Ͻǣ�ԭ���
             * scale(x,y)
             * x = ˮƽ���������
             * y = ��ֱ���������
             * ����������С��,���С��1������С,����1���ǷŴ�,����1��ʲô������
             */
            context.scale(0.95,0.95) ;
            /**
             * ����ת��
             * ��תҲ�ǻ���ԭ���
             * rotate(radian)
             * radian = ��ת�Ļ���
             */
            context.rotate(Math.PI/10) ;
            context.fillRect(0,0,100,50);
        }

    },

    basicShapes:function(selector){

    }





};
