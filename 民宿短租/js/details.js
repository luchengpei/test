window.onload=function(){
	var close = document.getElementById("close");
	var mask = document.getElementById("mask");
	var both = document.getElementsByClassName("both")[0];
	var order = document.getElementById("order");
	var done = document.getElementById("done");
	function hidden(obj,modal,mask){
		obj.addEventListener("click",function(){
			modal.style.display = "none";
			mask.style.display = "none";
		})
	}
	function show(obj,both,mask){
		obj.addEventListener("click",function(){
			both.style.display = "flex";
			mask.style.display = "block";
		})
	}
	hidden(close,both,mask);
	show(order,both,mask);
	/*点完成，跳转到入住人页面*/
	done.onclick=function(){
		window.location.href="check-in.html";
	}
	 var d=new Date();
	var fullYear=d.getFullYear();   //获取年
	var month=d.getMonth()+1;       //获取当前月份
	var day=d.getDay();             //获取星期
	var nowDay=d.getDate();         //获取今天
    var dateEle=document.getElementsByClassName("dates")[0];
	var preMonth=document.getElementById("pre-month");
	var nextMonth=document.getElementById("next-month");
	showDate();
	//上个月按钮
	preMonth.onclick=function(){
		dateEle.innerHTML="";
		month=month-1;
		if(month==0){
			fullYear=fullYear-1;
			month=12;
		}
		showDate();
	}
	//下个月按钮
	nextMonth.onclick=function(){
		dateEle.innerHTML="";
		month=month+1;
		if(month==12){
			fullYear=fullYear+1;
			month=1;
		}
		showDate();
	}	
	function showDate(){
		var d1=new Date(fullYear+"-"+month+"-01"); //当前月份的1号
		var days=d1.getDay();           //1号是星期几
		var dates=d.getDate();   
		/*如果*/
		if(days==0){
			days=7;
		}
		//日历头部
		var yearEle=document.getElementById("year");
		var monthEle=document.getElementById("month");
		var preMonthEle=document.getElementById("pre-month");
		var nextMonthEle=document.getElementById("next-month");
		yearEle.innerHTML=fullYear;	
		monthEle.innerHTML=month+"月";	
		preMonthEle.innerHTML=(month-1)+"月";	
		nextMonthEle.innerHTML=(month+1)+"月";	
		
		var dateNum=getDays(fullYear,month);       //当前月份天数
		var dateNumPre=getDays(fullYear,month-1);    //上个月天数
	
		var rows=Math.ceil((dateNum+days-1)/7);     //日历主体部分行数
		
		/*创建元素*/
		(function(){
			for(let i=0;i<rows*7;i++){
				var divs=document.createElement("div");
			    divs.setAttribute("class","app");
			    dateEle.appendChild(divs);
			}
		})();
		//获取创建的元素
		var dateDivs=document.getElementsByClassName("app");
	    //当前月份
		for(var i=days-1,j=1;i<rows*7,j<=dateNum;i++,j++){
			dateDivs[i].innerHTML=j;
			if(j==nowDay){
				dateDivs[i].style.backgroundColor="#b2b2b2";
				dateDivs[i].style.borderRadius = "50%";
				dateDivs[i].style.color = "#fff";
			}
			}
		//上个月	
		for(var i=days-2,j=dateNumPre;i>0,j>days;i--,j--){
			try{ 
				dateDivs[i].innerHTML=j;
				dateDivs[i].style.color="gray";
			}
			catch(err){
	    	}
		}
		//下个月
		for(var i=dateNum+days-1,j=1;i<rows*7,j<7;i++,j++){
			try{ 
			dateDivs[i].innerHTML=j;
			dateDivs[i].style.color="gray";
			}
			catch(err){
	    	}
		}
		var dateDivs=document.getElementsByClassName("app");
		for(var k=0;k<dateDivs.length;k++){
			if(k%7==5||k%7==6){
				dateDivs[k].style.color = "#fe4f20";
			}
		}
	}
	function getDays(year,month){ 
	    var dayCount; //所查询的月份的天数
	    var now = new Date(year,month,0); 
	    dayCount = now.getDate(); 
	    return dayCount; 
	}
	
	/*选项卡*/
	var odiv=document.getElementById("concent").getElementsByTagName("div");
        var oli=document.getElementById("tab").getElementsByTagName("div");
        for(var i=0;i<oli.length;i++){
            oli[i].index=i;
            oli[i].onclick=function(){
                for(var i=0;i<oli.length;i++){
                    oli[i].className='';
                    odiv[i].style.display="none";

                }
                this.className="red"
                odiv[this.index].style.display="block"
            }
        }
}
