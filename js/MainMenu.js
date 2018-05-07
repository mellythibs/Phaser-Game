Game.MainMenu = function(game){

};

Game.MainMenu.prototype  = {
	preload: function(){

	},

	create: function(){

	},

	update: function(){

	}

};

var OC = false;  // temp. boolean statement 

if(OC == true)
{this.state.start('OC');}
else	
{this.state.start('map');}


