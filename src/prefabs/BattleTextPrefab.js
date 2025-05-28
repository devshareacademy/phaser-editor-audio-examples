
// You can write more code here

/* START OF COMPILED CODE */

import OptionsClickableTextPrefab from "./OptionsClickableTextPrefab.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BattleTextPrefab extends OptionsClickableTextPrefab {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.text = "Slash Attack";
		this.setStyle({ "color": "#000000", "fontSize": "32px", "stroke": "#000000" });

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
		/**
	 * @param {boolean} isSelected
	 */
	updateIsSelected(isSelected) {
		this.setColor('#000000');
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
