
// You can write more code here

/* START OF COMPILED CODE */

import OnPointerDownScript from "../../phaserjs_editor_scripts_quick/core/OnPointerDownScript.js";
import ToggleTextureScript from "../scripts/ToggleTextureScript.js";
import ToggleMuteScript from "../scripts/ToggleMuteScript.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AudioPrefab extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "music_on", frame);

		this.scaleX = 1.5;
		this.scaleY = 1.5;
		this.tintTopLeft = 5065289;
		this.tintTopRight = 5065289;
		this.tintBottomLeft = 5065289;
		this.tintBottomRight = 5065289;

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(this);

		// toggleTextureScript
		const toggleTextureScript = new ToggleTextureScript(onPointerDownScript);

		// toggleMuteScript
		new ToggleMuteScript(onPointerDownScript);

		// toggleTextureScript (prefab fields)
		toggleTextureScript.mainTexture = {"key":"music_on"};
		toggleTextureScript.altTexture = {"key":"music_off"};

		/* START-USER-CTR-CODE */
		// Write your code here.
		scene.events.once("scene-awake", this.awake, this);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		if (this.scene.sound.mute) {
			this.setTexture('music_off');
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
