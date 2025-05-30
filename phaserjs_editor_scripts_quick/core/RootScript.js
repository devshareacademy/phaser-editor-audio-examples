// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class RootScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    key = "scripts";
    /* START-USER-CODE */
    /**
     * Gets the RootScript object set into the game object.
     * It lookups the script node in using the `key` parameter as attribute of the game object.
     *
     * @param gameObject The game object where the root script is set.
     * @param key The key used to set root script into the game object. It is `"scripts"` by default.
     * @returns The root script.
     */
    static getRoot(gameObject, key = "scripts") {
        return gameObject[`RootScript__${key}`];
    }
    /**
     * Gets the children of the root script registered in the given game object, using the given key.
     *
     * @param gameObject The game object containing the root script.
     * @param key The key used to register the root script in the game object.
     * @returns The chidlren of the root script.
     */
    static getChildren(gameObject, key = "scripts") {
        const root = this.getRoot(gameObject, key);
        if (root) {
            return root.children;
        }
        return [];
    }
    /**
     * Gets the root script associated to the game object, using the given key.
     *
     * @param gameObject The game object where the root script is set.
     * @param key The key used for registering the root script in the game object.
     * @returns The root script.
     */
    static hasRoot(gameObject, key = "scripts") {
        const script = this.getRoot(gameObject, key);
        return script !== undefined;
    }
    awake() {
        this.gameObject[`RootScript__${this.key}`] = this;
    }
}
/* END OF COMPILED CODE */
// You can write more code here
