import * as THREE from 'three';

export default class Scene {
  constructor () {
    this.scene = new THREE.Scene();
    this.hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
  }
}