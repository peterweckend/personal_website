function return5(){
	var answer = 9;
	document.write(answer);
}

function CalculateTip(){
	return 10;
}


function ChangeColours(){


	document.body.style.background = colour1[count%colourmod];
	document.getElementById("mynav").style.background = colour2[count%colourmod];

	// all non-nav links
	document.getElementsByClassName("link")
	var links = document.getElementsByClassName("link");
	for (var j = 0; j < links.length; j++){
		// darken colours
		if ((count)%colourmod == 2){
		links[j].onmouseover = function()
		{
			this.style.color= shadeColor2(colour2[(count-1)%colourmod], -0.4);
		}}	
		// lighten colours
		else {
			links[j].onmouseover = function()
			{
				this.style.color= shadeColor2(colour2[(count-1)%colourmod], 0.4);
			}}

		links[j].onmouseout = function()
		{
			this.style.color= colour2[(count - 1)%colourmod];
		}
	}

	if ((count)%colourmod == 3 || (count)%colourmod == 2 || (count)%colourmod == 4){
		document.getElementById("gitlogo").src="GitHub-Mark-Light-120px-plus.png"
	} 
	else {
		document.getElementById("gitlogo").src="GitHub-Mark-120px-plus.png"
	}


	// nav links
	document.getElementsByClassName("link2")
	var links = document.getElementsByClassName("link2");
	for (var j = 0; j < links.length; j++){
		// darken colours
		if ((count)%colourmod == 2){
		links[j].onmouseover = function()
		{
			this.style.color= shadeColor2(colour2[(count-1)%colourmod], -0.4);
		}}	
		// lighten colours
		else {
			links[j].onmouseover = function()
			{
				this.style.color= shadeColor2(colour2[(count-1)%colourmod], 0.4);
			}}

		links[j].onmouseout = function()
		{
			this.style.color= colour1[(count - 1)%colourmod];
		}
	}



	var x = document.getElementsByClassName("c2");
	for (var i = 0; i < x.length; i++){
		x[i].style.color = colour2[count%colourmod];
	}

	var y = document.getElementsByClassName("c1");
	for (var i = 0; i < y.length; i++){
		y[i].style.color = colour1[count%colourmod];
	}

	count = count + 1;
}

// borrowed from bit.ly/1utxeGY; > 0 is lighter, < 0 is darker
function shadeColor2(color, percent) {   
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}