import * as THREE from 'three';
import { v4 as uuidv4 } from 'uuid';
import cowModel from '../Models/CowModel';
import Animal from './Animal'

export default class Cow extends Animal{
    constructor(name, hungryMaterial, wellFedMaterial) {
        super(name, hungryMaterial, wellFedMaterial);
        this.wellFeedTime = 20.1
        this.partsToRecolor = 7
    }

    getMilk () {
        const milk = new THREE.Group()
        milk.name = `milk${uuidv4()}`

        const milkBody = new THREE.Mesh(
            new THREE.BoxGeometry(8 * 2, 8 * 2, 12 * 2),
            new THREE.MeshPhongMaterial({color: 0xFFFFFF})
        )

        const milkLable = new THREE.Mesh(
            new THREE.BoxGeometry(9 * 2, 9 * 2, 6 * 2),
            new THREE.MeshPhongMaterial({color: 0x1D65D5})
        )

        milk.add(milkBody, milkLable)
        
        milk.position.set(30, -37, 6)
        this.model.add(milk)
    }

    generateModel() {
        return cowModel();
    }
}
