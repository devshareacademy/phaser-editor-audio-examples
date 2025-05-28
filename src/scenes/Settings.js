
// You can write more code here

/* START OF COMPILED CODE */

import OptionsTextPrefab from "../prefabs/OptionsTextPrefab.js";
import OptionsClickableTextPrefab from "../prefabs/OptionsClickableTextPrefab.js";
import MenuTextPrefab from "../prefabs/MenuTextPrefab.js";
import SliderPrefab from "../prefabs/SliderPrefab.js";
import OnAwakeScript from "../../phaserjs_editor_scripts_quick/core/OnAwakeScript.js";
import FadeCameraActionScript from "../../phaserjs_editor_scripts_quick/camera/FadeCameraActionScript.js";
import DurationConfigComp from "../../phaserjs_editor_scripts_quick/animations/DurationConfigComp.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Settings extends Phaser.Scene {

	constructor() {
		super("Settings");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// menuBackground
		const menuBackground = this.add.nineslice(200, 20, "glass_panel", undefined, 624, 432, 32, 32, 32, 32);
		menuBackground.setOrigin(0, 0);

		// optionsText
		const optionsText = new OptionsTextPrefab(this, 512, 50);
		this.add.existing(optionsText);
		optionsText.setStyle({ "fontSize": "40px" });

		// soundText
		const soundText = new OptionsTextPrefab(this, 240, 120);
		this.add.existing(soundText);
		soundText.setOrigin(0, 0.5);
		soundText.text = "Sound";
		soundText.setStyle({  });

		// volumeText
		const volumeText = new OptionsTextPrefab(this, 240, 200);
		this.add.existing(volumeText);
		volumeText.setOrigin(0, 0.5);
		volumeText.text = "Volume";
		volumeText.setStyle({  });

		// soundOnText
		const soundOnText = new OptionsClickableTextPrefab(this, 450, 120);
		this.add.existing(soundOnText);
		soundOnText.setOrigin(0, 0.5);
		soundOnText.text = "On";
		soundOnText.setStyle({  });

		// soundOffText
		const soundOffText = new OptionsClickableTextPrefab(this, 550, 120);
		this.add.existing(soundOffText);
		soundOffText.setOrigin(0, 0.5);
		soundOffText.text = "Off";
		soundOffText.setStyle({  });

		// backText
		const backText = new MenuTextPrefab(this, 512, 420);
		this.add.existing(backText);
		backText.text = "Back";
		backText.setStyle({ "color": "#fff" });

		// sliderPrefab
		const sliderPrefab = new SliderPrefab(this, 575, 201);
		this.add.existing(sliderPrefab);

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(this);

		// fadeCameraActionScript_1
		const fadeCameraActionScript_1 = new FadeCameraActionScript(onAwakeScript);

		// soundOnText (prefab fields)
		soundOnText.isSelected = true;
		soundOnText.onClickCallback = this.handleSoundOptionSelected.bind(this);;
		soundOnText.value = "on";

		// soundOffText (prefab fields)
		soundOffText.onClickCallback = this.handleSoundOptionSelected.bind(this);;
		soundOffText.value = "off";

		// backText (prefab fields)
		backText.sceneToTransitionsTo = "Title";

		// sliderPrefab (prefab fields)
		sliderPrefab.currentValue = 1;
		sliderPrefab.onValueChangeCallback = this.handleVolumeSliderChange.bind(this);;

		// fadeCameraActionScript_1 (prefab fields)
		fadeCameraActionScript_1.fadeDirection = "FadeIn";
		fadeCameraActionScript_1.color = "#000000";

		// fadeCameraActionScript_1 (components)
		const fadeCameraActionScript_1DurationConfigComp = new DurationConfigComp(fadeCameraActionScript_1);
		fadeCameraActionScript_1DurationConfigComp.duration = 500;

		this.soundOnText = soundOnText;
		this.soundOffText = soundOffText;

		this.events.emit("scene-awake");
	}

	/** @type {OptionsClickableTextPrefab} */
	soundOnText;
	/** @type {OptionsClickableTextPrefab} */
	soundOffText;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
	}

	/**
	 * @param {'on'|'off'} option
	 */
	handleSoundOptionSelected(option) {
		if (option === 'off') {
			this.soundOnText.updateIsSelected(false);
			this.soundOffText.updateIsSelected(true);
			// TODO: disable audio
			return;
		}
		if (option === 'on') {
			this.soundOffText.updateIsSelected(false);
			this.soundOnText.updateIsSelected(true);
			// TODO: enable audio
			return;
		}
	}

	/**
	 * @param {number} value
	 */
	handleVolumeSliderChange(value) {
		console.log(value);
		// TODO: update volume
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
