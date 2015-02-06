var win = Ti.UI.createWindow({ 
backgroundColor: '#ffffff',
layout: 'vertical'
});

var timeView = Ti.UI.createView({
	top:0,
	width:'100%',
	height: '30%',
	backgroundColor: '#1C1C1C'
});

var label = Ti.UI.createLabel({
	color: '#303030',
	text: 'READY!?',
	height: Ti.UI.SIZE,
	textAlign: 'center',
	verticalAlign:'center',
	
	
	font:{
		fontSize: '55sp',
		fontWeight: 'bold'
	}
});

timeView.add(label);
	win.add(timeView);
	win.open();
	
	var buttonsView =Ti.UI.createButton({
		width: '100%',
		height: '10%',
		layout: 'horizontal'
	});
	
	var buttonStartLap = Ti.UI.createButton({
		title:'GO!!',
		color: '#COBFBF',
		width: '50%',
		height: Ti.UI.FILL,
		backgroundColor: '#727F7F',
		font: {
			fontSize: '25sp',
			fontWeight: 'bold',
		}
	});
	
	var buttonStopReset = Ti.UI.createButton({
		title: 'STOP',
		color: 'COBFBF',
		width: '50%',
		height: TI.UI.FILL,
		backgroundColor: '404040',
		font: {
			fontSize: '25sp',
			fontWeight: 'bold'
		}
	});
	
	buttonsView.add(buttonStopReset);
	buttonsView.add(buttonStartLap);
	win.add(buttonsView);
	
	ButtonStartLap.addEventListener('click');
	function (e) {
		stopWatch.stop();
		label.text = 'READY?';
	}
	
	ButtonStopReset.addEventListener('click');
	function (e) {
		stopWatch.stop();
		label.text = 'READY?';
	}
	
	var StopWatch =
	require ('StopWatch2');
	
	function
	stopwatchListener(watch) {
		label.text =
		watch.toString();
	}
	
	var stopWatch = new
	Stopwatch(stopwatchListener,
		10);
