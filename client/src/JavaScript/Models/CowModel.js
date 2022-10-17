import * as THREE from 'three';

export default function cowModel() {
    const zoom = 2;
    const hungryMaterial = new THREE.MeshPhongMaterial({ color: 0xB0B0EE })
    const cow = new THREE.Group();

    const cowBody = new THREE.Mesh(
        new THREE.BoxBufferGeometry(14 * zoom, 28 * zoom, 14 * zoom),
        hungryMaterial,
        // new THREE.MeshToonMaterial({ color: 0xB0B0EE })
    );
    cowBody.position.z = 30;

    const cowBodyPart = new THREE.Mesh(
        new THREE.BoxBufferGeometry(15 * zoom, 8 * zoom, 8 * zoom),
        new THREE.MeshPhongMaterial({
            color: 0x5a2c2e,
        })
    );
    cowBodyPart.position.set(0, 10, 38);

    const cowBodyPart2 = new THREE.Mesh(
        new THREE.BoxBufferGeometry(8 * zoom, 8 * zoom, 8 * zoom),
        new THREE.MeshPhongMaterial({
            color: 0x5a2c2e,
        })
    );
    cowBodyPart2.position.set(8, -21, 30);

    const cowHead = new THREE.Mesh(
        new THREE.BoxBufferGeometry(14 * zoom, 12 * zoom, 14 * zoom),
        new THREE.MeshPhongMaterial({
            color: 0x5a2c2e,
        })
    );
    cowHead.position.set(0, -16, 57);

    const cowHornL = new THREE.Mesh(
        new THREE.BoxBufferGeometry(3 * zoom, 3 * zoom, 8 * zoom),
        hungryMaterial
    );
    cowHornL.position.set(9, -16, 68);

    const cowHornR = new THREE.Mesh(
        new THREE.BoxBufferGeometry(3 * zoom, 3 * zoom, 8 * zoom),
        hungryMaterial
    );
    cowHornR.position.set(-9, -16, 68);

    const cowEarL = new THREE.Mesh(
        new THREE.BoxBufferGeometry(4 * zoom, 2 * zoom, 4 * zoom),
        new THREE.MeshPhongMaterial({
            color: 0x5a2c2e,
        })
    );
    cowEarL.position.set(14, -16, 63);

    const cowEarR = new THREE.Mesh(
        new THREE.BoxBufferGeometry(3 * zoom, 3 * zoom, 8 * zoom),
        new THREE.MeshPhongMaterial({
            color: 0x5a2c2e,
        })
    );
    cowEarR.position.set(-14, -16, 63);

    const cowNose = new THREE.Mesh(
        new THREE.BoxBufferGeometry(10 * zoom, 10 * zoom, 5 * zoom),
        new THREE.MeshPhongMaterial({
            color: 0xf17878,
        })
    );
    cowNose.position.set(0, -25, 57);

    const frontLegL = new THREE.Mesh(
        new THREE.BoxBufferGeometry(5 * zoom, 5 * zoom, 10 * zoom),
        hungryMaterial
    );
    frontLegL.position.set(9, -22, 6);

    const frontLegR = new THREE.Mesh(
        new THREE.BoxBufferGeometry(5 * zoom, 5 * zoom, 10 * zoom),
        hungryMaterial
    );

    frontLegR.position.set(-9, -22, 6);

    const rearLegL = new THREE.Mesh(
        new THREE.BoxBufferGeometry(5 * zoom, 5 * zoom, 10 * zoom),
        hungryMaterial
    );
    rearLegL.position.set(9, 22, 6);

    const rearLegR = new THREE.Mesh(
        new THREE.BoxBufferGeometry(5 * zoom, 5 * zoom, 10 * zoom),
        hungryMaterial
    );
    rearLegR.position.set(-9, 22, 6);

    const leftEye = new THREE.Mesh(
        new THREE.BoxBufferGeometry(2 * zoom, 6 * zoom, 2 * zoom),
        new THREE.MeshPhongMaterial({
            color: 0x000000,
        })
    );
    leftEye.position.set(7, -24, 65);

    const rightEye = new THREE.Mesh(
        new THREE.BoxBufferGeometry(2 * zoom, 6 * zoom, 2 * zoom),
        new THREE.MeshPhongMaterial({
            color: 0x000000,
        })
    );
    rightEye.position.set(-7, -24, 65);

    cow.add(
        cowBody,
        frontLegL,
        frontLegR,
        rearLegL,
        rearLegR,
        cowHornL,
        cowHornR,
        cowHead,
        cowBodyPart,
        cowNose,
        leftEye,
        rightEye,
        cowEarL,
        cowEarR,
        cowBodyPart2
    );
    return cow;
}
