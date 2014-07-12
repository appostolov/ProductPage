//LOGO 
var a = document.getElementsByClassName("logo_letter");

var top_poz = -100;
var letter_num = 0;
var health_view = 0;
var health_view_count = 0.001;
var logo_down = false;
var letter_light_time = 0;
var letter_light_num = 0;

var green1 = 255;
var blue1 = 204;

var green2 = 153;
var blue2 = 255;

var color_time = 0;

//FLOWERS
var imgs = document.getElementsByClassName("margaritkite");

var img_size = 0;
var img_num = 0;

//BOTTLE
var holl = document.getElementById("bottle_way");
var bottle = document.getElementById("bottle_hold");

var holl_size = 0;
var bottle_poz = -400;
var bottle_done = false;

//WOMEN
var women = document.getElementById("med_women");

var women_poz = -300;

//ABOUT_INFO
document.getElementById("butt_pause").style.display = "block";
var about_info = document.getElementById("about_menu");
var about_button = document.getElementsByClassName("about_button");
about_button[0].style.top = 0+"px";
about_button[1].style.top = 120+"px";
about_button[2].style.top = 240+"px";

var about_poz = -750;
var butt_poz = 220;
var butt_num = 0;

var butt_w = 100;
var butt_h = 80;
var butt_z = 1;

var countO=0.01;
var countw=1;
var counth=1;
var countV=1;

var back_move = false;

//ABOUT TEXT
var text1 = "<b>Time! Real or Lie:</b><br /><br />If it is no movement, the time cant be meashured<br />We use the time for orientation<br />In the past people connect the time with the planets movements - day and night, seasons<br />If in one area everithing stops and has no difirencess, if it's no powers to change the environment still, could be time in there?!<br />May be we need the time to understan the matery changes and our lives.<br />Or the time and space are connected and the speed gives the time.";
var text2 = "<b>Space - dimensions and fenomens:</b><br /><br />Wath is the space and how many dimensions are in it.<br />Is the space real, or jist in our imagination<br />Why the space search balance?<br />Nothing disapiars in the space, just change his form.<br />The space depend of time for the action, no meter wath action is.";
var text3 = "<b>This is for the people</b><br /><br />Now is the third milenium and we are on the gate of mind grow. The money and the fear will not rool any more. The people will understad that universe have all the treasures. This is a hevan. Our resposibilities are to keep our planet and use our mind potencial for solving the secret of the power. Power that we are made by.";
var text_arr = [text1,text2,text3];
var about_text = document.getElementById("text_holder");
var about_text_view = 0;
var about_text_num = 0;

var go_time = true;

var time = 0;

//FREE SHIPPING
var bezpl_w = 370;
var bezpl_r = -bezpl_w - 10;
var bezpl_vell = 1;

var dost_r = -bezpl_w+bezpl_r-20;
var dost_w = 340;
var dost_vell = 1;

var start_c = false;

//BUY BUTTONS
var buy_button = document.getElementsByClassName("buy_button");
var buy_button_size = 150;
var see_button_size = 150;

var buy_button_r = -300;

var buy_button_num = 0;
var buy_button_vell = 0.3;

