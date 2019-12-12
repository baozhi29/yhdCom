(function($){
	$.fn.waterfall = function(){
		var container = this;
		
		var column = 5;
		var items = container.children();
		
		var totalWidth = container.width();
		var width = $('.item').width();
		var space = (totalWidth-width*column)/(column-1);
		var heightArr = [];
		items.each(function(index,item){
			if(index<column){
				$(item).css({top:0,left:index*(width+space)})
				heightArr[index]=$(item).height();
			}else{
				var minIndex = 0;
				var min = heightArr[minIndex];
				$.each(heightArr,function(index,value){
					if(value<min){
						min = value;
						minIndex = index;
					}
				})
				$(item).css({left:minIndex*(width+space),top:min+30})
				heightArr[minIndex] = heightArr[minIndex] + 30 + $(item).height()
			}
		});
		var max = Math.max.apply(null,heightArr);
		container.height(max);
	}
})($)