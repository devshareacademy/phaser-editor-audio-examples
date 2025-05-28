
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SliderPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// sliderBody
		const sliderBody = scene.add.rectangle(0, 0, 250, 10);
		sliderBody.isFilled = true;
		sliderBody.fillColor = 8947848;
		sliderBody.strokeColor = 8947848;
		this.add(sliderBody);

		// knob
		const knob = scene.add.ellipse(125, 0, 15, 15);
		knob.isFilled = true;
		this.add(knob);

		this.sliderBody = sliderBody;
		this.knob = knob;

		/* START-USER-CTR-CODE */
		// Write your code here.
		knob.setInteractive({ draggable: true });
		this.knob.on(Phaser.Input.Events.DRAG, (/** @type {Phaser.Input.Pointer} */ pointer, /** @type {number} */ dragX, /** @type {number} */ dragY) => {
			// Clamp knob to track
			const clampedX = Phaser.Math.Clamp(dragX, this.sliderBody.width/2 * -1, this.sliderBody.width/2);
			knob.x = clampedX;

			// Calculate value from 0 to 100
			const value = Math.round(((clampedX + this.sliderBody.width/2) / this.sliderBody.width) * 100);
			this.value = value/100;
			// console.log(`Value: ${value}%`, this.value);
			this.onValueChangeCallback(this.value);
		});
		scene.events.once("scene-awake", this.awake, this);
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	sliderBody;
	/** @type {Phaser.GameObjects.Ellipse} */
	knob;
	/** @type {number} */
	currentValue = 1;
	/** @type {(value: number;) => void;} */
	onValueChangeCallback = (value) => { return; };

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		const startX = this.sliderBody.width/2 * -1 + this.sliderBody.width * (this.currentValue/1);
		const clampedX = Phaser.Math.Clamp(startX, this.sliderBody.width/2 * -1, this.sliderBody.width/2);
		this.knob.x = clampedX;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
