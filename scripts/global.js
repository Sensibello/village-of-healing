// Filename:	_global-accessibility.js
// Description: Global accessibility file to be overwritten at the module level if necessary

/* Disable Focus State
/* - - - - - - - - - - - - - - - - - - - - - - - */
_p("body").on("keydown", function (e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode == key["tab"]) {
        _p("body").removeClass("disable-focus-state");
    }
});
_p("body").on("mousedown", function () {
    if (!_p("body").hasClass("disable-focus-state")) {
        _p("body").addClass("disable-focus-state");
    }
});

/* SVGs - Prevent SVGs from being tabbed to
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var svgs = _p("svg, svg path, svg g, svg circle, svg rect, svg polygon, svg polyline, svg line, svg ellipse");
if (svgs.length) {
    svgs.attr("tabindex", "-1");
    svgs.attr("focusable", "false");
}

//Handles the skip to main content link
_p(document).ready(function () {
    var skipcontent = _p("#skipcontent a");
    if (skipcontent.length) {
        var skipcontentTarget = _p("[data-skipcontent]");

        //If skiptarget is not set, go to the product select box in MMA if it exists; otherwise, go to Main
        if (skipcontentTarget.length == 0) {
            var heading = _p("h1");
            if (heading.length) {
                heading.makeTabbable();
                skipcontentTarget = heading.output[0];
            } else {
                skipcontentTarget = _p("#main").output[0];
            }
        }

        skipcontent.on("keydown", skipcontentTrigger);
        skipcontent.on("click", skipcontentTriggerClick);

    }

    function skipcontentTrigger(evt) {
        var key = evt.key;
        if (key.toLowerCase() == "enter") {
            evt.preventDefault();
            skipcontentTarget.focus();
        }
    }

    function skipcontentTriggerClick(evt) {
        evt.preventDefault();
        skipcontentTarget.focus();
	}

	createBasicJumpLinks();
});


/* For Debugging - Show What Has Focus when query string ?showfocus=true
/* - - - - - - - - - - - - - - - - - - - - - - - */
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
var showFocus = getUrlParameter("showfocus");
if (showFocus == "true") {
    _p("*").on("focus", function (e) {
        e.stopPropagation();
    });
}


/* non-modularized jump links
/* - - - - - - - - - - - - - - - - - - - - - - - */
function createBasicJumpLinks() {
	var scrollBehaviorValue = window.getComputedStyle(document.querySelector('html')).getPropertyValue("scroll-behavior");
	_p(".basic-jump-links").each(function (index, element) {
		makeJumpLinksHeadingTabbale(element);

		_p(element).find("a").enterGoTo(function (e) {
			var stickyNavHeight = 0;
			e.preventDefault();

			_p("html").css("scroll-behavior", "unset");
			var selectedId = _p(e.target).attr("href");
			if (_p(".local-nav").length !== 0 && window.innerWidth > 850) {
				stickyNavHeight = _p(".local-nav").dimensions().height;
			}

			window.location.hash = selectedId;
			window.scrollTo(0, $(selectedId).offset().top - stickyNavHeight);
			_p("html").css("scroll-behavior", scrollBehaviorValue);
			_p(selectedId).focusFirst();
		});
	})
}

function makeJumpLinksHeadingTabbale(element) {
	var jumpSections = [];

	_p(element).find("a").each(function () {
		jumpSections.push(_p(this).attr("href"));
	});

	jumpSections.forEach(function (element) {
		_p(element).find("h1, h2, h3, h4, h5, h6").makeTabbable();
	});
}


