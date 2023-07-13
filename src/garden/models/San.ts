import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import gltfUrl from '../gltf/san.gltf?url';

const loadGLTF = (group: THREE.Group) => {
    const loader = new GLTFLoader();
    loader.load(gltfUrl, (gltf) => {
        const san = gltf.scene;
        san.traverse((n) => {
            n.castShadow = true;
            n.receiveShadow = true;
        });

        san.scale.set(11, 11, 11);
        san.rotateY(-Math.PI);
        san.position.z = 20;
        san.position.x = 95;
        san.position.y = 2.05;
        // var axisHelper = new THREE.AxesHelper(1000);
        // san.add(axisHelper);
        group.add(san);
    });
}

export const createSan = () => {
    var group = new THREE.Group();
    loadGLTF(group);
    return group;
}