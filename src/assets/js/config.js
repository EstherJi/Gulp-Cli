require.config({
	paths: {
		'jquery': 'lib/jquery-3.3.1.min',
		'jsbridge': 'lib/JsBridge',
		'swiper': 'lib/swiper.min',
		'Modal': 'lib/modal',
		'jsencrypt': 'lib/jsencrypt',
		'gt': 'lib/gt',
		'sensors': 'lib/sensorsdata.amd.min',
	}
})


//Load Module
;(function(){
	document.body.addEventListener('touchstart', function() {}, false);
	window.__ApiBaseUrl = '';

	var moduleName,
		oScript = document.getElementById('rjs');
	if (oScript && oScript.nodeName == 'SCRIPT') {
		moduleName = oScript.getAttribute('data-module');
		if (moduleName) {
			require(['module/' + moduleName]);
		}
	}

	require(['sa']);
}())
