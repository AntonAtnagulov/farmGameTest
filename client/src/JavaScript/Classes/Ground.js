import * as THREE from 'three';

export default class Ground {
    constructor() {
        this.tilePositions = [];
        this.mesh = this.generateGround();
    }

    generateGround() {
        const zoom = 2;
        const arr = [0, 1, 2, 3, 4, 5, 6, 7];
        const lines = [0, 1, 2, 3, 4, 5, 6, 7];
        const ground = new THREE.Group();

        lines.forEach((elem, ix) => {
            const linePositions = [];
            const line = new THREE.Group();
            arr.forEach((el, iy) => {
                const plane = new THREE.Mesh(
                    new THREE.BoxBufferGeometry(40 * zoom, 40 * zoom, 4 * zoom),
                    new THREE.MeshPhongMaterial({
                        color: 0x6d9c7a,
                        flatShading: true,
                    })
                );
                line.add(plane);
                plane.position.x = 42 * el * zoom;
                plane.position.y = 42 * ix * zoom;
                linePositions.push({
                    position: plane.position,
                    empty: true,
                    posXY: { x: ix, y: iy },
                });
            });
            ground.add(line);
            this.tilePositions.push(linePositions);
        });
        return ground;
    }
}
