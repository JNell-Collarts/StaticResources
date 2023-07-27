window.addEventListener('message', function (event) {
	if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
		setTimeout(function () {
			$(".js-dropdown").select2({
				minimumResultsForSearch: -1
			});

			$('.js-dropdown').on('select2:select', function (e) {
				$(this).valid()
			});
		})
	}
});

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

$("select[name=courses]").on("change", function () {
	$(".down_btn > a").hide().removeClass("active")
	var course = $(this).val();
	$(".down_btn > a[data-course='" + course + "']").show().addClass("active")
})

$("#downloadForm > .steps").slice(1).hide();
$("#downloadForm").validate({
	rules: {
		firstname: "required",
		email: {
			required: true,
			email: true
		},
		courses: "required",
		collarts_journey: "required",
		how_would_you_describe_yourself: "required",
	},
	highlight: function (element, errorClass, validClass) {
		if ($(element).prop("tagName") == "SELECT") {
			$(element).parents(".describe_downs").addClass("error").removeClass("valid");
		} else {
			$(element).addClass("error").removeClass("valid");
		}
	},
	unhighlight: function (element, errorClass, validClass) {
		if ($(element).prop("tagName") == "SELECT") {
			$(element).parents(".describe_downs").removeClass("error").addClass("valid");
		} else {
			$(element).addClass("valid").removeClass("error");
		}
	}
})

$(".download__btn").on("click", function () {
	if ($("#downloadForm .steps.active input, #downloadForm .steps.active select").valid()) {
		var data = {
			"fields": [
				{ "name": "firstname", "value": $("input[name=firstname]").val() },
				{ "name": "email", "value": $("input[name=email]").val() },
				{ "name": "course_interest", "value": $("select[name=courses]").val() },
				{ "name": "subscribe_to_the_newsletter", "value": !$("input[name=subscribe]").is(":checked") },
			],
			"context": {
				"hutk": getCookie("hubspotutk"),
				"pageUri": window.location.href,
				"pageName": document.title
			},
			skipValidation: true
		};

		axios.post('https://api.hsforms.com/submissions/v3/integration/submit/4074049/8cce7026-9981-4b95-bb6f-1bd5c0acd032', data)
			.then(function (res) {
				if (res.status == 200) {
					var course = $("select[name=courses]").val().replace(/[^a-zA-Z0-9]+/g, "")
					$(".course_name." + course).show();
					$(".stepo_one").removeClass("active").hide();
					$(".stepo_two").addClass("active").fadeIn();
				}
			})
			.catch(function (err) {
				console.log(err);
			})

	}
})

$(".goto__step3").on("click", function () {
	$(".stepo_two").removeClass("active").hide();
	$(".stepo_three").addClass("active").fadeIn();
})

$(".submit__form").on("click", function () {
	if ($("#downloadForm .steps.active select").valid()) {
		var data = {
			"fields": [
				{ "name": "firstname", "value": $("input[name=firstname]").val() },
				{ "name": "email", "value": $("input[name=email]").val() },
				{ "name": "course_interest", "value": $("select[name=courses]").val() },
				{ "name": "subscribe_to_the_newsletter", "value": !$("input[name=subscribe]").is(":checked") },
				{ "name": "what_stage_are_you_in_your_collarts_journey", "value": $("select[name=collarts_journey]").val() },
				{ "name": "how_would_you_describe_yourself", "value": $("select[name=how_would_you_describe_yourself]").val() },
			],
			"context": {
				"hutk": getCookie("hubspotutk"),
				"pageUri": window.location.href,
				"pageName": document.title
			},
			skipValidation: true
		};

		axios.post('https://api.hsforms.com/submissions/v3/integration/submit/4074049/99904479-c2da-4ca3-8f09-dcafa18473d6', data)
			.then(function (res) {
				console.log(res);
				if (res.status == 200) {
					$(".stepo_three").removeClass("active").hide();
					$(".stepo_four").addClass("active").fadeIn();
				}
			})
			.catch(function (err) {
				console.log(err);
			})
	}
})

$(window).scroll(function () {
	var top = $(window).scrollTop();
	var total = $('.header-upper').outerHeight();
	if (top >= total) {
		$(".header-module").addClass("header-fixed");
	} else {
		$(".header-module").removeClass("header-fixed");
	}
})

//jquery doesn't seem to work

$(window).on('scroll', function () {
	$('.header-two-cta').addClass('cta-active');
	if ($(window).scrollTop() + $(window).height() > $(document).height() - document.documentElement.querySelector('.footer-container').offsetHeight) {

		document.documentElement.querySelectorAll('.header-two-cta').forEach(cta => {
			cta.classList.add('cta-active');
		});
	} else {
		document.documentElement.querySelectorAll('.header-two-cta').forEach(cta => {
			cta.classList.remove('cta-active');
		});
	}
});


