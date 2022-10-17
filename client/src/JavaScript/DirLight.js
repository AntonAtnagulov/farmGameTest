import * as THREE from 'three';

export default function DirectionalLight({ target }) {
    const initialDirLightPositionX = -100;
    const initialDirLightPositionY = -100;
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(
        initialDirLightPositionX,
        initialDirLightPositionY,
        200
    );
    dirLight.castShadow = true;
    // dirLight.target = target;

    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    var d = 500;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;

    return dirLight;
}
