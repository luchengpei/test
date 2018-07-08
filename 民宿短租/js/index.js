//设置基准单位， ()()表示自执行函数，
(function (doc, win) {
  var docEl = doc.documentElement,
    // 手机旋转事件,大部分手机浏览器都支持 onorientationchange 如果不支持，可以使用原始的 resize
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        //clientWidth: 获取对象可见内容的宽度，不包括滚动条，不包括边框
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 20*(clientWidth / 320) + 'px';
      };
 
  recalc();
  //判断是否支持监听事件 ，不支持则停止
  if (!doc.addEventListener) return;
  //注册翻转事件
  win.addEventListener(resizeEvt, recalc, false);
 
})(document, window);
/*遮罩层*/
function mask(){
	var close = document.getElementById("close");
	var agree = document.getElementById("agree");
	var mask = document.getElementById("mask");
	var modal = document.getElementsByClassName("modal")[0];
	var both = document.getElementsByClassName("both")[0];
	var order = document.getElementById("order");
	function hidden(obj,modal,mask){
		obj.addEventListener("click",function(){
			modal.style.display = "none";
			mask.style.display = "none";
		})
	}
	function show(obj,modal,mask){
//		obj.addEventListener("click",function(){
			modal.style.display = "flex";
			mask.style.display = "block";
//		})
	}
	/*点击关闭按钮和同意按钮进入到首页*/
	hidden(close,modal,mask);
	hidden(agree,modal,mask);

}


	/*添加入住人*/
	function add(){
		var add = document.getElementsByClassName("add-people")[0];
		var ul = document.getElementsByTagName("ul")[0];
		var name = document.getElementsByClassName("name")[0];
		var number = document.getElementsByClassName("number")[0];
		var order = document.getElementsByClassName("order")[0];
		var inputs = document.getElementsByTagName("input");
		add.onclick = function(){
			
			if(inputs[0].value==''||inputs[1].value==''){
				layer.msg('请先填写第一位入住人信息', {
				  icon: 5,
				  time: 2000 //2秒关闭（如果不配置，默认是3秒）
				},function(){
			});
			}
			else{
				var newName = name.cloneNode(true);
				var newNumber = number.cloneNode(true);
				newName.getElementsByTagName("input")[0].value='';	
				newNumber.getElementsByTagName("input")[0].value='';	
					ul.appendChild(newName);
					ul.appendChild(newNumber);
			}
		}
		
		/*判断信息是否填写完整*/
		order.onclick=function(){
			if(inputs[0].value==''||inputs[1].value==''){
				layer.msg('请填写完整入住人信息', {
				  icon: 5,
				  time: 2000 //2秒关闭（如果不配置，默认是3秒）
				}, function(){
				});
			}
			else{
//				window.location.href="order-details.html";
				if(inputs[1].value.length!=18||isNaN(parseInt(inputs[1].value))){
			  		return  layer.msg('身份证号填写错误，请重新填写', {
							  icon: 5,
							  time: 2000 //2秒关闭（如果不配置，默认是3秒）
							}, function(){
								
						});
			  	}
			 	  else{
			 	  	 window.location.href="order-details.html";
			 	  }
			}
		}
	}

function mask1(){
	var close = document.getElementById("close");
	var agree = document.getElementById("agree");
	var mask = document.getElementById("mask");
	var modal = document.getElementsByClassName("modal")[0];
	var both = document.getElementsByClassName("both")[0];
	var order = document.getElementById("order");
	function hidden(obj,modal,mask){
		obj.addEventListener("click",function(){
			both.style.display = "none";
			mask.style.display = "none";
		})
	}
	function show(obj,both,mask){
		obj.addEventListener("click",function(){
			both.style.display = "flex";
			mask.style.display = "block";
		})
	}
	/*点击关闭按钮和同意按钮进入到首页*/
	hidden(close,both,mask);
	hidden(agree,both,mask);
	show(order,both,mask);

}
/*选项卡*/
function tab(){
	var orders=document.getElementsByClassName("order");
	var btns=document.getElementsByClassName("btns");
	var spans=document.getElementsByClassName("span");
	
		btns[0].onclick=function(){
			orders[0].style.display="block";
			spans[0].style.borderBottom=".1rem solid #FF527B";
			orders[1].style.display="none";
			spans[1].style.borderBottom="none";
		}
		btns[1].onclick=function(){
			orders[1].style.display="block";
			spans[1].style.borderBottom=".1rem solid #FF527B";
			orders[0].style.display="none";
			spans[0].style.borderBottom="none";
		}
}
/*上传图片*/
function preview(file,obj){  
 	var prevDiv = document.getElementById(obj);
 	if (file.files && file.files[0]){  
 		var reader = new FileReader();  
 		reader.onload = function(evt){ 
 		if(obj=='preview3'){
 			prevDiv.innerHTML += '<img class="img" src="' + evt.target.result + '" />';
 		}
		else{
 			prevDiv.innerHTML = '<img class="img" src="' + evt.target.result + '" />';
		}
		}    
 		reader.readAsDataURL(file.files[0]);  
	}else{  
 		prevDiv.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>';  
 	}  
}
/*取消订单*/
function cancel(){
	layer.msg('取消成功', {
	  icon: 1,
	  time: 2000 //2秒关闭（如果不配置，默认是3秒）
	}, function(){
	  window.location.href="order-record.html";
	});
}
/*提交评价*/
function submit(){
	var textarea=document.getElementsByTagName("textarea")[0].value;
	if(textarea==''){
		layer.msg('请填写评价', {
		  icon: 5,
		  time: 2000 //2秒关闭（如果不配置，默认是3秒）
		}, function(){
		});
	}
	else{
		layer.msg('提交成功', {
		  icon: 1,
		  time: 2000 //2秒关闭（如果不配置，默认是3秒）
		}, function(){
			window.location.href="index.html";
		});
	}
}
/*实名认证*/
function realName(){
		var inputs=document.getElementsByTagName("input");
		var num = 0;
		
		for(var i=0;i<inputs.length;i++){
			  if(inputs[i].value==''){
			  	num++;
			 	return	layer.msg('请填写完整并上传照片', {
					  icon: 5,
					  time: 2000 //2秒关闭（如果不配置，默认是3秒）
					}, function(){
						
				});
			 }
			
		}
		if(num != 4){
			  	if(inputs[1].value.length!=18||isNaN(parseInt(inputs[1].value))){
			  		return  layer.msg('身份证号填写错误，请重新填写', {
							  icon: 5,
							  time: 2000 //2秒关闭（如果不配置，默认是3秒）
							}, function(){
								
						});
			  	}
			 	  else{
			 	  	 layer.msg('提交成功', {
						  icon: 1,
						  time: 2000 //2秒关闭（如果不配置，默认是3秒）
						}, function(){
						     window.location.href="mine.html";
						});
			 	  }
			 }
}
