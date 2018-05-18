Game.MainMenu = function(game){


};


var button;


Game.MainMenu.prototype  = {


	preload: function(){

		this.load.spritesheet('button', 'assets/start.png');

	},


	create: function(){

		this.stage.backgroundColor = "#4488AA";

        button = this.add.button(this.world.centerX, this.world.centerY, 'button', this.calls, this, 1, 0, 2); //Not sure if it works perfectly yet

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
