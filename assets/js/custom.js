$(function() {
	
	//Variables
	var londonUrl = "embed?pb=!1m18!1m12!1m3!1d158858.47339377046!2d-0.24169925079317647!3d51.52855824344214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1501607670852"
	var lincolnUrl = "embed?pb=!1m18!1m12!1m3!1d38223.60525201374!2d-0.59051569876191!3d53.21829071772276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48780ccb711104fb%3A0x36603dcfe8c7ddc7!2sLincoln!5e0!3m2!1sen!2suk!4v1501607748018"
	var ytTwo = "https://www.youtube.com/embed/N1kqBtfwzhA";
	var ytThree = "https://www.youtube.com/embed/bJvG35SPK6w";
	var titleOne = "Group Project: VR Blacksmith Simulator";
	var titleTwo = "Dissertation: Using Virtual Reality for Education";
	var titleThree = "VR Time Crisis Prototype";

	var linkLondon = $("#linkLondon");
	var linkLincoln = $("#linkLincoln");
	var expand_box = $("#expand-box");
	var port_expand_box = $("#port_expand_box");
	var isMapExpanded = false;
	var isPortBoxExpanded = false;
	var cachedLocation = "";

	var linkPortBoxOne = $("#one");
	var linkPortBoxTwo = $("#two");
	var linkPortBoxThree = $("#three");
	var projectOverlayExit = $(".project-overlay-exit");


	function expandMap(locationURL) { 

		var googleMapUrl = '<div class="overlay" onClick="style.pointerEvents="none"></div><iframe src="https:\/\/www.google.com/maps/'+locationURL+' height="300" frameborder="0" style="frameborder:0" allowfullscreen></iframe>' 
		console.log(googleMapUrl)
		
		if (isMapExpanded === false) { 
			// Expand box + add map
			expand_box.html(googleMapUrl);
			expand_box.slideToggle(200);
			isMapExpanded = true;
			cachedLocation = locationURL;
		} else if (cachedLocation != locationURL) {
			// Just add map
			expand_box.html(googleMapUrl);
			isMapExpanded = true;
			cachedLocation = locationURL;
		} else { 
			// Close box
			expand_box.slideToggle(200);
			isMapExpanded = false;
		}
	};

	linkLincoln.click(function() { 
		expandMap(lincolnUrl);
	});

	linkLondon.click(function() { 
		expandMap(londonUrl);
	});

	function expandPortBox(projectRef) {
		
		if (isPortBoxExpanded == false)
		{
			port_expand_box.slideToggle(400);
			isPortBoxExpanded = true;
		}
		
		switch(projectRef) {
			case 1:
				fillProjectContent(titleOne, ytThree);
				break;
			case 2:
				fillProjectContent(titleTwo, ytTwo);
				break;
			case 3:
				fillProjectContent(titleThree, ytThree);
				break;
			default:
				console.log("Error with youtube link");
				break;
		}

	};

	function hidePortBox() {
		port_expand_box.slideToggle(400);
		isPortBoxExpanded = false;
	};

	function fillProjectContent(projectTitle, youtubeLink) {
		$("#project-title").html(projectTitle);
		$("#youtube_video").attr('src', youtubeLink);
		//$(".tags").empty();
	}

	linkPortBoxOne.click(function() { 
		expandPortBox(1);
	});

	linkPortBoxTwo.click(function() { 
		expandPortBox(2);
	});

	linkPortBoxThree.click(function() { 
		expandPortBox(3);
	});

	projectOverlayExit.click(function() { 
		hidePortBox();
	});

});