var minRad=0.5,
	maxRad=100,
	defaultRad=20,
	interval=5,
	radSpan=document.getElementById('radval'),
	decRad=document.getElementById('decrad'),
	incRad=document.getElementById('incrad');
var setRadius = function(newRadius)
{
	if(newRadius<minRad)
		newRadius= minRad;
	else if(newRadius>maxRad)
		newRadius=maxRad;
	radius=newRadius;
	ctx.lineWidth=radius*2;
	radSpan.innerHTML=radius;
	if(radius>60)
	{
		document.getElementById("canvas").style.cursor ="crosshair";
	}
	else
	{
	document.getElementById("canvas").style.cursor = 'url("cursor_'+radius+'.png") '+radius+' '+radius+', auto';
	}

}
decRad.addEventListener('click',function()
{
	setRadius(radius-interval);
})
incRad.addEventListener('click',function()
{
	setRadius(radius+interval);
})
setRadius(defaultRad);