import * as THREE from 'three';

export default function Camera() {
    const camera = new THREE.OrthographicCamera( window.innerWidth/-2.5, window.innerWidth/2.5, window.innerHeight / 2.5, window.innerHeight / -2.5, 0.1, 10000 );
  
    camera.rotation.x = 50*Math.PI/180;
    camera.rotation.y = 20*Math.PI/180;
    camera.rotation.z = 10*Math.PI/180;
  
    const distance = 250
    const initialCameraPositionY = -100
    const initialCameraPositionX = 480
    camera.position.y = initialCameraPositionY;
    camera.position.x = initialCameraPositionX;
    camera.position.z = distance;
  
    return camera
  }