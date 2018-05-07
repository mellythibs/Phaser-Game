Game.Preloader = function(game){
	this.preloadBar = null;
};

Game.Preloader.prototype = {
	preload:function(){

		

		this.load.image('livingroom', 'assets/map/livingroom.png');
		this.load.sprite('oldman', 'assers/oldman.png');

	},


	create:function(){
  	this.state.start('MainMenu');
	},
	
};
