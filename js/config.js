var Game = {}

Game.config = function(game){

};

Game.config.prototype = {
	init:function(){
		this.input.maxPoints = 1;
		thhis.stage.disableVisabilityChange = true;
	},


	preload:function(){
		this.load.image('preloaderBar', 'assets/girl.png');
	},


	create: function(){

		this.state.start('Preloader');
	},
};
