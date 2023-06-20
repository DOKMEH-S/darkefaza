/*====================IS MOBILE=====================*/
(function () {var f={};var g=/iPhone/i,i=/iPod/i,j=/iPad/i,k=/\biOS-universal(?:.+)Mac\b/i,h=/\bAndroid(?:.+)Mobile\b/i,m=/Android/i,c=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,d=/Silk/i,b=/Windows Phone/i,n=/\bWindows(?:.+)ARM\b/i,p=/BlackBerry/i,q=/BB10/i,s=/Opera Mini/i,t=/\b(CriOS|Chrome)(?:.+)Mobile/i,u=/Mobile(?:.+)Firefox\b/i,v=function(l){return void 0!==l&&"MacIntel"===l.platform&&"number"==typeof l.maxTouchPoints&&l.maxTouchPoints>1&&"undefined"==typeof MSStream};function w(l){return function($){return $.test(l)}}function x(l){var $={userAgent:"",platform:"",maxTouchPoints:0};l||"undefined"==typeof navigator?"string"==typeof l?$.userAgent=l:l&&l.userAgent&&($={userAgent:l.userAgent,platform:l.platform,maxTouchPoints:l.maxTouchPoints||0}):$={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var a=$.userAgent,e=a.split("[FBAN");void 0!==e[1]&&(a=e[0]),void 0!==(e=a.split("Twitter"))[1]&&(a=e[0]);var r=w(a),o={apple:{phone:r(g)&&!r(b),ipod:r(i),tablet:!r(g)&&(r(j)||v($))&&!r(b),universal:r(k),device:(r(g)||r(i)||r(j)||r(k)||v($))&&!r(b)},amazon:{phone:r(c),tablet:!r(c)&&r(d),device:r(c)||r(d)},android:{phone:!r(b)&&r(c)||!r(b)&&r(h),tablet:!r(b)&&!r(c)&&!r(h)&&(r(d)||r(m)),device:!r(b)&&(r(c)||r(d)||r(h)||r(m))||r(/\bokhttp\b/i)},windows:{phone:r(b),tablet:r(n),device:r(b)||r(n)},other:{blackberry:r(p),blackberry10:r(q),opera:r(s),firefox:r(u),chrome:r(t),device:r(p)||r(q)||r(s)||r(u)||r(t)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}f=x();if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f}else if(typeof define==="function"&&define.amd){define(function(){return f})}else{this["isMobile"]=f}})();
/*====================IS MOBILE=====================*/
if(!isMobile.phone){
    window.onload = function () {
        let currentColor = '',
            backColor = '',
            reverseBackColor = '',
            colorPickHtml = $('html').attr('data-color'),
            checkTime = $('html').attr('id');
        if(checkTime === 'day'){
            currentColor = '#3354FF';
            switch (colorPickHtml) {
                case "red":
                    currentColor = '#B22D2D';
                    backColor = '#ffffff';
                    reverseBackColor = '#1E1E1E';
                    break;
                case "blue":
                    currentColor = '#3354FF';
                    backColor = '#ffffff';
                    reverseBackColor = '#1E1E1E';
                    break;
                case "green":
                    currentColor = '#006039';
                    backColor = '#ffffff';
                    reverseBackColor = '#1E1E1E';
                    break;
                case "orange":
                    currentColor = '#FA6705';
                    backColor = '#ffffff';
                    reverseBackColor = '#1E1E1E';
                    break;

            }
        } else if (checkTime === 'night'){
            currentColor = '#99AAFF';
            switch (colorPickHtml) {
                case "red":
                    currentColor = '#DA6C6C';
                    backColor = '#1E1E1E';
                    reverseBackColor = '#ffffff';
                    break;
                case "blue":
                    currentColor = '#99AAFF';
                    backColor = '#1E1E1E';
                    reverseBackColor = '#ffffff';
                    break;
                case "green":
                    currentColor = '#29CC8A';
                    backColor = '#1E1E1E';
                    reverseBackColor = '#ffffff';
                    break;
                case "orange":
                    currentColor = '#FCAA73';
                    backColor = '#1E1E1E';
                    reverseBackColor = '#ffffff';
                    break;

            }
        }

        $('.colorPallet-item').click(function () {
            let colorPick = $(this).attr('data-color');
            if(checkTime === 'day') {
                switch (colorPick) {
                    case "red":
                        currentColor = '#DA6C6C';
                        backColor = '#ffffff';
                        reverseBackColor = '#1E1E1E';
                        break;
                    case "blue":
                        currentColor = '#3354FF';
                        backColor = '#ffffff';
                        reverseBackColor = '#1E1E1E';
                        break;
                    case "green":
                        currentColor = '#006039';
                        backColor = '#ffffff';
                        reverseBackColor = '#1E1E1E';
                        break;
                    case "orange":
                        currentColor = '#FA6705';
                        backColor = '#ffffff';
                        reverseBackColor = '#1E1E1E';
                        break;

                }
            } else if (checkTime === 'night'){
                switch (colorPick) {
                    case "red":
                        currentColor = '#DA6C6C';
                        backColor = '#1E1E1E';
                        reverseBackColor = '#ffffff';
                        break;
                    case "blue":
                        currentColor = '#99AAFF';
                        backColor = '#1E1E1E';
                        reverseBackColor = '#ffffff';
                        break;
                    case "green":
                        currentColor = '#29CC8A';
                        backColor = '#1E1E1E';
                        reverseBackColor = '#ffffff';
                        break;
                    case "orange":
                        currentColor = '#FCAA73';
                        backColor = '#1E1E1E';
                        reverseBackColor = '#ffffff';
                        break;

                }
            }
            console.log(currentColor);
        })

        let ctx = document.getElementById("C"),
            c = ctx.getContext("2d"),
            w,
            h;
        fitCanvas();

        let mouse = {x: w/2, y: h/2},
            last_mouse = {};

        function curcumicenter(A,B,C){
            let D = 2*(A.x*(B.y-C.y)+B.x*(C.y-A.y)+C.x*(A.y-B.y));
            let S = {
                x: (1/D)*((A.x*A.x+A.y*A.y)*(B.y-C.y)+(B.x*B.x+B.y*B.y)*(C.y-A.y)+(C.x*C.x+C.y*C.y)*(A.y-B.y)),
                y: (1/D)*((A.x*A.x+A.y*A.y)*(C.x-B.x)+(B.x*B.x+B.y*B.y)*(A.x-C.x)+(C.x*C.x+C.y*C.y)*(B.x-A.x))
            }
            return S;
        }
        function dist(A,B){
            return Math.sqrt(Math.pow(A.x-B.x,2)+Math.pow(A.y-B.y,2));
        }
        class point{
            constructor(x,y){
                this.x = x;
                this.y = y;
                this.shown = true;
            }
            update(x,y){
                this.x = x;
                this.y = y;
            }
            show(color,size,line_thickness){
                if(!this.shown){
                    c.fillStyle=color;
                    c.fillRect(this.x-size/2,this.y-size/2,size,size);

                    c.fillStyle=color;
                    c.beginPath();
                    c.arc(this.x,this.y,size/10,0,2*Math.PI);
                    c.lineWidth=line_thickness;
                    c.fill();

                    this.shown = true;
                }
            }
            cleanup(){
                this.shown = false;
            }
        }
        class edge{
            constructor(A,B){
                this.a = A;
                this.b = B;
                this.shown = false;
            }
            update(A,B){
                this.a = A;
                this.b = B;
            }
            show(color,line_thickness){
                if(!this.shown){
                    c.strokeStyle=color;
                    c.beginPath();
                    c.lineTo(this.a.x,this.a.y);
                    c.lineTo(this.b.x,this.b.y);
                    c.lineWidth=line_thickness;
                    c.stroke();

                    this.shown = false;
                }
            }
            cleanup(){
                this.shown = true;
            }
        }
        class triangle{
            constructor(A,B,C){
                //define points
                this.a = A;
                this.b = B;
                this.c = C;
                //define main edges
                this.ab = new edge(this.a,this.b);
                this.bc = new edge(this.b,this.c);
                this.ca = new edge(this.c,this.a);
                //calculate and define curcumicenter
                this.scc = curcumicenter(this.a,this.b,this.c);
                this.s = new point(this.scc.x,this.scc.y);
                //compute distances
                this.x = dist(this.s,this.a);
                this.c1 = dist(this.a,this.b)/2;
                this.c2 = dist(this.b,this.c)/2;
                this.c3 = dist(this.c,this.a)/2;
                //comute angles
                this.a2ab = Math.atan2(this.a.y-this.b.y,this.a.x-this.b.x);
                this.a2bc = Math.atan2(this.b.y-this.c.y,this.b.x-this.c.x);
                this.a2ca = Math.atan2(this.c.y-this.a.y,this.c.x-this.a.x);
                //define arrays
                this.cn = [this.c1, this.c2, this.c3];
                this.rnn = [];
                this.sn = [];
                this.a2nn = [this.a2ab,this.a2bc,this.a2ca];
                //compute other points
                for(let i = 0; i < 3; i++){
                    this.rnn.push(Math.sqrt(Math.pow(this.x,2)-Math.pow(this.cn[i],2)));
                    this.sn.push(new point(
                        this.s.x+(this.rnn[i]/2)*Math.cos(this.a2nn[i]+Math.PI/2),
                        this.s.y+(this.rnn[i]/2)*Math.sin(this.a2nn[i]+Math.PI/2)
                    ));
                }
                //define edges of the triangle
                this.as = new edge(this.a,this.s);
                this.bs = new edge(this.b,this.s);
                this.cs = new edge(this.c,this.s);
                //define arrays of other edges
                this.asn = [];
                this.bsn = [];
                this.csn = [];
                this.ssn = [];
                this.snn = [];
                //compute other edges
                for(let i = 0; i < 3; i++){
                    this.asn[i] = new edge(this.a,this.sn[i]);
                    this.bsn[i] = new edge(this.b,this.sn[i]);
                    this.csn[i] = new edge(this.c,this.sn[i]);
                    this.ssn[i] = new edge(this.s,this.sn[i])
                }
                for(let i = 0, j; i < 3; i++){
                    j = i-1;
                    if(j < 0){ j = 2; }
                    this.snn[i] = new edge(this.sn[i],this.sn[j]);
                }
            }
            move(m){
                //update point c
                this.c = m;
                //update edges
                this.ab.update(this.a,this.b);
                this.bc.update(this.b,this.c);
                this.ca.update(this.c,this.a);
                //update curcumicenter
                this.scc = curcumicenter(this.a,this.b,this.c);
                this.s.update(this.scc.x,this.scc.y);
                //update distances
                this.x = dist(this.s,this.a);
                this.c1 = dist(this.a,this.b)/2;
                this.c2 = dist(this.b,this.c)/2;
                this.c3 = dist(this.c,this.a)/2;
                //update angles
                this.a2ab = Math.atan2(this.a.y-this.b.y,this.a.x-this.b.x);
                this.a2bc = Math.atan2(this.b.y-this.c.y,this.b.x-this.c.x);
                this.a2ca = Math.atan2(this.c.y-this.a.y,this.c.x-this.a.x);
                //update arrays
                this.cn = [this.c1, this.c2, this.c3];
                this.a2nn = [this.a2ab,this.a2bc,this.a2ca];
                for(let i = 0; i < 3; i++){
                    this.rnn[i] = Math.sqrt(Math.pow(this.x,2)-Math.pow(this.cn[i],2));
                    this.sn[i].update(
                        this.s.x+(this.rnn[i]/2)*Math.cos(this.a2nn[i]+Math.PI/2),
                        this.s.y+(this.rnn[i]/2)*Math.sin(this.a2nn[i]+Math.PI/2)
                    );
                }
                //update edges
                for(let i = 0; i < 3; i++){
                    this.asn[i].update(this.a,this.sn[i]);
                    this.bsn[i].update(this.b,this.sn[i]);
                    this.csn[i].update(this.c,this.sn[i]);
                    this.ssn[i].update(this.s,this.sn[i]);
                }
                for(let i = 0, j; i < 3; i++){
                    j = i-1;
                    if(j < 0){ j = 2; }
                    this.snn[i].update(this.sn[i],this.sn[j]);
                }
                //s
                this.as.update(this.a,this.s);
                this.bs.update(this.b,this.s);
                this.cs.update(this.c,this.s);
            }
            iterate(it){
                //define next iteration of triangles
                this.t1 = new triangle(this.a,this.b,this.sn[0]);
                this.t2 = new triangle(this.a,this.sn[1],this.c);
                this.t3 = new triangle(this.b,this.c,this.sn[2]);
                this.t4 = new triangle(this.a,this.sn[0],this.sn[2]);
                this.t5 = new triangle(this.b,this.sn[1],this.sn[0]);
                this.t6 = new triangle(this.c,this.sn[2],this.sn[1]);
                this.t7 = new triangle(this.sn[0],this.sn[1],this.sn[2]);
                //which triangles to iterate and ho many iterations
                if(it < 3){
                    this.t1.iterate(it+1);
                    this.t2.iterate(it+1);
                    this.t3.iterate(it+1);
                    //this.t4.iterate(it+1);
                    //this.t5.iterate(it+1);
                    //this.t6.iterate(it+1);
                    //this.t7.iterate(it+1);
                }
                //show next iterations
                //this.t1.show(0,0,1,1);
                //this.t2.show(0,0,1,1);
                //this.t3.show(0,0,1,1);
                this.t4.show(1,1,1,1);
                this.t5.show(1,1,1,1);
                this.t6.show(1,1,1,1);
                //this.t7.show(0,0,1,1);
            }
            show_main_edges(color){
                this.ab.show(color,0.1);
                this.bc.show(color,0.1);
                this.ca.show(color,0.1);
            }
            show_other_edges(color){
                for(let i = 0; i < 3; i++){
                    this.asn[i].show(color,0.1);
                    this.bsn[i].show("#000000",0.1);
                    this.csn[i].show(color,0.1);
                    this.ssn[i].show("#000000",0.1);
                    this.snn[i].show(color,0.1);
                }
                this.as.show(color,0.1);
                this.bs.show(color,0.1);
                this.cs.show(color,0.1);
            }
            show_main_points(color){
                this.a.show(color,3,1);
                this.b.show(color,3,1);
                this.c.show(color,3,1);
            }
            show_other_points(color){
                this.s.show(color,2,1);

                for(let i = 0; i < 3; i++){
                    this.sn[i].show(color,1,1);
                }
            }
            show(em,eo,pm,po){
                if(em){
                    this.show_main_edges(backColor);
                }
                if(eo){
                    this.show_other_edges(currentColor);
                }
                if(pm){
                    this.show_main_points(reverseBackColor);
                }
                if(po){
                    this.show_other_points(currentColor);
                }
            }
            cleanup(){
                this.a.cleanup();
                this.b.cleanup();
                this.c.cleanup();
                this.s.cleanup();

                this.ab.cleanup();
                this.bc.cleanup();
                this.ca.cleanup();
                this.as.cleanup();
                this.bs.cleanup();
                this.cs.cleanup();

                for(let i = 0; i < 3; i++){
                    this.sn[i].cleanup();
                    this.asn[i].cleanup();
                    this.bsn[i].cleanup();
                    this.csn[i].cleanup();
                    this.ssn[i].cleanup();
                    this.snn[i].cleanup();
                }
            }
        }

        let pts = [],
            mouse_pt = new point(mouse.x,mouse.y),
            tris = [],
            num = 4,
            r = h/2;

        for(let i = 0, len = num; i < len; i++){
            pts.push(new point(w/2+r*Math.cos(i*2*Math.PI/len),h/2+r*Math.sin(i*2*Math.PI/len)));
        }

        let A, B;

        for(let i = 0, len = num; i < len; i++){
            A = i;
            B = i+1;
            if(B >= len){
                B = 0;
            }
            tris.push(new triangle(pts[A],pts[B],mouse_pt));
        }


        function draw() {
            mouse_pt.update(mouse.x,mouse.y);
            mouse_pt.show();

            for(let i = 0, len = tris.length; i < len; i++){
                tris[i].move(mouse_pt);
                tris[i].iterate(0);
                tris[i].show(1,1,1,1);
                tris[i].cleanup();
            }
        }

        ctx.addEventListener(
            "mousemove",
            function(e) {
                last_mouse.x = mouse.x;
                last_mouse.y = mouse.y;

                mouse.x = e.pageX - this.offsetLeft;
                mouse.y = e.pageY - this.offsetTop;
            },
            false
        );

        function fitCanvas() {
            w = ctx.width = window.innerWidth;
            h = ctx.height = window.innerHeight;
        }
        function loop() {
            fitCanvas();
            draw();
            window.requestAnimationFrame(loop);
        }
        window.requestAnimationFrame(loop);
    };
}