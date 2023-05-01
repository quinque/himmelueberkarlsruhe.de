var SkyPlayer = function(){};
SkyPlayer.prototype = {
	frames: null,
	bar: null,
	frame: 0,
	duration: 1000*60,
	frame_interval: 10,

	init: function(bar) {
		this.bar = bar;
	},

	loadFrames: function(frames) {
		this.frames = frames;
	},

	setDuration: function(duration) {
		this.duration = duration;
	},

	play: function() {
		this.render(this.frame);
	},

	render: function(frame) {
		this.frame_interval = this.duration/this.frames.length;
		$(document.body).css("background-color", this.frames[frame].naivecolor);
		this.bar.css('left', (99.95*frame/this.frames.length)+'%');
		if (this.frame < this.frames.length-1) {
			setTimeout(function(){this.render(++this.frame)}.bind(this), this.frame_interval);
		}
	}
};

