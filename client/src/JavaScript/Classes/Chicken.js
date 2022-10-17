import * as THREE from 'three';
import { v4 as uuidv4 } from 'uuid';
import chickenModel from '../Models/ChickenModel';
import Animal from './Animal';

export default class Chicken extends Animal {
    constructor(name, hungryMaterial, wellFedMaterial) {
        super(name, hungryMaterial, wellFedMaterial)
        this.wellFeedTime = 30.1
        this.partsToRecolor = 4
    }

    getEgg() {
        let points = [];
        for (let deg = 0; deg <= 180; deg += 6) {
            const rad = (Math.PI * deg) / 180;
            const point = new THREE.Vector2(
                (0.72 + 0.08 * Math.cos(rad)) * Math.sin(rad),
                -Math.cos(rad)
            );
            points.push(point);
        }
        
        const eggGroup = new THREE.Group() 
        eggGroup.name = `eggs${uuidv4()}`

        let geometry = new THREE.LatheBufferGeometry( points, 32 );
        const chickenEgg = new THREE.Mesh(
            geometry,
            new THREE.MeshPhongMaterial({ color: '#E1C886' })
        );
        chickenEgg.scale.set(15, 15, 15)
        chickenEgg.rotation.set(Math.PI / 2, 0, 0)
        chickenEgg.position.set(-30, 20, 15);
        eggGroup.add(chickenEgg)
        this.model.add(eggGroup);
        this.product = true
    }
}
