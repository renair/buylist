$("documents").ready(function(){
	var LIST_ROW = $(".hidden-objects-row").html();
	var LIST_LEFT = $(".hidden-objects-left").html();
	var LIST_CONTAINER = $(".bl-list");
	var LEFT_CONTAINER = $(".bl-bought .remained-items");
	var LEFT_CONTAINER_DONE = $(".bl-bought .bought-items");
	var ELEMENT_NAME = $(".bl-add .title");
	
    createNewRow("Test1");
    createNewRow("Test2");
    createNewRow("Test3");
    
	$(".submit.add-buttons").click(function(){
		//alert();
        var name = ELEMENT_NAME.val();
        if(name)
        {
            createNewRow(name);
            ELEMENT_NAME.val("");
        }
        else
        {
            createNewRow("Edit me");
        }
	});//click
    
    function createNewRow(rowName)
    {
        var new_row = $(LIST_ROW);
        var new_left = $(LIST_LEFT);
        var new_left_done = $(LIST_LEFT);
        new_left_done.hide();
        
		var counter = new_row.find(".bl-count .bl-label");
		var closer = new_row.find(".cancelled");
        var row_name = new_row.find(".bl-product");
        
        row_name.text(rowName);
        new_left.find(".item-name").text(rowName);
        new_left_done.find(".item-name").text(rowName);
        row_name.keyup(function(event){
            if(row_name.text().length == 0)
            {
                row_name.text("T");
            }
            new_left.find(".item-name").text(row_name.text());
            new_left_done.find(".item-name").text(row_name.text());
        });//text changer
		new_row.find(".bl-minus").click(function(){
            var value = parseInt(counter.text())-1;
			counter.text(value);
            new_left.find(".bl-item-counter").text(value);
            new_left_done.find(".bl-item-counter").text(value);
		});//.bl-minus
		new_row.find(".bl-plus").click(function(){
			var value = parseInt(counter.text())+1;
			counter.text(value);
            new_left.find(".bl-item-counter").text(value);
            new_left_done.find(".bl-item-counter").text(value);
		});//.bl-plus
		closer.click(function(){
			new_row.remove();
            new_left.remove();
            new_left_done.remove();
		});//closer
        new_row.find(".buyed").click(function(){
            new_row.addClass("bl-already-buyed-row");
            new_left.hide();
            new_left_done.show();
        });//set as buyed
        new_row.find(".rebuy").click(function(){
            new_row.removeClass("bl-already-buyed-row");
            new_left_done.hide();
            new_left.show();
        });//set as buyed
        
		LIST_CONTAINER.append(new_row);
		LEFT_CONTAINER.append(new_left);
		LEFT_CONTAINER_DONE.append(new_left_done);
    }
});