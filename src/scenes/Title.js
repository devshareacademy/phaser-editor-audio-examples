
// You can write more code here

/* START OF COMPILED CODE */

import MenuTextPrefab from "../prefabs/MenuTextPrefab.js";
import AudioPrefab from "../prefabs/AudioPrefab.js";
import OnAwakeScript from "../../phaserjs_editor_scripts_quick/core/OnAwakeScript.js";
import FadeCameraActionScript from "../../phaserjs_editor_scripts_quick/camera/FadeCameraActionScript.js";
import DurationConfigComp from "../../phaserjs_editor_scripts_quick/animations/DurationConfigComp.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Title extends Phaser.Scene {

	constructor() {
		super("Title");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.image(0, 0, "background");
		background.scaleX = 0.58;
		background.scaleY = 0.58;
		background.setOrigin(0, 0);

		// title_background
		const title_background = this.add.image(512, 150, "title_background");
		title_background.scaleX = 0.25;
		title_background.scaleY = 0.25;
		title_background.alpha = 0.5;
		title_background.alphaTopLeft = 0.5;
		title_background.alphaTopRight = 0.5;
		title_background.alphaBottomLeft = 0.5;
		title_background.alphaBottomRight = 0.5;

		// title_text
		const title_text = this.add.image(512, 150, "title_text");
		title_text.scaleX = 0.55;
		title_text.scaleY = 0.55;
		title_text.alpha = 0.5;
		title_text.alphaTopLeft = 0.5;
		title_text.alphaTopRight = 0.5;
		title_text.alphaBottomLeft = 0.5;
		title_text.alphaBottomRight = 0.5;

		// menuBackground
		this.add.nineslice(512, 434, "glass_panel", undefined, 500, 200, 32, 32, 32, 32);

		// newGameTextPrefab
		const newGameTextPrefab = new MenuTextPrefab(this, 512, 400);
		this.add.existing(newGameTextPrefab);
		newGameTextPrefab.setStyle({  });

		// optionsTextPrefab
		const optionsTextPrefab = new MenuTextPrefab(this, 512, 450);
		this.add.existing(optionsTextPrefab);
		optionsTextPrefab.text = "Options";
		optionsTextPrefab.setStyle({  });

		// music_on
		const music_on = new AudioPrefab(this, 986, 37);
		this.add.existing(music_on);

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(this);

		// fadeCameraActionScript_1
		const fadeCameraActionScript_1 = new FadeCameraActionScript(onAwakeScript);

		// newGameTextPrefab (prefab fields)
		newGameTextPrefab.sceneToTransitionsTo = "Battle";

		// optionsTextPrefab (prefab fields)
		optionsTextPrefab.sceneToTransitionsTo = "Settings";

		// fadeCameraActionScript_1 (prefab fields)
		fadeCameraActionScript_1.fadeDirection = "FadeIn";
		fadeCameraActionScript_1.color = "#000000";

		// fadeCameraActionScript_1 (components)
		const fadeCameraActionScript_1DurationConfigComp = new DurationConfigComp(fadeCameraActionScript_1);
		fadeCameraActionScript_1DurationConfigComp.duration = 500;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		// TODO: start background music
		const sound = this.sound.get('title');
		if (sound) {
			return;
		}
		this.sound.play('title', {
			loop: true,
			volume: 0.5,
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