var logo_fall = setInterval(function(){
	
	if(time >= 20 && time< 50){
			for(var g = 0; g < a.length; g++){		
					a[g].style.color = "#000";			
				}
			if(letter_light_num < a.length){
				
				if(letter_light_time>2){
					letter_light_num += 1;
					letter_light_time = 0;
				}
				a[letter_light_num].style.color = "#0FC";
			}else{
					document.getElementById("logo_health").style.color = "rgb(0,"+green1+","+blue1+")";
					
			}
		letter_light_time ++;
		color_time ++;
	}else{
		document.getElementById("logo_health").style.color = "rgb(0,"+green2+","+blue2+")";
	}
	
	if(about_text_num==about_button.length){
		about_text_num = 0;
	}

	if(butt_num >= about_button.length){
		document.getElementById("bezplatna").style.right = bezpl_r+"px";
		document.getElementById("dostavka").style.right = dost_r+"px";
		bezpl_r += bezpl_vell;
		dost_r += dost_vell;
		if(dost_r > 0){
			start_c = true;
		}
		if(start_c == true){
			document.getElementById("bezplatna").style.color = "rgba(255,255,150,0.6)";
			document.getElementById("dostavka").style.color = "rgba(255,255,150,0.6)";
			if(bezpl_r >= 495){
				bezpl_vell = -bezpl_vell;
				document.getElementById("bezplatna").style.color = "white";
			}
			if(bezpl_r <= dost_r + dost_w){
				bezpl_vell = -bezpl_vell;
				dost_vell = -dost_vell;
				document.getElementById("bezplatna").style.color = "red";
				document.getElementById("dostavka").style.color = "red";
			}
			if(dost_r <= 0){
				dost_vell = -dost_vell;
				document.getElementById("dostavka").style.color = "white";
			}
		}
		
		if(buy_button_r <= 70){
			document.getElementById("buy_buttons").style.left = buy_button_r +"px";
			buy_button_r += 10;
		}
		
		if(buy_button_num == 0){
		buy_button[0].style.height = buy_button_size + "px";
		buy_button[0].style.width = buy_button_size + "px";
		buy_button[0].style.lineHeight = buy_button_size + "px";
		buy_button[0].style.borderRadius = buy_button_size + "px";
		
		buy_button[1].style.height = see_button_size + "px";
		buy_button[1].style.width = see_button_size + "px";
		buy_button[1].style.lineHeight = see_button_size + "px";
		buy_button[1].style.borderRadius = see_button_size + "px";
		
		if(buy_button_size <= 170){
			see_button_size -= buy_button_vell;
			buy_button_size += buy_button_vell;
		}else{
			buy_button_num = 1;
		}
	}else if(buy_button_num == 1){
		buy_button[0].style.height = buy_button_size + "px";
		buy_button[0].style.width = buy_button_size + "px";
		buy_button[0].style.lineHeight = buy_button_size + "px";
		buy_button[0].style.borderRadius = buy_button_size + "px";
		
		buy_button[1].style.height = see_button_size + "px";
		buy_button[1].style.width = see_button_size + "px";
		buy_button[1].style.lineHeight = see_button_size + "px";
		buy_button[1].style.borderRadius = see_button_size + "px";
		
		if(see_button_size <= 170){
			see_button_size += buy_button_vell;
			buy_button_size -= buy_button_vell;
		}else{
			buy_button_num = 0;
		}
	}
	
		if(about_text_view < 1){
					about_text.style.opacity = about_text_view;
					about_text_view += countO;
					
					if(butt_w <= 120){
						about_button[about_text_num].style.width = butt_w+"%";
						about_button[about_text_num].style.height = butt_h+"px";
						about_button[about_text_num].style.lineHeight = butt_h+"px";
						butt_w += countw;
						butt_h += counth;
						if(butt_w >= 110){
							butt_z += countV;
							about_button[about_text_num].style.zIndex = butt_z;
						}
					}
				}
				about_text.innerHTML = text_arr[about_text_num];
				if(go_time == true){
					time ++;
				}
				
		}
			
			if(time >= 500){
				
				document.getElementById("logo_health").style.color = "#09F";
				
				letter_light_num = 0;
				letter_light_time = 0;
				
				butt_w = 100;
				butt_h = 80;
				butt_z = 1;
				
				about_text_view = 0;
				
				for(var g = 0; g < about_button.length; g++){
					
					about_button[g].style.width = butt_w+"%";
					about_button[g].style.height = butt_h+"px";
					about_button[g].style.lineHeight = butt_h+"px";
					
					about_button[g].style.zIndex = butt_z;
					
				}
				
				about_text_num += 1;
				time = 0;
				
			}
			
	if(letter_num < a.length){
		a[letter_num].style.top = top_poz + "px";
		top_poz += 20;
		if(top_poz >= 0){
			letter_num += 1;
			top_poz = -100;
		}
	}else{
		if(health_view <= 1){
			document.getElementById("logo_health").style.opacity = health_view;
			health_view += health_view_count;
			health_view_count += 0.0001;
		}
		
		holl.style.width = holl_size + "px";
		holl.style.height = holl_size + "px";
		holl.style.borderRadius = holl_size + "px";
		bottle.style.top = bottle_poz + "px";
		
		if(bottle_done == false){
			holl_size += 10;
			if(holl_size >= 100){
				bottle_poz += 10;
			}
			if(bottle_poz >= 0){
				bottle_done = true;
				holl_size = 400;
			}
		}else{
			holl.style.overflow = "visible";
			holl_size -= 20;
			if(women_poz <= 0){
				women.style.left = women_poz + "px";
				women_poz +=11;
			}
				
			if(about_poz <= 50){
				about_info.style.right = about_poz + "px";
				about_poz += 20;
			}else{
				if(butt_poz >= 0){
					about_button[butt_num].style.left = butt_poz+"px";
					butt_poz -= 20;
				}else if(butt_num < about_button.length){
					butt_num += 1;
					butt_poz = 220;
				}
			}
			
			if(img_size <= 100 && img_num < imgs.length){
		
				imgs[img_num].style.width = img_size + "%";
				img_size += 10;
				if(img_size >= 100){
					img_num += 1;
					img_size = 0;
				}
			}
		}
	}
},17);

var about_button_click = function(){
	
	document.getElementById("butt_pause").style.display = "none";
	document.getElementById("butt_play").style.display = "block";
	
	butt_w = 100;
	butt_h = 80;
	butt_z = 1;
				
	about_text_view = 0;
	
	go_time = false;
				
	for(var g = 0; g < about_button.length; g++){
					
			about_button[g].style.width = butt_w+"%";
			about_button[g].style.height = butt_h+"px";
			about_button[g].style.lineHeight = butt_h+"px";
					
			about_button[g].style.zIndex = butt_z;
					
	}
	
	for(var k = 0; k < about_button.length; k ++){
		
		if(this == about_button[k]){
			snum = k;
		}
	}
	
	about_text_num = snum;
	
};

for(var k = 0; k < about_button.length; k ++){
		about_button[k].onclick = about_button_click;
	}

var play_on = function(){
	
		document.getElementById("butt_play").style.display = "none";
		document.getElementById("butt_pause").style.display = "block";
		
		go_time = true;
};

var play_off = function(){
	go_time = false;
	butt_w = 120;
	butt_h = 100;
	butt_z = 2;
	about_text_view = 1;
	var n = about_text_num;
	
	about_button[n].style.width = butt_w+"%";
	about_button[n].style.height = butt_h+"px";
	about_button[n].style.zIndex = butt_z;
	about_text.style.opacity = about_text_view;
	
		document.getElementById("butt_pause").style.display = "none";
		document.getElementById("butt_play").style.display = "block";
		
		
};

			
		
