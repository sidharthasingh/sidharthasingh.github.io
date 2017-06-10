str="Hello World! I am SiD.";
pos=-1;
myInd='_';
function put()
{
	pos++;
	$("#codeDis").html(str.substring(0,pos)+" "+myInd);
	myInd='_';
	if(pos==str.length)	
	{
		console.log("clearing timeout");
		$("#codeDis").html(str);
		clearInterval(temp);
		jemp=setInterval(function(){
			if($("#jhgfd").text()==" ")
			{
				$("#jhgfd").text(" _");
			}
			else
			{
				$("#jhgfd").text(" ");
			}
		},600);			
	}
	else if(Math.random()>0.85)
	{
		pos-=2;
		myInd='|';
	}
	if(pos<0)
		pos=-1;
}
function startCode()
{
	pos=0;
	clearInterval(jemp);
	$("#jhgfd").text(" ");
	temp=setInterval(function(){
	put();
	},parseInt(150+Math.random()*200));
}
$(window).bind("load",function(){
	temp=setInterval(function(){
	put();
	},parseInt(150+Math.random()*200));
});