

function ad2(){
	var ls1 =document.querySelector(".site-nav-toggle")
	ls1.innerHTML+="<p>导航栏</p>"
	ls1.style.cssText+="font-size:18px;\
					color:	white;\
					font-weight:bold;\
					text-shadow: 2px 1px 2px black;"
}
body=$("body")
function bodybg(){
	body.addEventListener("animationiteration",bodylistener,false)
}
function bodylistener(t){
	switch(t.type){
		case "animationiteration":
			body.css("animation-play-state","paused")
			setTimeout(5000)
			body.css("animation-play-state","play")
	}

}

try{
	ad2()
}
catch(err){
	console.log("ad2 Failed")
}


function ad3(){
	$('.toggle.sidebar-toggle').before('<div class="siderbar_ad"><p>侧边栏</p></div>');
	var ls3 =$(".siderbar_ad")
	ls3.style.cssText=""
	ls3.style.cssText="font-size:18px;\
					color:	white;\
					font-weight:bold;\
					text-shadow: 2px 1px 2px black;"
	
}
function adtitle(){
	$(".post-title").before('<div class="Title_text"><a>---Title---</a></div>');
}



function post_button(){
	$(".post-button>a").text("点进去更精彩>>>")
}

