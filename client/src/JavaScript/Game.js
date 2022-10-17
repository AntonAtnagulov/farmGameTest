import * as THREE from 'three';
import Camera from './Camera';
import Ground from './Classes/Ground';
import DirectionalLight from './DirLight';
import BackLight from './BackLight';
import Wheat from './Classes/Wheat';
import Chicken from './Classes/Chicken';
import Cow from './Classes/Cow'
import randomInteger from './Functions/randomInteger';
import { v4 as uuidv4 } from 'uuid';
const hungryMaterial = new THREE.MeshPhongMaterial({ color: 0xB0B0EE });
const wellFedMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });

export default class Game {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.ground = new Ground();
        this.hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
        this.dirLight = new DirectionalLight({ target: this.ground.mesh });
        this.backLight = new BackLight();
        this.wheats = [];
        this.chickens = [];
        this.cows = [];
        this.models = new THREE.Group();
        this.score = 0;
        this.inventory = { wheats: 0, eggs: 0, milk: 0 };
    }

    getRandomPosition(){
        return this.ground
        .tilePositions[randomInteger(0, 7)][randomInteger(0, 7)]
    }

    checkPosition(pos) {
        if (pos.empty) {
            return pos
        } else {
            this.checkPosition(this.getRandomPosition())
        }
    }

    initScene() {
        this.scene.background = new THREE.Color('#092026');
        for (let i = 0; i < 3; i++) {
            const wheat = new Wheat(`wheat${uuidv4()}`);
            const chicken = new Chicken(`chicken${uuidv4()}`, hungryMaterial, wellFedMaterial);
            
            const cickenTargetPos = this.getRandomPosition()
            const checkedChickenPos = this.checkPosition(cickenTargetPos)
            if (checkedChickenPos) {
                this.chickens.push(chicken);
                cickenTargetPos.empty = false
                console.log(cickenTargetPos)
                chicken.model.position.set(...checkedChickenPos.position);
                chicken.model.position.z -= 2
            }
            
            const wheatTargetPos = this.getRandomPosition()
            const wheatCheckedPos = this.checkPosition(wheatTargetPos)
            if (wheatCheckedPos) {
                this.wheats.push(wheat);
                wheatTargetPos.empty = false
                wheat.model.position.set(...wheatCheckedPos.position);
            }
            
            this.models.add(wheat.model, chicken.model);
        }
        
        const cowTargetPos = this.getRandomPosition()
        const cowCheckedPos = this.checkPosition(cowTargetPos)
        console.log(cowCheckedPos)
        const cow = new Cow(`cow${uuidv4()}`, hungryMaterial, wellFedMaterial)
        this.cows.push(cow)
        
        cow.model.position.set(...cowCheckedPos.position)
        cow.model.position.z += 15
        this.models.add(cow.model)
        cowCheckedPos.empty = false
        
        this.scene.add(
            this.hemiLight,
            this.ground.mesh,
            this.camera,
            this.dirLight,
            this.backLight,
            this.models,
        );
    }

    addWheat(position) {
        const obj = new Wheat(`wheat${uuidv4()}`);
        this.wheats.push(obj);
        this.models.add(obj.model);
        const wheatTargetPos = this.getRandomPosition()
        const check = this.checkPosition(wheatTargetPos)
        if (check) {
            obj.model.position.set(...check.position);
            check.empty = false
        }
    }

    addItem(itemType) {
        this.inventory[itemType] += 1;
    }

    removeItem(itemType) {
        this.inventory[itemType] += 1;
    }

    findAnimalClass(name) {
        console.log('animalClass',this.chickens.filter((el) => el.name === name) )
        return name.includes('chicken') ? this.chickens.filter((el) => el.name === name) 
        : this.cows.filter((el) => el.name === name)
    }

}
