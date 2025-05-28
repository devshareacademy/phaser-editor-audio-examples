import Preload from "./scenes/Preload.js";
import Title from "./scenes/Title.js";
import Battle from "./scenes/Battle.js";
import Settings from "./scenes/Settings.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1024,
		height: 576,
		type: Phaser.AUTO,
		backgroundColor: "#000000",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Title", Title);
	game.scene.add("Battle", Battle);
	game.scene.add("Settings", Settings);
	game.scene.start("Preload");
});
