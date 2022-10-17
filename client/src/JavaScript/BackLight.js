import * as THREE from 'three';

export default function BackLight() {
    const backLight = new THREE.DirectionalLight(0x000000, 0.4);
    backLight.position.set(200, 200, 50);
    backLight.castShadow = true;
    return backLight;
}
