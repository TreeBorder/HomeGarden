import * as THREE from 'three';
import nibaUrl from '../../assets/texture/niba.jpg';
export const createTudi = () => {
    var texture = new THREE.TextureLoader().load(nibaUrl);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 7);
    var geometry = new THREE.PlaneGeometry(106, 75);
    var basicMeterial = new THREE.MeshPhysicalMaterial({
        map: texture,
        // color: 0xf1f1f1,
        transparent: true,
        // opacity: 0.2,
        side: THREE.DoubleSide
    });
    var basic = new THREE.Mesh(geometry, basicMeterial);

    basic.rotateX(Math.PI / 2);

    // basic.position.y = 0;
    basic.position.set(53, 0, 37.5);
    basic.receiveShadow = true;
    return basic;
}