import * as THREE from 'three';

export default function chickenModel() {
    const zoom = 2;
    const chickenSize = 12;
    const chicken = new THREE.Group();

    const chickenTrans = new THREE.Mesh(
        new THREE.BoxBufferGeometry(25 * zoom, 25 * zoom, 32 * zoom),
        new THREE.MeshPhongMaterial({
            color: 0xfe5c00,
            opacity: 0,
            transparent: true,
        })
    );
    chickenTrans.position.z = 30;
    const body = new THREE.Mesh(
        new THREE.BoxBufferGeometry(
            chickenSize * zoom,
            chickenSize * zoom,
            18 * zoom
        ),
        new THREE.MeshPhongMaterial({ color: '#B0B0EE' })
    );
    body.position.z = 20 * zoom;
    body.castShadow = true;
    body.receiveShadow = true;
    chicken.add(body);

    const body2 = new THREE.Mesh(
        new THREE.BoxBufferGeometry(
            chickenSize * zoom,
            chickenSize * zoom,
            10 * zoom
        ),
        new THREE.MeshPhongMaterial({ color: '#B0B0EE' })
    );
    body2.position.y = -7 * zoom;
    body2.position.z = 16 * zoom;
    body2.castShadow = true;
    body2.receiveShadow = true;
    chicken.add(body2);

    const lWing = new THREE.Mesh(
        new THREE.BoxBufferGeometry(3 * zoom, 9 * zoom, 6 * zoom),
        new THREE.MeshPhongMaterial({ color: '#B0B0EE' })
    );
    lWing.position.x = 8 * zoom;
    lWing.position.y = -3 * zoom;
    lWing.position.z = 16 * zoom;

    const rWing = new THREE.Mesh(
        new THREE.BoxBufferGeometry(3 * zoom, 9 * zoom, 6 * zoom),
        new THREE.MeshPhongMaterial({ color: '#B0B0EE' })
    );
    rWing.position.x = -8 * zoom;
    rWing.position.y = -3 * zoom;
    rWing.position.z = 16 * zoom;
    chicken.add(lWing, rWing);

    const rowel = new THREE.Mesh(
        new THREE.BoxBufferGeometry(4 * zoom, 6 * zoom, 2 * zoom),
        new THREE.MeshLambertMaterial({
            color: '#f50400',
        })
    );
    rowel.position.y = 2 * zoom;
    rowel.position.z = 31 * zoom;
    rowel.castShadow = true;
    rowel.receiveShadow = false;
    chicken.add(rowel);

    const leftEye = new THREE.Mesh(
        new THREE.BoxBufferGeometry(2 * zoom, 2 * zoom, 2 * zoom),
        new THREE.MeshLambertMaterial({
            color: '#05010d',
        })
    );
    leftEye.position.z = 25 * zoom;
    leftEye.position.x = 6 * zoom;
    leftEye.castShadow = true;
    leftEye.receiveShadow = false;
    chicken.add(leftEye);

    const rightEye = new THREE.Mesh(
        new THREE.BoxBufferGeometry(2 * zoom, 2 * zoom, 2 * zoom),
        new THREE.MeshLambertMaterial({
            color: '#05010d',
        })
    );
    rightEye.position.z = 25 * zoom;
    rightEye.position.x = -6 * zoom;
    rightEye.castShadow = true;
    rightEye.receiveShadow = false;
    chicken.add(rightEye);

    const beak = new THREE.Mesh(
        new THREE.BoxBufferGeometry(4 * zoom, 4 * zoom, 4 * zoom),
        new THREE.MeshLambertMaterial({
            color: '#E8BB07',
        })
    );
    beak.position.z = 25 * zoom;
    beak.position.y = 7 * zoom;
    beak.position.x = 0 * zoom;
    beak.castShadow = true;
    beak.receiveShadow = false;

    const beak2 = new THREE.Mesh(
        new THREE.BoxBufferGeometry(4 * zoom, 4 * zoom, 4 * zoom),
        new THREE.MeshLambertMaterial({
            color: '#f50400',
        })
    );
    beak2.position.z = 21 * zoom;
    beak2.position.y = 6 * zoom;
    beak2.position.x = 0 * zoom;

    chicken.add(beak, beak2);

    const leftLeg1 = new THREE.Mesh(
        new THREE.BoxBufferGeometry(2 * zoom, 8 * zoom, 2 * zoom),
        new THREE.MeshLambertMaterial({
            color: '#E8BB07',
        })
    );
    leftLeg1.position.x = 2 * zoom;
    leftLeg1.position.z = 4 * zoom;

    const leftLeg2 = new THREE.Mesh(
        new THREE.BoxBufferGeometry(2 * zoom, 8 * zoom, 2 * zoom),
        new THREE.MeshLambertMaterial({
            color: '#E8BB07',
        })
    );
    leftLeg2.position.x = 6 * zoom;
    leftLeg2.position.z = 4 * zoom;

    const leftLeg3 = new THREE.Mesh(
        new THREE.BoxBufferGeometry(2 * zoom, 8 * zoom, 2 * zoom),
        new THREE.MeshLambertMaterial({
            color: '#E8BB07',
        })
    );
    leftLeg3.position.x = 4 * zoom;
    leftLeg3.position.y = -6 * zoom;
    leftLeg3.position.z = 4 * zoom;

    const leftLeg4 = new THREE.Mesh(
        new THREE.BoxBufferGeometry(2 * zoom, 2 * zoom, 10 * zoom),
        new THREE.MeshLambertMaterial({
            color: '#E8BB07',
        })
    );
    leftLeg4.position.x = 4 * zoom;
    leftLeg4.position.y = -3 * zoom;
    leftLeg4.position.z = 8 * zoom;

    chicken.add(leftLeg1, leftLeg2, leftLeg3, leftLeg4);

    const rightLeg1 = new THREE.Mesh(
        new THREE.BoxBufferGeometry(2 * zoom, 8 * zoom, 2 * zoom),
        new THREE.MeshLambertMaterial({
            color: '#E8BB07',
        })
    );
    rightLeg1.position.x = -2 * zoom;
    rightLeg1.position.z = 4 * zoom;

    const rightLeg2 = new THREE.Mesh(
        new THREE.BoxBufferGeometry(2 * zoom, 8 * zoom, 2 * zoom),
        new THREE.MeshLambertMaterial({
            color: '#E8BB07',
        })
    );
    rightLeg2.position.x = -6 * zoom;
    rightLeg2.position.z = 4 * zoom;

    const rightLeg3 = new THREE.Mesh(
        new THREE.BoxBufferGeometry(2 * zoom, 8 * zoom, 2 * zoom),
        new THREE.MeshLambertMaterial({
            color: '#E8BB07',
        })
    );
    rightLeg3.position.x = -4 * zoom;
    rightLeg3.position.y = -6 * zoom;
    rightLeg3.position.z = 4 * zoom;

    const rightLeg4 = new THREE.Mesh(
        new THREE.BoxBufferGeometry(2 * zoom, 2 * zoom, 10 * zoom),
        new THREE.MeshLambertMaterial({
            color: '#E8BB07',
        })
    );
    rightLeg4.position.x = -4 * zoom;
    rightLeg4.position.y = -3 * zoom;
    rightLeg4.position.z = 8 * zoom;

    chicken.add(rightLeg1, rightLeg2, rightLeg3, rightLeg4, chickenTrans);
    chicken.rotation.z = Math.PI;

    return chicken;
}
