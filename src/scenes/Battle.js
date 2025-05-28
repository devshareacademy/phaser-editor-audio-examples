
// You can write more code here

/* START OF COMPILED CODE */

import OnAwakeScript from "../../phaserjs_editor_scripts_quick/core/OnAwakeScript.js";
import FadeCameraActionScript from "../../phaserjs_editor_scripts_quick/camera/FadeCameraActionScript.js";
import DurationConfigComp from "../../phaserjs_editor_scripts_quick/animations/DurationConfigComp.js";
import BattleTextPrefab from "../prefabs/BattleTextPrefab.js";
import AudioPrefab from "../prefabs/AudioPrefab.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Battle extends Phaser.Scene {

	constructor() {
		super("Battle");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// forest_background
		const forest_background = this.add.image(0, 0, "forest-background");
		forest_background.setOrigin(0, 0);

		// carnodusk
		const carnodusk = this.add.image(816, 190, "carnodusk");
		carnodusk.scaleX = 0.8;
		carnodusk.scaleY = 0.8;

		// iguanignite
		const iguanignite = this.add.image(198, 285, "iguanignite");
		iguanignite.scaleX = 0.8;
		iguanignite.scaleY = 0.8;
		iguanignite.flipX = true;

		// iceAttack
		const iceAttack = this.add.sprite(200, 310, "ice-attack", 7);
		iceAttack.scaleX = 3;
		iceAttack.scaleY = 3;

		// slashAttack
		const slashAttack = this.add.sprite(778, 197, "slash", 2);
		slashAttack.scaleX = 4;
		slashAttack.scaleY = 4;
		slashAttack.tintFill = true;
		slashAttack.tintTopLeft = 65280;
		slashAttack.tintTopRight = 0;
		slashAttack.tintBottomLeft = 0;
		slashAttack.tintBottomRight = 0;

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(this);

		// fadeCameraActionScript_1
		const fadeCameraActionScript_1 = new FadeCameraActionScript(onAwakeScript);

		// slashAttackTextPrefab
		const slashAttackTextPrefab = new BattleTextPrefab(this, 250, 510);
		this.add.existing(slashAttackTextPrefab);
		slashAttackTextPrefab.text = "Slash Attack";
		slashAttackTextPrefab.setStyle({ "color": "#000000", "fontSize": "40px", "stroke": "#000000" });

		// iceAttackTextPrefab
		const iceAttackTextPrefab = new BattleTextPrefab(this, 835, 510);
		this.add.existing(iceAttackTextPrefab);
		iceAttackTextPrefab.text = "Ice Attack";
		iceAttackTextPrefab.setStyle({ "color": "#000000", "fontSize": "40px", "stroke": "#000000" });

		// music_on
		const music_on = new AudioPrefab(this, 986, 37);
		this.add.existing(music_on);
		music_on.tintFill = false;

		// fadeCameraActionScript_1 (prefab fields)
		fadeCameraActionScript_1.fadeDirection = "FadeIn";
		fadeCameraActionScript_1.color = "#000000";

		// fadeCameraActionScript_1 (components)
		const fadeCameraActionScript_1DurationConfigComp = new DurationConfigComp(fadeCameraActionScript_1);
		fadeCameraActionScript_1DurationConfigComp.duration = 500;

		// slashAttackTextPrefab (prefab fields)
		slashAttackTextPrefab.onClickCallback = this.handleAttackSelected.bind(this);;
		slashAttackTextPrefab.value = "slash";

		// iceAttackTextPrefab (prefab fields)
		iceAttackTextPrefab.onClickCallback = this.handleAttackSelected.bind(this);;
		iceAttackTextPrefab.value = "ice";

		this.iceAttack = iceAttack;
		this.slashAttack = slashAttack;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	iceAttack;
	/** @type {Phaser.GameObjects.Sprite} */
	slashAttack;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.iceAttack.setVisible(false);
		this.slashAttack.setVisible(false);
	}

	/**
	 * @param {'ice'|'slash'} option
	 */
	handleAttackSelected(option) {
		if (option === 'ice' && !this.iceAttack.anims.isPlaying) {
			this.iceAttack.play('ice', true);
			// TODO: play attack sfx
			return;
		}
		if (option === 'slash' && !this.slashAttack.anims.isPlaying) {
			this.slashAttack.play('slash', true);
			// TODO: play attack sfx
			return;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
