import * as THREE from 'three';
import { v4 as uuidv4 } from 'uuid';
import chickenModel from '../Models/ChickenModel';
import cowModel from '../Models/CowModel';

export default class Animal {
    constructor(name, hungryMaterial, wellFedMaterial) {
        this.position = 0;
        this.name = name;
        this.model = this.generateModel(name);
        this.model.name = name;
        this.hungry = true;
        this.status = false;
        this.product = false;
        this.hungryMaterial = hungryMaterial;
        this.wellFedMaterial = wellFedMaterial;
    }

    feedAnimal() {
        let productTimer;
        this.hungry = false;
        for (let i = 0; i < this.partsToRecolor; i++) {
            this.model.children[i].material = this.wellFedMaterial;
        }
        setTimeout(() => {
            this.hungry = true;
            for (let i = 0; i < this.partsToRecolor; i++) {
                this.model.children[i].material = this.hungryMaterial;
            }
            clearInterval(productTimer)
        }, this.wellFeedTime * 1000);

        if (!this.hungry) {
            productTimer = setInterval(() => {
                if (!this.product) {
                    this.name.includes('chicken') ? this.getEgg() : this.getMilk()
                    this.model.scale.z = 0.8
                    setTimeout(() => {
                        this.model.scale.z = 1
                    }, 100);
                }
            }, 10000);
        }
    }

    generateModel(name) {
        return name.includes('chicken') ? chickenModel() : cowModel()
    }
}
