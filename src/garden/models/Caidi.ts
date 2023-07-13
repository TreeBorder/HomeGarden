import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import baicaiGltfUrl from '../gltf/baicai.glb?url';

const loadGLTFs = (group: THREE.Group) => {
    const loader = new GLTFLoader();
    loader.load(baicaiGltfUrl, (gltf) => {
        const baicai = gltf.scene;
        baicai.traverse((n) => {
            n.castShadow = true;
            n.receiveShadow = true;
        });
        baicai.scale.set(10, 10, 10);
        baicai.rotateY(Math.PI / 2);
        // baicai.position.z = 100;
        const bc1 = baicai.clone();
        bc1.position.set(15.5, -2.7, 45);

        const bc2 = baicai.clone();
        bc2.position.set(15.5, -2.6, 65);

        const bc3 = baicai.clone();
        bc3.position.set(33.5, -2.7, 45);

        const bc4 = baicai.clone();
        bc4.position.set(33.5, -2.6, 65);

        group.add(bc1);
        group.add(bc2);
        group.add(bc3);
        group.add(bc4);
    });
}

export const createCaidi = () => {
    var group = new THREE.Group();
    loadGLTFs(group);
    return group;
}