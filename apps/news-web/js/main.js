var homeBox = null;
var hotBox = null;
var categoryBox = null;
var selector = null;

var recommandList = [{
		id: "1",
		title: "Captain America",
		playLength: "124",
		posterUrl: "../icon/i_h_1.jpg"
	}, {
		id: "2",
		title: "Thor",
		playLength: "114",
		posterUrl: "../icon/i_h_2.jpg"
	}, {
		id: "3",
		title: "War of the Worlds",
		playLength: "58:34",
		posterUrl: "../icon/i_h_3.jpg"
	}, {
		id: "5",
		title: "The Mechanic",
		playLength: "93",
		posterUrl: "../icon/i_h_5.jpg"
	}];
	var classList = [
		{
			id: "1",
			name: "Science"
		}, 
		{
			id: "2",
			name: "Action"
		}, 
		{
			id: "1",
			name: "War"
		},
		{
			id: "1",
			name: "Magic"
		}, 
		{
			id: "1",
			name: "Comedy"
		}
		,
		{
			id: "1",
			name: "Love"
		},
		{
			id: "1",
			name: "Story"
		}, 
		{
			id: "1",
			name: "Adventure"
		}, 
		{
			id: "1",
			name: "Cartoon"
		}
	];
$(function() {

	$(".historyi").on("click", this, function() {

		window.location.href = 'history.html';
	});

	selector = new MainSelector($("#main_selector"), $("#home_box"), $("#hot_box"), $("#category_box"));

	homeBox = new HomeBox($("#home_box"), recommandList, classList);

	$("#hot_box").find(".box").on("click", this, function(event) {
		
		window.location.href = "play.html?wefun-videoId="+$(this).attr("videoId");
	});
	
	$("#category_box").find("td div").on("click", this, function() {
		
		window.location.href = "list.html?wefun-classId="+$(this).attr("classId")+"&wefun-className="+$(this).attr("className");
	});

});