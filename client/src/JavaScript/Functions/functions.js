import * as THREE from 'three';

const clickAnimal = (game, targetGroupName, animalName, callback) => {
    if (targetGroupName?.includes(animalName) && game.inventory.wheats > 0) {
        const animal = game.findAnimalClass(targetGroupName);
        if (animal[0].hungry) {
            animal[0].feedAnimal();
            if (typeof callback === 'function') {
                game.inventory.wheats -= 1
                callback((prev) => ({
                    ...prev,
                    wheats: prev.wheats - 1,
                }));
            }
        }
    }
};

const clickProduct = (game, targetGroupName, productName, intersects, callback) => {
    if (targetGroupName?.includes(productName)) {
        const animal = game.findAnimalClass(
            intersects[0]?.object.parent.parent.name
        );
        intersects[0].object.parent.parent.remove(
            intersects[0]?.object.parent
        );
        animal[0].product = false;
        game.addItem(productName);
        if (typeof callback === 'function') {
            callback((prev) => ({ ...prev, [productName]: prev[productName] + 1 }));
        }
    }
};

const clickPlant = (game, targetGroupName, plantName, modelsGroup, callback) => {
    if (targetGroupName?.includes('wheat')) {
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

const clickOnSellButton = (game, intersects, setInventory, setMoney) => {
    if (intersects[0]?.object?.parent?.parent?.name === 'sellAll') {
        const sumWheats = game.inventory.wheats * 2
        const sumEggs = game.inventory.eggs * 10
        const sumMilk = game.inventory.milk * 20
        game.money = game.money + sumWheats + sumEggs + sumMilk;
        game.inventory = { wheats: 0, eggs: 0, milk: 0 }
        if (typeof setInventory === 'function') {
            setInventory({ wheats: 0, eggs: 0, milk: 0 })
            setMoney(game.money)
        }
    }
}


export {clickAnimal, clickProduct, clickPlant, clickOnSellButton}