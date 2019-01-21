$(function() {
	
	//Variables
	var londonUrl = "embed?pb=!1m18!1m12!1m3!1d158858.47339377046!2d-0.24169925079317647!3d51.52855824344214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1501607670852"
	var lincolnUrl = "embed?pb=!1m18!1m12!1m3!1d38223.60525201374!2d-0.59051569876191!3d53.21829071772276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48780ccb711104fb%3A0x36603dcfe8c7ddc7!2sLincoln!5e0!3m2!1sen!2suk!4v1501607748018"
	
	var projectOneTitle = "Group Project: VR Blacksmith Simulator";
	var projectOneYoutubeVideo = "";
	var projectOneDescription = "Undergraduate research project, developed in Unity with C# amoung a group of 4. The project allows the player to experience traditional blacksmithing in Virtual Reality and lets them create and save their creations.";
	var projectOneTags = ["C#", "Unity", "Group Project", "Virtual Reality"];

	var projectTwoTitle = "Dissertation: Using Virtual Reality for Education";
	var projectTwoYoutubeVideo = "https://www.youtube.com/embed/N1kqBtfwzhA";
	var projectTwoDescription = "My dissertation project, created in Unreal Engine 4 using C++.";
	var projectTwoTags = ["C++", "Unreal Engine", "Linear", "Scripting", "Virtual Reality"];

	var projectThreeTitle = "Gameplay Prototype: VR Time Crisis";
	var projectThreeYoutubeVideo = "https://www.youtube.com/embed/bJvG35SPK6w";
	var projectThreeDescription = "A Virtual Reality gameplay prototype developed in Unreal Engine using C++ in the style of Time Crisis. After eliminating the enemies each round, the player advances through the level automatically.";
	var projectThreeTags = ["C++", "Gameplay Prototype", "Unreal Engine", "Virtual Reality"];

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
	var projectTags = $("#tags");


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
				fillProjectContent(projectOneTitle, projectThreeYoutubeVideo, projectOneDescription, projectOneTags);
				break;
			case 2:
				fillProjectContent(projectTwoTitle, projectTwoYoutubeVideo, projectTwoDescription, projectTwoTags);
				break;
			case 3:
				fillProjectContent(projectThreeTitle, projectThreeYoutubeVideo, projectThreeDescription, projectThreeTags);
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

	function fillProjectContent(projectTitle, projectYoutubeLink, projectDescription, projectTagsArray) {
		$("#project-title").html(projectTitle);
		$("#project-video").attr('src', projectYoutubeLink);
		$("#project-description").text(projectDescription);
		
		// Empty the tags and refill them for each project
		projectTags.empty();
		for(var i = 0; i < projectTagsArray.length; i++) 
		{
			// Add each of the tags
			projectTags.append("<li>" + projectTagsArray[i] + "</li>");
			console.log(projectTagsArray[i]);
		}
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