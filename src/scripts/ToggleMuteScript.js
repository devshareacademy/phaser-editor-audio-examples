
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ToggleMuteScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	execute() {
		if (!this.scene) {
			return;
		}
		this.scene.sound.mute = !this.scene.sound.mute;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
