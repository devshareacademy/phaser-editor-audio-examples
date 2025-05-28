
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
import AudioLoopConfigComp from "../../phaserjs_editor_scripts_quick/audio/AudioLoopConfigComp.js";
import AudioVolumeConfigComp from "../../phaserjs_editor_scripts_quick/audio/AudioVolumeConfigComp.js";
/* END-USER-IMPORTS */

export default class CustomPlaySoundActionScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	audioKey = "";

	/* START-USER-CODE */

	// Write your code here.
	execute(...args) {
		console.log(args);
		const audioKeyFromArgs = this.getActionTargetObject(args);
		console.log(audioKeyFromArgs);
		const config = {};
		const loopConfig = AudioLoopConfigComp.getComponent(this);
		if (loopConfig) {
			config.loop = loopConfig.loop;
		}
		const volumeConfig = AudioVolumeConfigComp.getComponent(this);
		if (volumeConfig) {
			config.volume = volumeConfig.volume;
		}
		if (audioKeyFromArgs) {
			this.scene.sound.play(audioKeyFromArgs, config);
		} else {
			this.scene.sound.play(this.audioKey, config);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