$(function () {
	$('.header-lower').addClass('js-enabled');
	$('.header-lower .hs-menu-wrapper').before('<div class="mobile-trigger"><span class="line line-1"></span><span class="line line-2"></span><span class="line line-3"></span></div>');
	$('.header-lower .flyouts .hs-item-has-children > a').after(' <div class="child-trigger"><i class="fa fa-plus"></i></div>');
	//these aren't triggering
	$('.mobile-trigger').click(function () {
		$('body').toggleClass('mobile-open');
		$('header-lower .hs-menu-wrapper').toggleClass('menu-open');
		$(this).toggleClass('active-re');
		$('.header-lower .hs-menu-wrapper').slideToggle();
		$('.child-trigger').removeClass('child-open');
		return false;
	});

	$('.child-trigger').click(function () {
		$(this).parent().siblings('.hs-item-has-children').find('.child-trigger').siblings().removeClass('child-open');
		$(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
		$(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
		$(this).next('.hs-menu-children-wrapper').slideToggle(250);
		$(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
		$(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
		$(this).toggleClass('child-open');
		$(this).siblings().toggleClass('child-open');
		return false;
	});
});

$("body").on("click", ".cgd_popbox", function (e) {
	e.preventDefault();
	$.magnificPopup.open({
		items: {
			src: "#cgd_popbox"
		},
		midClick: true,
		type: 'inline',
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = "mfp-zoom-in";
			},
			open: function () {
				//trackFormView()
			}
		}
	});
})

function trackFormView() {
	_hsq.push(["trackEvent", {
		id: "View CGD Popup"
	}]);
	console.log("trackFormView")
}


(function ($) {
	$.ua = {
		platform: {},
		browser: {},
		engine: {}
	};

	var ua = navigator.userAgent,
		uaPlatform = $.ua.platform,
		uaBrowser = $.ua.browser,
		uaEngine = $.ua.engine;

	// detect platform
	if (/Windows/.test(ua)) {
		uaPlatform.name = 'win';
		uaPlatform.win = true;
	} else if (/Mac/.test(ua)) {
		uaPlatform.name = 'mac';
		uaPlatform.mac = true;
	} else if (/Linux/.test(ua)) {
		uaPlatform.name = 'linux';
		uaPlatform.linux = true;
	} else if (/iPhone|iPod/.test(ua)) {
		uaPlatform.name = 'iphone';
		uaPlatform.iphone = true;
	} else if (/iPad/.test(ua)) {
		uaPlatform.name = 'ipad';
		uaPlatform.ipad = true;
	} else if (/Android/.test(ua)) {
		uaPlatform.name = 'android';
		uaPlatform.android = true;
	} else {
		uaPlatform.name = 'unknown-platform';
		uaPlatform.unknown = true;
	}

	// detect browser
	if (/MSIE/.test(ua)) {
		uaBrowser.name = 'msie';
		uaBrowser.msie = true;
	} else if (/Firefox/.test(ua)) {
		uaBrowser.name = 'firefox';
		uaBrowser.firefox = true;
	} else if (/Safari/.test(ua)) {
		uaBrowser.name = 'safari';
		uaBrowser.safari = true;
	} else if (/Opera/.test(ua)) {
		uaBrowser.name = 'opera';
		uaBrowser.opera = true;
	} else {
		uaBrowser.name = 'unknown-browser';
		uaBrowser.unknown = true;
	}

	// chrome override
	if (/Chrome/.test(ua)) {
		uaBrowser.name = 'chrome';
		uaBrowser.chrome = true;
		uaBrowser.safari = false;
	}

	// detect browser version
	if (uaBrowser.msie) {
		uaBrowser.version = /MSIE (\d+(\.\d+)*)/.exec(ua)[1];
	} else if (uaBrowser.firefox) {
		uaBrowser.version = /Firefox\/(\d+(\.\d+)*)/.exec(ua)[1];
	} else if (uaBrowser.opera) {
		uaBrowser.version = /Version\/? ?(\d+(\.\d+)*)/.exec(ua)[1];
	} else if (uaBrowser.safari) {
		uaBrowser.version = /Version\/(\d+(\.\d+)*)/.exec(ua)[1];
	} else if (uaBrowser.chrome) {
		uaBrowser.version = /Chrome\/(\d+(\.\d+)*)/.exec(ua)[1];
	} else {
		uaBrowser.version = 0;
	}

	// detect engine
	if (/Trident/.test(ua) || uaBrowser.msie) {
		uaEngine.name = 'trident';
		uaEngine.trident = true;
	} else if (/Gecko/.test(ua)) {
		uaEngine.name = 'gecko';
		uaEngine.gecko = true;
	} else if (/Presto/.test(ua)) {
		uaEngine.name = 'presto';
		uaEngine.presto = true;
	} else {
		uaEngine.name = 'unknown-engine';
		uaEngine.unknown = true;
	}

	// override WebKit
	if (/WebKit/.test(ua)) {
		uaEngine.name = 'webkit';
		uaEngine.gecko = false;
		uaEngine.webkit = true;
	}

	// detect engine version
	if (uaEngine.trident) {
		uaEngine.version = /Trident/.test(ua) ? /Trident\/(\d+(\.\d+)*)/.exec(ua)[1] : 0;
	} else if (uaEngine.gecko) {
		uaEngine.version = /rv:(\d+(\.\d+)*)/.exec(ua)[1];
	} else if (uaEngine.webkit) {
		uaEngine.version = /WebKit\/(\d+(\.\d+)*)/.exec(ua)[1];
	} else if (uaEngine.presto) {
		uaEngine.version = /Presto\/(\d+(\.\d+)*)/.exec(ua)[1];
	} else {
		uaEngine.version = 0;
	}

	// add classes to html element
	$('html').addClass([
		uaPlatform.name,
		uaBrowser.name,
		uaBrowser.name + parseInt(uaBrowser.version, 10),
		uaEngine.name,
		uaEngine.name + parseInt(uaEngine.version, 10)
	].join(' '));

})(jQuery);