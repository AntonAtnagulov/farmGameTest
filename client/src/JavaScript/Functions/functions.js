import * as THREE from 'three';

const clickAnimal = (game, targetGroupName, animalName, callback) => {
    if (targetGroupName.includes(animalName) && game.inventory.wheats > 0) {
        console.log('clickAnimal')
        const animal = game.findAnimalClass(targetGroupName);
        if (animal[0].hungry) {
            animal[0].feedAnimal();
            if (typeof callback === 'function') {
                callback((prev) => ({
                    ...prev,
                    wheats: prev.wheats - 1,
                }));
            }
        }
    }
};

const clickProduct = (game, targetGroupName, productName, intersects, callback) => {
    if (targetGroupName.includes(productName)) {
        console.log('clickProduct')
        const animal = game.findAnimalClass(
            intersects[0].object.parent.parent.name
        );
        intersects[0].object.parent.parent.remove(
            intersects[0].object.parent
        );
        animal[0].product = false;
        game.addItem(productName);
        if (typeof callback === 'function') {
            callback((prev) => ({ ...prev, [productName]: prev[productName] + 1 }));
        }
    }
};

const clickPlant = (game, targetGroupName, plantName, modelsGroup, callback) => {
    if (targetGroupName.includes('wheat')) {
        const findedWheat = game.wheats.filter(
            (el) => el.name === targetGroupName
        );
        if (findedWheat[0].status === true) {
            const selectedObject = game.scene.getObjectByName(targetGroupName);
            game.ground.tilePositions.forEach((el) => {
                el.forEach((tile) => {
                    if (
                        tile.position.x ===
                            selectedObject.position.x &&
                        tile.position.y ===
                            selectedObject.position.y
                    ) {
                        tile.empty = true;
                    }
                });
            });
            modelsGroup.remove(selectedObject);
            game.addItem('wheats');
            if (typeof callback === 'function') {
                callback((prev) => ({
                    ...prev,
                    wheats: prev.wheats + 1,
                }));
            }
        }
    }
}

const onDragStart = (e, game, dragStartTile) => {
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
}

const onDrag = (e, game, mouse, intersects, raycaster) => {
    let plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    raycaster.setFromCamera(mouse, game.camera);
    raycaster.ray.intersectPlane(plane, intersects);
    console.log(intersects)
    e.object.position.set(
        intersects.x,
        intersects.y,
        intersects.z + 15
    );
}

const onDragEnd = (e, game, raycaster, dragStartTile) => {
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
}

export {clickAnimal, clickProduct, clickPlant, onDragStart, onDrag, onDragEnd}