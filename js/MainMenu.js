Game.MainMenu = function(game){

};

var start;

Game.MainMenu.prototype  = {
	preload: function(){
		this.load.spritesheet('start', 'assets/start.png');
	},

	create: function(){
		this.stage.backgroundColor = "#4488AA";
        button = game.add.button(game.world.centerX, game.world.centerY, 'start', actionOnClick, this, 1, 0, 2); //Not sure if it works perfectly yet
        button.anchor.setTo(0.5,0.5);
	},

	update: function(){
	},

	calls: function(){
		console.log(this);
		if(OC == true)
		{	this.state.start('OC');}
		else	
		{this.state.start('map');}
	},
};

//var OC = false;  // temp. boolean statement 


//function start()
