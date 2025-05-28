
// You can write more code here

/* START OF COMPILED CODE */

import OptionsTextPrefab from "./OptionsTextPrefab.js";
import OnEventScript from "../../phaserjs_editor_scripts_quick/core/OnEventScript.js";
import SetScaleXActionScript from "../../phaserjs_editor_scripts_quick/core/SetScaleXActionScript.js";
import SetScaleYActionScript from "../../phaserjs_editor_scripts_quick/core/SetScaleYActionScript.js";
import OnPointerDownScript from "../../phaserjs_editor_scripts_quick/core/OnPointerDownScript.js";
import CallbackActionScript from "../../phaserjs_editor_scripts_quick/core/CallbackActionScript.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OptionsClickableTextPrefab extends OptionsTextPrefab {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.setOrigin(0.5, 0.5);
		this.text = "Back";
		this.setStyle({  });

		// onPointerOverScript
		const onPointerOverScript = new OnEventScript(this);

		// setScaleXActionScript
		const setScaleXActionScript = new SetScaleXActionScript(onPointerOverScript);

		// setScaleYActionScript
		const setScaleYActionScript = new SetScaleYActionScript(onPointerOverScript);

		// onPointerOutScript
		const onPointerOutScript = new OnEventScript(this);

		// setScaleYActionScript_1
		const setScaleYActionScript_1 = new SetScaleYActionScript(onPointerOutScript);

		// setScaleXActionScript_1
		const setScaleXActionScript_1 = new SetScaleXActionScript(onPointerOutScript);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(this);

		// callbackActionScript
		const callbackActionScript = new CallbackActionScript(onPointerDownScript);

		// onPointerOverScript (prefab fields)
		onPointerOverScript.eventName = Phaser.Input.Events.POINTER_OVER;

		// setScaleXActionScript (prefab fields)
		setScaleXActionScript.scaleX = 1.25;

		// setScaleYActionScript (prefab fields)
		setScaleYActionScript.scaleY = 1.25;

		// onPointerOutScript (prefab fields)
		onPointerOutScript.eventName = Phaser.Input.Events.POINTER_OUT;

		// setScaleYActionScript_1 (prefab fields)
		setScaleYActionScript_1.scaleY = 1;

		// setScaleXActionScript_1 (prefab fields)
		setScaleXActionScript_1.scaleX = 1;

		// onPointerDownScript (prefab fields)
		onPointerDownScript.once = false;

		// callbackActionScript (prefab fields)
		callbackActionScript.callback = () => { this.onClickHandler(); };

		this.callbackActionScript = callbackActionScript;

		/* START-USER-CTR-CODE */
		// Write your code here.
		scene.events.once("scene-awake", this.awake, this);
		/* END-USER-CTR-CODE */
	}

	/** @type {CallbackActionScript} */
	callbackActionScript;
	/** @type {boolean} */
	isSelected = false;
	/** @type {(value: string) => void;} */
	onClickCallback = (value) => { return; };
	/** @type {string} */
	value = "";

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		this.updateIsSelected();
	}

	/**
	 * @param {boolean} isSelected
	 */
	updateIsSelected(isSelected) {
		if (isSelected !== undefined) {
			this.isSelected = isSelected;
		}
		if (this.isSelected) {
			this.setColor('#ff2222');
		} else {
			this.setColor('#ffffff');
		}
	}

	onClickHandler() {
		this.onClickCallback(this.value);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
