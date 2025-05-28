
// You can write more code here

/* START OF COMPILED CODE */

import OnEventScript from "../../phaserjs_editor_scripts_quick/core/OnEventScript.js";
import SetScaleXActionScript from "../../phaserjs_editor_scripts_quick/core/SetScaleXActionScript.js";
import SetScaleYActionScript from "../../phaserjs_editor_scripts_quick/core/SetScaleYActionScript.js";
import OnPointerDownScript from "../../phaserjs_editor_scripts_quick/core/OnPointerDownScript.js";
import FadeCameraActionScript from "../../phaserjs_editor_scripts_quick/camera/FadeCameraActionScript.js";
import DurationConfigComp from "../../phaserjs_editor_scripts_quick/animations/DurationConfigComp.js";
import StartSceneActionScript from "../../phaserjs_editor_scripts_quick/core/StartSceneActionScript.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MenuTextPrefab extends Phaser.GameObjects.Text {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0, "", {});

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 164, 30), Phaser.Geom.Rectangle.Contains);
		this.setOrigin(0.5, 0.5);
		this.text = "New Game";
		this.setStyle({ "color": "#4D4A49", "fontFamily": "Kenney-Future-Narrow", "fontSize": "30px" });

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

		// fadeCameraActionScript
		const fadeCameraActionScript = new FadeCameraActionScript(onPointerDownScript);

		// startSceneActionScript
		const startSceneActionScript = new StartSceneActionScript(fadeCameraActionScript);

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
		onPointerDownScript.once = true;

		// fadeCameraActionScript (prefab fields)
		fadeCameraActionScript.fadeDirection = "FadeOut";
		fadeCameraActionScript.color = "#000000";

		// fadeCameraActionScript (components)
		const fadeCameraActionScriptDurationConfigComp = new DurationConfigComp(fadeCameraActionScript);
		fadeCameraActionScriptDurationConfigComp.duration = 500;

		this.startSceneActionScript = startSceneActionScript;

		/* START-USER-CTR-CODE */
		// Write your code here.
		scene.events.once("scene-awake", this.awake, this);
		/* END-USER-CTR-CODE */
	}

	/** @type {StartSceneActionScript} */
	startSceneActionScript;
	/** @type {string} */
	sceneToTransitionsTo = "";

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		this.startSceneActionScript.sceneKey = this.sceneToTransitionsTo;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
