import * as THREE from 'three';

export default function HemisphereLight() {
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
    return hemisphereLight;
}
