
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ToggleTextureScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {{key:string,frame?:string|number}} */
	mainTexture;
	/** @type {{key:string,frame?:string|number}} */
	altTexture;

	/* START-USER-CODE */

	// Write your code here.
	execute() {
		if (!this.gameObject) {
			return;
		}
		if (this.gameObject.texture.key === this.mainTexture.key) {
			this.gameObject.setTexture(this.altTexture.key);
		} else {
			this.gameObject.setTexture(this.mainTexture.key);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
