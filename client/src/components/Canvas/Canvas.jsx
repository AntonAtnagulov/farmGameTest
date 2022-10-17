import React, { useRef, useEffect } from 'react';
import style from './canvas.module.css';
import * as THREE from 'three';
import Game from '../../JavaScript/Game';
import { useState } from 'react';
import keyframes from '../../JavaScript/Functions/keyframes';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import ItemIcon from '../ItemIcon/ItemIcon';
// import SellModal from '../SellModal/SellModal';
import {clickAnimal, clickProduct, clickPlant} from '../../JavaScript/Functions/functions'

export default function Canvas() {
    const mountRef = useRef(null);
    const [inventory, setInventory] = useState({ wheats: 0, eggs: 0, milk: 0 });
    const game = new Game();
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    let dragStartTile;

    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
    });

    let plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    let intersects = new THREE.Vector3();

    useEffect(() => {
        game.initScene();
        let controls;
        controls = new DragControls(
            [game.cows[0].model],
            game.camera,
            renderer.domElement
        );
        controls.transformGroup = true;

        controls.addEventListener('dragstart', (e) => {
            game.ground.tilePositions.forEach((el) => {
                el.forEach((tile) => {
                    if (
                        tile.position.x === e.object.position.x &&
                        tile.position.y === e.object.position.y
                    ) {
                        tile.empty = true;
                        dragStartTile = tile;
                    }
                });
            });
        });
        controls.addEventListener('drag', (e) => {
            raycaster.setFromCamera(mouse, game.camera);
            raycaster.ray.intersectPlane(plane, intersects);
            e.object.position.set(
                intersects.x,
                intersects.y,
                intersects.z + 15
            );
        });
        controls.addEventListener('dragend', (e) => {
            raycaster.setFromCamera(mouse, game.camera);
            let intersects = raycaster.intersectObject(
                game.scene.children[1],
                true
            );
            if (intersects.length) {
                let targetTile;
                game.ground.tilePositions.forEach((el) => {
                    el.forEach((tile) => {
                        if (
                            tile.position.x ===
                                intersects[0].object.position.x &&
                            tile.position.y === intersects[0].object.position.y
                        ) {
                            targetTile = tile;
                        }
                    });
                });
                if (targetTile.empty === true) {
                    console.log(targetTile)
                    e.object.position.set(...intersects[0].object.position);
                    e.object.position.z += 15;
                } else {
                    e.object.position.set(...dragStartTile.position);
                    e.object.position.z += 15;
                }
            }
        });

        function onMove(event) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }

        function onMouseClick(event) {
            const modelsGroup = game.scene.children[5];
            raycaster.setFromCamera(mouse, game.camera);
            let intersects = raycaster.intersectObject(modelsGroup, true);

            if (intersects) {
                const targetGroupName = intersects[0].object.parent.name;
                clickAnimal(game, targetGroupName, 'cow', setInventory);
                clickAnimal(game, targetGroupName, 'chicken', setInventory);
                clickProduct(game, targetGroupName, 'milk', intersects, setInventory);
                clickProduct(game, targetGroupName, 'eggs', intersects, setInventory);
                clickPlant(game, targetGroupName, 'wheat', modelsGroup, setInventory)
            }
        }

        let mixers = [];

        for (let i = 0; i < game.chickens.length; i++) {
            setTimeout(() => {
                mixers.push(
                    keyframes(
                        game.chickens[i].model,
                        i % 2 === 0 ? 'left' : 'right'
                    )
                );
            }, i * 1000);
        }

        window.addEventListener('click', onMouseClick);
        window.addEventListener('mousemove', onMove);

        setInterval(() => {
            game.addWheat();
        }, 10000);

        setInterval(() => {
            game.wheats.forEach((el) => el.growWheat());
        }, 100);

        function animate() {
            requestAnimationFrame(animate);
            render();
        }

        let clock = new THREE.Clock();

        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        function render() {
            renderer.render(game.scene, game.camera);
            const delta = clock.getDelta();

            if (mixers.length) {
                for (let i = 0; i < mixers.length; i++) {
                    mixers[i].mixer.update(delta);
                }
            }
        }
        animate();
    }, []);

    return (
        <div>
            <div ref={mountRef} />
            <div
                className={style.mainContainer}
                style={{ width: window.innerWidth }}
            >
                <ItemIcon inventory={inventory.wheats} imgUrl={'./wheat.png'} />
                <ItemIcon inventory={inventory.eggs} imgUrl={'./egg.png'} />
                <ItemIcon inventory={inventory.milk} imgUrl={'./milk.png'} />
            </div>
            {/* <SellModal/> */}
        </div>
    );
}
