import * as THREE from 'three';

 const keyframes = (model, direction) => {
    const dir = direction === 'left' ? 3 : 3.3
    const zAxis = new THREE.Vector3( 0, 0, 1 );
    const qInitial = new THREE.Quaternion().setFromAxisAngle( zAxis, Math.PI );
    const qFinal = new THREE.Quaternion().setFromAxisAngle( zAxis, dir);
    const quaternionKF = new THREE.QuaternionKeyframeTrack( '.quaternion', [ 0, 0.1, 0.2 ], [ qInitial.x, qInitial.y, qInitial.z, qInitial.w, qFinal.x, qFinal.y, qFinal.z, qFinal.w, qInitial.x, qInitial.y, qInitial.z, qInitial.w ] );
    const clip = new THREE.AnimationClip( 'Action', 3, [quaternionKF] );
    const mixer = new THREE.AnimationMixer( model )
    const clipAction = mixer.clipAction( clip );
    clipAction.play();
    return {mixer}
}

export default keyframes