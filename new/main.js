message="Hello World! I am SiD.";
		pos=0;
		temp = null;
		backspace = () => {
			return (Math.random()>0.7)?true:false;
		}
		obj = $("#codeDis");
		put = () => {
			pos++;
			if(pos >= message.length)
			{
				clearInterval(temp);
				return;
			}
			obj.html(message.substr(0,pos)+" ");
			clearInterval(temp);
			temp=setInterval(put,parseInt(150+Math.random()*200));
		}
		$(window).bind("load",function(){
			temp=setInterval(put,parseInt(150+Math.random()*200));
		});
		jh=0;
		setInterval(function(){
			jh=!jh;
			$("#jhgfd").animate({opacity:jh},200);
		},500);