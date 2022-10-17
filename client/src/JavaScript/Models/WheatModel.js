import * as THREE from 'three';

export default function wheatModel() {
    const zoom = 2;
    const wheatModel = new THREE.Group();

    const wheatTrans = new THREE.Mesh(
        new THREE.BoxBufferGeometry(16 * zoom, 16 * zoom, 15 * zoom),
        new THREE.MeshPhongMaterial({ color: 0xfe5c00, opacity: 0 ,transparent: true })
    );
    const wheatStalk = new THREE.Mesh(
        new THREE.BoxBufferGeometry(5 * zoom, 5 * zoom, 15 * zoom),
        new THREE.MeshPhongMaterial({ color: 0x34673F, flatShading: true })
    );

    const wheatGrains = new THREE.Mesh(
        new THREE.BoxBufferGeometry(6 * zoom, 6 * zoom, 5 * zoom),
        new THREE.MeshPhongMaterial({ color: 0x585638, flatShading: true })
    );

    wheatTrans.position.z += 15;
    wheatStalk.position.z += 15;
    wheatGrains.position.z += 26;
    wheatModel.add(wheatTrans, wheatStalk, wheatGrains);
    wheatModel.position.set(0, 0, 15);
    return wheatModel;
}