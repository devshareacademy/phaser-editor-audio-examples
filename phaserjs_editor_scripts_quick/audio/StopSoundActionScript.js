// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class StopSoundActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    audioKey = "";
    /* START-USER-CODE */
    execute(...args) {
        this.scene.sound.stopByKey(this.audioKey);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
