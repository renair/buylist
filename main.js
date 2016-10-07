$("documents").ready(function(){
	var LIST_ROW = $(".hidden-objects-row").html();
	var LIST_CONTAINER = $(".bl-list");
	var ELEMENT_NAME = $(".bl-add .title");
	
	$(".submit.add-buttons").click(function(){
		//alert();
		var new_row = $(LIST_ROW);
		new_row.find(".bl-product").text(ELEMENT_NAME.val());
		var counter = new_row.find(".bl-count .bl-label");
		var closer = new_row.find(".cancelled");
		new_row.find(".bl-minus").click(function(){
			counter.text(parseInt(counter.text())-1);
		});//.bl-minus
		new_row.find(".bl-plus").click(function(){
			counter.text(parseInt(counter.text())+1);
		});//.bl-plus
		closer.click(function(){
			new_row.remove();
		});//closer
		LIST_CONTAINER.append(new_row);
	});//click
})