_p(document).ready(function () {
	var bandConfig = {
		start: {},
		end: {}
	};

	_p(window).on("load", function () {
		window.CalculateBands();
        DuplicateTableHeadings();

		_p(window).throttleResize(CalculateBands);

		if (window.ResizeObserver) {
			const bbstart = _p("[data-band-start]").not("[data-band-noresize]");
			const bbend = _p("[data-band-end]").not("[data-band-noresize]");
			const observer = new ResizeObserver(function () {
				CalculateBands();
			})

			if (bbstart.length > 0) {
				observer.observe(bbstart.output[0]);
			}

			if (bbend.length > 0) {
				observer.observe(bbend.output[0]);
			}
		}

		try {
			BindImageListeners();
		} catch (err) { }
	});


	/* Blue bands
	/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	function CalculateBands() {
		window.CalculateBands();
	}

	//Attaching function to the window allows it to be called from expanding/collapsing modules
	window.CalculateBands = function() {
		SetBandConfig();
		_p(".bb").remove();
		var startBands = _p("[data-band-start]");
		var endBands = _p("[data-band-end]");

		for (i = 0; i < startBands.length; i++) {
			var start = GetBandValues("start", startBands.output[i]);
			var end = GetBandValues("end", endBands.output[i]);
			var height = end - start;

			_p("#site").appendChild("div", "", "bb");
			_p("#site > .bb").eq(i).css("height", height + "px");
			_p("#site > .bb").eq(i).css("top", start + "px");
		}
	}

	function SetBandConfig() {
		var screenWidth = window.innerWidth;

		bandConfig.start["content"] = { factor: 0 };
		bandConfig.start["mma"] = { hook: ".mma-image-outer-container" };
        bandConfig.start["qs-mma"] = screenWidth > 850 ? { hook: ".qs-mma-image-outer-container" } : { hook: ".qs-mma-form-wrap" };
		bandConfig.start["video-scroller"] = { hook: ".video-wrapper" };
		bandConfig.start["video-player"] = { factor: 0 };
		bandConfig.start["mosaic"] = { hook: ".script" };
		bandConfig.start["products"] = { hook: ".product" };
		bandConfig.end["dots"] = { factor: 0 };
		bandConfig.end["content"] = { factor: 1};
		bandConfig.end["image-list"] = { factor: 0.3 };
		bandConfig.end["pro-tip"] = { hook: ".copy" };
		bandConfig.end["video-player"] = { hook: ".video-player-wrapper" };
        bandConfig.end["video-scroller"] = { hook: "video" };
		bandConfig.end["tiles"] = { hook: ".inner-image-wrap" };
        bandConfig.end["additional-details-override"] = { factor: 1 };
    }


	function GetBandValues(type, obj) {
		var id = _p(obj).hasClass("content") ? "content" : _p(obj).attr("data-module");		
		var bandObject = type == "start" ? bandConfig.start[id] : bandConfig.end[id];
		var hook = bandObject != undefined && bandObject.hook != undefined ? _p(obj).find(bandObject.hook) : _p(obj);
		var factor = bandObject != undefined && bandObject.factor != undefined ? bandObject.factor : 0.5;

		return Math.round(_p(window).scrollTop() + hook.dimensions("top") + (factor * hook.dimensions("height")));
	}


	/* Post-load caching of all product images
	/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	var cachedProductImages = [];

	function BindImageListeners() {
		switch (_p("body").attr("data-device")) {

			case "desktop":
				_p(".qs-overlay [data-value], .qs-mma [data-value]").on("mouseenter focus", function (e) {
					var code = _p(e.target).attr("data-value").replace("+", "-").replace("~", "-").toLowerCase();
					CacheProductImage(code);
				});
				break;
			default:
				break;
		}
	}

	function CacheProductImage(code) {
		if (!cachedProductImages.includes(code)) { 
			var img = new Image();
			img.src = "/content/images/domainprogressive/wh3/base/icons/products/blue/" + code + '.svg';
			cachedProductImages.push(code);
		}
	}


    /* Heading duplication for standard tables
    /* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	function DuplicateTableHeadings() {
		_p('table.is-standard').each(function () {
			_p(this).find('th').each(function (index) {
				var headingText = _p(this).text();
				_p(this).closest('table').find('tbody').find('tr').each(function () {
					_p(this).find('td').eq(index).each(function () {
						_p(this).prepend('<span class="is-duplicate-heading">' + headingText + ':</span>');
					});
				});
			});
		});
    }
});

// Filename:	_global-tracking.js
// Description: Global Google Analytics tracking file to be overwritten at the module level if necessary

//HOW TO USE: 
//TO TRACK ON HOVER OR ON HOVER AND CLICK: 
//Put "data-tracking-hover" attribute on the container of the stuff you want to track hover / hover & click on.This tracks < a > tags only right now.Can just define more elements in the selector as needed.

//TO DEFINE A LABEL: 
//Put "data-tracking-label" on the label on the element you want to define a label for and set it equal to the label.
// If you want the tracking label for a select to be the value rather than the option text set the data-tracking-label="value" on the select. Without the attribute it will fall back to the option text.

//TO OVERRIDE THIS TRACKING FILE AND USE THE _t FILE: 
//Add "data-tracking-override" on the containing element to disregard all tracking for everything in that element and set your own in the _t file, or set it on one specific element to disregard this tracking document for that element and set your own in the _t file.


// _p(document).ready(function () {
// 	var action;
// 	var label;
// 	var pagePosition;
// 	var dataValue;
// 	var clickableElementsSelector = "a, button, input:not([type=\"text\"]):not([type=\"tel\"]):not([type=\"email\"]), textarea";
// 	var trackedFocusedInputs = "input[type=\"text\"], input[type=\"tel\"], input[type=\"email\"]";
// 	var pageTechName;
// 	var type;

// 	_p("body").on("monetate-click", function (e) {
// 		console.log("hi", e);
// 	});

// 	_p("body").on("click", checkAttributes);

// 	_p("[data-redirect-delay]").on("click", checkAttributes);

// 	_p("select").on("change", function (e) {
// 		var clickedElement = _p(e.target);
// 		if (clickedElement.closest("[data-tracking-override]", clickedElement).length < 1) { // If Tracking is Not Overriden with _t file
// 			sendEvent(clickedElement.closest("select", true));
// 		}
// 	});

// 	_p(trackedFocusedInputs).on("focus", function (e) {
// 		var focusedElement = _p(e.target);
// 		if (focusedElement.closest("[data-tracking-override]", focusedElement).length < 1) { // If Tracking is Not Overriden with _t file
// 			sendEvent(focusedElement.closest(trackedFocusedInputs, true));
// 		}
// 	})

// 	function checkAttributes(e) {
// 		var clickedElement = _p(e.target);
// 		if (clickedElement.closest(clickableElementsSelector, true)) {
// 			if (clickedElement.closest("[data-tracking-override]", clickedElement).length < 1) { // If Tracking is Not Overriden with _t file
// 				sendEvent(clickedElement.closest(clickableElementsSelector, true));
// 			}
// 		}
// 	}

// 	//Helper Functions
// 	function getClickedElementAttrType(clickedElement) {
// 		try {
// 			return clickedElement.attr("type");
// 		} catch (err) {
// 			return "";
// 		}
// 	}

// 	function getClickedElementTagName(clickedElement) {
// 		return clickedElement.output[0].tagName;
// 	}

// 	function checkDefined(ele) {
// 		return ele != null && ele.length;
// 	}

// 	function checkDefinedEventProps(attr) {
// 		return (attr != null && attr != undefined && attr != "");
// 	}

// 	//Main Functions
// 	function setAction(clickedElement) {
// 		var thisElement = getClickedElementTagName(clickedElement);
// 		switch (thisElement) {
// 			case "A":
// 				action = "LinkClick";
// 				break;
// 			case "BUTTON":
// 				action = "ButtonClick";
// 				break;
// 			case "INPUT":
// 				var thisAttr = getClickedElementAttrType(clickedElement);
// 				switch (thisAttr) {
// 					case "checkbox":
// 						action = "BoxCheck";
// 						break;
// 					case "radio":
// 						action = "RadioButtonChange";
// 						break;
// 					case "tel":
// 					case "email":
// 					case "text":
// 						action = "TextBoxFocus";
// 						break;
// 					default:
// 						action = "ButtonClick";
// 						break;
// 				}
// 				break;
// 			case "SELECT":
// 				action = "DropdownChange";
// 				break;
// 			default:
// 				action = "LinkClick";
// 				break;
// 		}
// 	}

// 	function setDataValue(clickedElement) {
// 		if (getClickedElementAttrType(clickedElement) == "checkbox") { //Checkboxes
// 			if (clickedElement.output[0].checked) {
// 				dataValue = "Check";
// 			} else {
// 				dataValue = "Uncheck";
// 			}
// 		} else {
// 			dataValue = "";
// 		}
// 	}

// 	function setTypeAndPageTechName(clickedElement) {
// 		if (clickedElement.attr("href") != null && clickedElement.attr("href") != undefined) {
// 			if (clickedElement.attr("href").includes("onlineservice") || clickedElement.attr("href").includes("a-account.qa") || clickedElement.attr("href").includes(pqv.login)) {
// 				pageTechName = window.location.pathname;
// 				type = "servicing";

// 				if (window.location.pathname == "undefined" || window.location.pathname == "" || window.location.pathname == null || window.location.pathname == "/") {
// 					pageTechName = "/home/index/"
// 				}
// 			}
// 		}
// 	}

// 	function setPagePosition(clickedElement) {
// 		var closestModule = clickedElement.closest("[data-module]");
// 		var closestModuleName = clickedElement.closest("[data-module]").attr("data-module");
// 		if (closestModule.length) {
// 			pagePosition = closestModuleName;
// 			var moduleSection = clickedElement.closest("[data-module-section]", true);

// 			if (moduleSection.length > 0) {
// 				pagePosition = pagePosition + "|" + moduleSection.attr("data-module-section");
// 			}
// 		} else if (clickedElement.closest("[data-tracking-pageposition]", true).length) {
// 			pagePosition = clickedElement.closest("[data-tracking-pageposition]", true).attr("data-tracking-pageposition");
// 		} else if (clickedElement.closest("[data-page-position]").length) { //This scenario only used for quote starts as that is how they have it coded on their side
// 			pagePosition = clickedElement.closest("[data-page-position]").attr("data-page-position");
// 		} else if (clickedElement.closest(".content").length > 0) {
// 			pagePosition = "content";
// 		} else {
// 			pagePosition = "define-pgPosition";
// 		}
// 	}

// 	function setLabel(clickedElement) {
// 		var clickedElementLabel = clickedElement.attr("data-tracking-label") == null ? clickedElement.attr("data-trackinglabel") : clickedElement.attr("data-tracking-label");
// 		var clickedElementHref = clickedElement.attr("href");

// 		if (clickedElement.output[0].tagName == "SELECT") {
// 			//If this is a dropdown box, and has data-tracking-label="value" then should use select option value otherwise use selected option text  
// 			var selectedOption = clickedElement.output[0].options[clickedElement.output[0].options.selectedIndex];
// 			if (clickedElementLabel !== null && clickedElementLabel.toLowerCase() == "value") {
// 				label = selectedOption.value.toUpperCase();
// 			} else {
// 				label = selectedOption.text.replace(/\W/g, '').toLowerCase();
// 			}
// 		} else if (checkDefined(clickedElementLabel)) { //If a tracking label is defined, use the tracking label as the label
// 			label = clickedElementLabel;
// 		} else if (clickedElement.attr("type") == "submit" || clickedElement.attr("type") == "checkbox" || clickedElement.attr("type") == "radio" || clickedElement.attr("type") == "tel" || clickedElement.attr("type") == "text") {
// 			//If this is a submit button, text box, checkbox or radio button, use either its label or value as the label
// 			if (clickedElement.siblings("label").length) {
// 				var clickedElementId = clickedElement.attr("id");
// 				var thisLabel = clickedElement.siblings("label[for='" + clickedElementId + "']");
// 				label = thisLabel.text().replace(/\W/g, '').toLowerCase();
// 			} else if (clickedElement.attr("value").length) {
// 				label = clickedElement.attr("value").replace(/\W/g, '').toLowerCase();
// 			} else {
// 				label = "define-label";
// 			}
// 		} else if (checkDefined(clickedElementHref)) {
// 			//If this has an href...
// 			//If this is a telephone number, use the phone number as the label
// 			if (clickedElementHref.includes("tel:")) {
// 				label = clickedElementHref.split(':')[1].replace(/\W/g, '').toLowerCase();
// 			} else if (clickedElementHref.includes("mailto:")) {
// 				//If this is an email address, use beginning part of email as the label
// 				//don't pass actual email address due to PII rules
// 				label = "email-" + clickedElementHref.split('@')[0].split(":")[1];
// 			} else {
// 				label = clickedElement.text().replace(/\W/g, '').toLowerCase();
// 			}
// 		}
// 		else {
// 			//Else, use the text of the clicked element as the label
// 			label = clickedElement.text().replace(/\W/g, '').toLowerCase();
// 		}
// 	}

// 	function sendEvent(clickedElement) {
// 		if (clickedElement.length > 0) {
// 			setAction(clickedElement);
// 			setLabel(clickedElement);
// 			setPagePosition(clickedElement);
// 			setDataValue(clickedElement);
// 			setTypeAndPageTechName(clickedElement);

// 			var customVariables = {};

// 			if (checkDefinedEventProps(pagePosition)) {
// 				customVariables.pgPosition = pagePosition;
// 			}
// 			if (checkDefinedEventProps(dataValue)) {
// 				customVariables.dataValue = dataValue;
// 			}
// 			if (checkDefinedEventProps(type)) {
// 				customVariables.type = type;
// 			}
// 			if (checkDefinedEventProps(pageTechName)) {
// 				customVariables.pageTechName = pageTechName;
// 			}

// 			_gaObj.GATrackEvent(null, action, label, null, false, customVariables, false);
// 		}
// 	}


//     /*																													             HOVER
//     /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// 	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// 	//HOW TO USE: Put data-tracking-hover attribute on the container of the stuff you want to track hover/hover&click on. This tracks <a> tags only right now. Can just define more elements in the selector below.

// 	var startHover = (new Date).getTime();

// 	_p("[data-tracking-hover] a")
// 		.on("mouseenter", function () {
// 			startHover = (new Date).getTime();
// 		})
// 		.on("mouseleave", function () {
// 			sendHoverTracking(_p(this), "Hover");
// 		})
// 		.on("click", function () {
// 			sendHoverTracking(_p(this), "HoverAndClick");
// 		});

// 	function sendHoverTracking(obj, action) {
// 		var label = obj.text().replace(/\W/g, '').toLowerCase();
// 		var endHover = (new Date).getTime();
// 		var msHovered = endHover - startHover;
// 		setPagePosition(obj);
// 		if (msHovered >= 500 && label !== "" && (typeof label !== "undefined") && (typeof pagePosition !== "undefined")) {
// 			if (obj.parent().hasClass("ols")) {
// 				_gaObj.GATrackEvent(null, action, label, msHovered, true, { 'pgPosition': pagePosition, 'type': 'servicing', 'pageTechName': pageTechName }, false);
// 			} else {
// 				_gaObj.GATrackEvent(null, action, label, msHovered, true, { 'pgPosition': pagePosition }, false);
// 			}
// 		}
// 	}

// 	/*																													          SCROLL */
// 	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// 	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// 	var modules = {};
// 	_p("[data-module]").each(function () {
// 		if (_p(this).closest("[data-module]").length == 0) {
// 			var thisDims = _p(this).dimensions();

// 			if (_p(this).css("display") != "none") {
// 				modules[_p(this).attr("data-module")] = {};
// 				modules[_p(this).attr("data-module")].visible = "";
// 				modules[_p(this).attr("data-module")].topEdge = thisDims.top;
// 				modules[_p(this).attr("data-module")].bottomEdge = thisDims.top + thisDims.height;
// 			}
// 		}
// 	});


// 	_p(window).on("load", GetVisibleModules);
// 	_p(window).on('scroll', GetVisibleModules);

// 	function GetVisibleModules() {
// 		var top = _p(window).scrollTop();
// 		var height = window.innerHeight;
// 		var pos = top + height;
// 		var direction = "";

// 		for (var key in modules) {
// 			direction = "";

// 			if (pos > modules[key].topEdge && modules[key].visible.indexOf("visible") == -1) {
// 				modules[key].visible += "visible ";
// 				direction = "scrolldown-display";
// 			}

// 			if (top > modules[key].bottomEdge && modules[key].visible.indexOf("above") == -1) {
// 				modules[key].visible += "above ";
// 				direction = "scrolldown-hidden";
// 			}

// 			if (top < modules[key].bottomEdge && modules[key].visible.indexOf("above") >= 0) {
// 				modules[key].visible = modules[key].visible.replace("above", "");
// 				direction = "scrollup-display";
// 			}

// 			if (pos < modules[key].topEdge && modules[key].visible.indexOf("visible") >= 0) {
// 				modules[key].visible = modules[key].visible.replace("visible", "");
// 				direction = "scrollup-hidden";
// 			}

// 			if (direction.length > 0) {
// 				_gaObj.GATrackEvent(null, "Scroll", direction, null, true, { 'pgPosition': key }, false);
// 			}
// 		}
// 	}


//     /*																													 AD BLOCKER TRACKER
// 	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// 	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// 	function AdBlockEnabled() { //THIS HAS BEEN UPDATED WITH NEW CODE THAT TONY RIZZO FOUND WORKS MORE ACCURATELY - 6/3/19
// 		var isAdBlockEnabled = "false";

// 		var testAd = document.createElement('div');
// 		testAd.innerHTML = '&nbsp;';
// 		testAd.className = 'adsbox';
// 		testAd.position = 'absolute';
// 		document.body.appendChild(testAd);
// 		window.setTimeout(function () {
// 			if (testAd.offsetHeight === 0) {
// 				isAdBlockEnabled = "true";
// 			}
// 			_p(testAd).remove();
// 		}, 50);

// 		return isAdBlockEnabled;
// 	}
// 	function AdBlockerCheck() {
// 		var adblockresult = AdBlockEnabled();
// 		if (adblockresult == false || adblockresult == undefined) {
// 			adblockresult = "false";
// 		} else {
// 			adblockresult = "true";
// 		}
// 		dataLayer.push({ 'adBlocker': adblockresult });
// 	}

// 	AdBlockerCheck();

// 	/*																													 DEVICE TOKEN COOKIE
// 	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// 	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// 	cookie_name = "DVCTOKEN";
// 	var deviceTokenPassed = getUrlVars()["dvctoken"];
// 	var cookieDate = new Date;
// 	cookieDate.setFullYear(cookieDate.getFullYear() + 35);

// 	if (deviceTokenPassed != undefined && deviceTokenPassed != "" && deviceTokenPassed != null) {
// 		setDeviceTokenCookie();
// 	}

// 	function getUrlVars() {
// 		var vars = [], hash;
// 		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
// 		for (var i = 0; i < hashes.length; i++) {
// 			hash = hashes[i].split('=');
// 			vars.push(hash[0]);
// 			vars[hash[0]] = hash[1];
// 		}
// 		return vars;
// 	}
// 	function setDeviceTokenCookie() {
// 		if (document.cookie != document.cookie) {
// 			index = document.cookie.indexOf(cookie_name);
// 		} else {
// 			index = -1;
// 		}

// 		if (index == -1) {
// 			document.cookie = cookie_name + "=" + deviceTokenPassed + "; domain=progressive.com; expires=" + cookieDate.toGMTString() + ";";
// 		}
// 	}
// });

  _p(document).ready(function () {
    //add anchors to <sup>

    _p("body").on("sup-wrap", function (e) {
        checkForDisclosure(e.detail.textContent);

        if (checkForDisclosure(e.detail.textContent)) {
            e.detail.innerHTML = "<a href='#ToolTipDialog' class='disclosure-anchor' disclosure-key=" + e.detail.textContent + " aria-haspopup='dialog'><span aria-hidden='true'>" + e.detail.textContent + "</span><span class='sr-only'>(See Disclosure)</span></a>";

            //Add class for certain symbols for typographic styling
            if (e.detail.textContent.contains("*")) {
                e.detail.children[0].classList.add("asteriskSymbol");
            } 

            if (e.detail.textContent.contains("§")) {
                e.detail.children[0].classList.add("sectionSymbol");
            } 

            if (hasNumber(e.detail.textContent)) {
                e.detail.children[0].classList.add("textSymbol");
			} 

			if (e.detail.textContent.contains("Δ")) {
				e.detail.children[0].classList.add("deltaSymbol");
            } 

            if (e.detail.textContent.contains("+")) {
                e.detail.children[0].classList.add("plusSymbol");
            } 

            checkParent(_p(e.detail));
        } else {
            e.detail.removeAttribute("disclosuretip-trigger");
            e.detail.removeAttribute("tooltip-trigger");
        }
    });

    _p("[disclosuretip-trigger]").each(function (i, obj) {
        if (checkForDisclosure(this.textContent)) {
            if (this.previousSibling.nodeType == 3) {
                var sib = this.previousSibling;
                var siblingText = sib.textContent;
                var split = siblingText.split(" ");
                var lastword = split.pop();
                var strippedString = split.join(" ");
                sib.textContent = strippedString + " ";
                _p(this).before("<span class='nowrap'>" + lastword + "</span>");
                _p(this.previousSibling).append(this.outerHTML);
                var cacheNew = _p(this.previousSibling).find("[disclosuretip-trigger]");
                _p(this).remove();

                _p("body").trigger("sup-wrap", {
                    detail: cacheNew.output[0]
                });
            }
        }
    });

    function hasNumber(myString) {
        return /\d/.test(myString);
    }

    function checkForDisclosure(disclosureIcon) {
        if (_p("[disclosure-value='" + disclosureIcon + "']").length > 0) {
            return true;
        }
    }

    function checkParent(current) {
        var parent = current.parent();
        var siblingContentImage = parent.siblings(".content-image");
        if (siblingContentImage.length) {
            parent.css("overflow", "visible");
            return;
        } else {
            if (parent.is("#site").length == 0) {
                checkParent(parent);
            }
        }
    }

    //bind click events
    _p("[disclosuretip-trigger] > *").on('click', function (e) {
        e.preventDefault();
        var _this = _p(e.currentTarget);

        _p("body").trigger("tool-tip", {
            detail: {
                target: _this,
                text: disclosureSelector(_this.attr("disclosure-key")),
                variant: "disclosure-dialog",
				positioningElement: e.currentTarget.parentNode,
				forceOutView: e.currentTarget.parentNode.getAttribute("forceOutView") //won't need this most of the time, helpful if needing to position tool tip within an overflow hidden box, accepts values "top", "left", "right".
            }
        });
    });
});

//Get Disclosure from Footer and Add to Dialog Box
function disclosureSelector(disclosureIcon) {
    var toolTipText = "";

    //Find disclosure paragraph element
    var disclosurePElement = _p("[disclosure-value='" + disclosureIcon + "']");

    //Extract disclosureText from disclosurePElement and remove disclosureIcon from disclosureText string
    var disclosureText = disclosurePElement.html().replace(disclosureIcon, "").replace("<span>", "");


    //Place disclosureText in dialog box
    toolTipText += "<p class='tip-body'>" + disclosureText + "</p>";

    return toolTipText;
};

_p(document).ready(function () {
    _p(".block-link").each(function (i, obj) {
        setupBounce(obj);
    });

    //Needs to be triggered if links are added after page load
    _p('body').on("resetBounce", function () {
        _p(".block-link").each(function (i, obj) {
            setupBounce(obj);
        });
    });
});

function setupBounce(obj) {
    var _this = _p(obj);
	var text = _this.text().trim();
    var lastWord = text.replace(/(\S+)\s*$/, '<span class="last-word">$1<span class="arrow" aria-hidden="true">&#xe018;</span></span>');

    _this.html(lastWord);
}
_p(document).ready(function () {
    _p('.dropdown select').on('focus', function (e) {
        _p(this).siblings('.display').addClass('focus');
    });
    _p('.dropdown select').on('focusout', function (e) {
        _p(this).siblings('.display').removeClass('focus');
    });
    _p('.dropdown select').on('mousein', function (e) {
        _p(this).siblings('.display').addClass('hover');
    });
    _p('.dropdown select').on('mouseout', function (e) {
        _p(this).siblings('.display').removeClass('hover');
    });

    _p('.checkbox input').on('focus', function (e) {
        _p(this).siblings('label').addClass('focus');
    });
    _p('.checkbox input').on('focusout', function (e) {
        _p(this).siblings('label').removeClass('focus');
    });
});