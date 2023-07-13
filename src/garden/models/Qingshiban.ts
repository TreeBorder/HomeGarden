import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import gltfUrl from '../gltf/qingshiban.glb?url';

const loadGLTF = (group: THREE.Group) => {
    const loader = new GLTFLoader();
    loader.load(gltfUrl, (gltf) => {
        const qingshiban = gltf.scene;
        qingshiban.scale.set(10, 10, 10);

        for (let i = 0; i < 7; i++) {
            const qsb = qingshiban.clone();
            qsb.position.set(16, 0.5, i * 6.5 + 20 + 6.5);
            group.add(qsb);
        }
        const qingshiban2 = qingshiban.clone();
        qingshiban2.rotateY(Math.PI / 2);
        for (let i = 0; i < 16; i++) {
            const qsb2 = qingshiban2.clone();
            qsb2.position.set(i * 6.5 + 7.2, 0.5, 69);
            group.add(qsb2);
        }
    });
}

export const createQingshiban = () => {
    var group = new THREE.Group();
    loadGLTF(group);
    return group;
}