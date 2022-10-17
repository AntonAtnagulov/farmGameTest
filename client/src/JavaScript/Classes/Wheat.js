import * as THREE from 'three';
import wheatModel from '../Models/WheatModel';

export default class Wheat {
    constructor(name) {
        this.position = 0;
        this.name = name
        this.model = this.generateModel();
        this.model.name = name
        this.status = false;
        this.age = 0
    }

    generateModel() {
        return wheatModel()
    }

    growWheat() {
        const newMaterial = new THREE.MeshPhongMaterial({ color: 0xD0EC38, flatShading: true })
        const newMaterial2 = new THREE.MeshPhongMaterial({ color: 0x585638, flatShading: true })
        if (this.age < 20) {
            this.age += 0.2
            this.model.scale.z += 0.01
        } else {
            this.status = true
            this.model.children[1].material = newMaterial
            this.model.children[2].material = newMaterial2
        }
    }
}
