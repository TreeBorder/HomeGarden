import * as THREE from 'three'
import dizhuanUrl from '../../assets/texture/dizhuan.jpg';
import { IModel } from '../../models/IModel';
import { GenerateMesh } from '../utils/common';
const dizhuanModel: IModel = {
    vertexs: [
        { index: 0, vertex: [0, 0, 0,] },
        { index: 1, vertex: [0, 0, 10,] },
        { index: 2, vertex: [0, 0, 20,] },
        { index: 3, vertex: [106, 0, 20,] },
        { index: 4, vertex: [106, 0, 10,] },
        { index: 5, vertex: [36, 0, 10,] },
        { index: 6, vertex: [36, 0, 0,] },

        { index: 7, vertex: [0, 2, 0,] },
        { index: 8, vertex: [0, 2, 10,] },
        { index: 9, vertex: [0, 2, 20,] },
        { index: 10, vertex: [106, 2, 20,] },
        { index: 11, vertex: [106, 2, 10,] },
        { index: 12, vertex: [36, 2, 10,] },
        { index: 13, vertex: [36, 2, 0,] },
    ],
    points: [
        //x=1
        { index: 0, vertexIndex: 3, normalIndex: 0, uvIndex: 0 },
        { index: 1, vertexIndex: 10, normalIndex: 0, uvIndex: 1 },
        { index: 2, vertexIndex: 11, normalIndex: 0, uvIndex: 2 },
        { index: 3, vertexIndex: 4, normalIndex: 0, uvIndex: 3 },

        { index: 0 + 4 * 1, vertexIndex: 5, normalIndex: 0, uvIndex: 0 },
        { index: 1 + 4 * 1, vertexIndex: 12, normalIndex: 0, uvIndex: 1 },
        { index: 2 + 4 * 1, vertexIndex: 13, normalIndex: 0, uvIndex: 2 },
        { index: 3 + 4 * 1, vertexIndex: 6, normalIndex: 0, uvIndex: 3 },

        //x=-1
        { index: 0 + 4 * 2, vertexIndex: 0, normalIndex: 1, uvIndex: 0 },
        { index: 1 + 4 * 2, vertexIndex: 7, normalIndex: 1, uvIndex: 1 },
        { index: 2 + 4 * 2, vertexIndex: 8, normalIndex: 1, uvIndex: 2 },
        { index: 3 + 4 * 2, vertexIndex: 1, normalIndex: 1, uvIndex: 3 },

        //y=1
        { index: 0 + 4 * 3, vertexIndex: 8, normalIndex: 2, uvIndex: 0 },
        { index: 1 + 4 * 3, vertexIndex: 7, normalIndex: 2, uvIndex: 1 },
        { index: 2 + 4 * 3, vertexIndex: 13, normalIndex: 2, uvIndex: 2 },
        { index: 3 + 4 * 3, vertexIndex: 12, normalIndex: 2, uvIndex: 3 },

        { index: 0 + 4 * 4, vertexIndex: 9, normalIndex: 2, uvIndex: 0 },
        { index: 1 + 4 * 4, vertexIndex: 8, normalIndex: 2, uvIndex: 1 },
        { index: 2 + 4 * 4, vertexIndex: 11, normalIndex: 2, uvIndex: 2 },
        { index: 3 + 4 * 4, vertexIndex: 10, normalIndex: 2, uvIndex: 3 },

        //y=-1
        { index: 0 + 4 * 5, vertexIndex: 0, normalIndex: 3, uvIndex: 0 },
        { index: 1 + 4 * 5, vertexIndex: 1, normalIndex: 3, uvIndex: 1 },
        { index: 2 + 4 * 5, vertexIndex: 5, normalIndex: 3, uvIndex: 2 },
        { index: 3 + 4 * 5, vertexIndex: 6, normalIndex: 3, uvIndex: 3 },

        { index: 0 + 4 * 6, vertexIndex: 1, normalIndex: 3, uvIndex: 0 },
        { index: 1 + 4 * 6, vertexIndex: 2, normalIndex: 3, uvIndex: 1 },
        { index: 2 + 4 * 6, vertexIndex: 3, normalIndex: 3, uvIndex: 2 },
        { index: 3 + 4 * 6, vertexIndex: 4, normalIndex: 3, uvIndex: 3 },
        //z=1
        { index: 0 + 4 * 7, vertexIndex: 2, normalIndex: 4, uvIndex: 0 },
        { index: 1 + 4 * 7, vertexIndex: 9, normalIndex: 4, uvIndex: 1 },
        { index: 2 + 4 * 7, vertexIndex: 10, normalIndex: 4, uvIndex: 2 },
        { index: 3 + 4 * 7, vertexIndex: 3, normalIndex: 4, uvIndex: 3 },

        //z=-1
        { index: 0 + 4 * 8, vertexIndex: 4, normalIndex: 4, uvIndex: 0 },
        { index: 1 + 4 * 8, vertexIndex: 11, normalIndex: 4, uvIndex: 1 },
        { index: 2 + 4 * 8, vertexIndex: 12, normalIndex: 4, uvIndex: 2 },
        { index: 3 + 4 * 8, vertexIndex: 5, normalIndex: 4, uvIndex: 3 },

        { index: 0 + 4 * 9, vertexIndex: 6, normalIndex: 4, uvIndex: 0 },
        { index: 1 + 4 * 9, vertexIndex: 13, normalIndex: 4, uvIndex: 1 },
        { index: 2 + 4 * 9, vertexIndex: 7, normalIndex: 4, uvIndex: 2 },
        { index: 3 + 4 * 9, vertexIndex: 0, normalIndex: 4, uvIndex: 3 },

    ],
    faces: [
        //x=1
        [2 + 0 * 4, 1 + 0 * 4, 0 + 0 * 4],
        [2 + 0 * 4, 0 + 0 * 4, 3 + 0 * 4],

        [2 + 1 * 4, 1 + 1 * 4, 0 + 1 * 4],
        [2 + 1 * 4, 0 + 1 * 4, 3 + 1 * 4],

        //x=-1
        [2 + 2 * 4, 1 + 2 * 4, 0 + 2 * 4],
        [2 + 2 * 4, 0 + 2 * 4, 3 + 2 * 4],

        //y=1
        [2 + 3 * 4, 1 + 3 * 4, 0 + 3 * 4],
        [2 + 3 * 4, 0 + 3 * 4, 3 + 3 * 4],

        [2 + 4 * 4, 1 + 4 * 4, 0 + 4 * 4],
        [2 + 4 * 4, 0 + 4 * 4, 3 + 4 * 4],
        //y=-1
        [2 + 5 * 4, 1 + 5 * 4, 0 + 5 * 4],
        [2 + 5 * 4, 0 + 5 * 4, 3 + 5 * 4],

        [2 + 6 * 4, 1 + 6 * 4, 0 + 6 * 4],
        [2 + 6 * 4, 0 + 6 * 4, 3 + 6 * 4],
        //z=1
        [2 + 7 * 4, 1 + 7 * 4, 0 + 7 * 4],
        [2 + 7 * 4, 0 + 7 * 4, 3 + 7 * 4],
        //z=-1
        [2 + 8 * 4, 1 + 8 * 4, 0 + 8 * 4],
        [2 + 8 * 4, 0 + 8 * 4, 3 + 8 * 4],

        [2 + 9 * 4, 1 + 9 * 4, 0 + 9 * 4],
        [2 + 9 * 4, 0 + 9 * 4, 3 + 9 * 4],
    ],
    materisls: [{
        color: 0xf1f1f1,
        opacity: 1,
    }, {
        color: 0xf1f1f1,
        opacity: 1,
        texture: {
            url: dizhuanUrl,
            repeatX: 1,
            repeatY: 0.278,
        }
    }, {
        color: 0xf1f1f1,
        opacity: 1,
        texture: {
            url: dizhuanUrl,
            repeatX: 2.944,
            repeatY: 0.278,
        }
    },],
    drawGroups: [
        { faceIndex: 0, materialIndex: 0 },
        { faceIndex: 1, materialIndex: 0 },
        { faceIndex: 2, materialIndex: 0 },
        { faceIndex: 3, materialIndex: 1 },
        { faceIndex: 4, materialIndex: 2 },
        { faceIndex: 5, materialIndex: 0 },
        { faceIndex: 6, materialIndex: 0 },
        { faceIndex: 7, materialIndex: 0 },
        { faceIndex: 8, materialIndex: 0 },
        { faceIndex: 9, materialIndex: 0 },
    ]
};
const diping = (group: THREE.Group) => {
    const geometry = new THREE.BoxGeometry(70, 1.4, 40);
    const material = new THREE.MeshPhysicalMaterial({ color: 0xf1f1f1 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(35 + 36, 0.7, 20 + 20);
    group.add(mesh);
}
const musu = () => {
    const geometry = new THREE.BoxGeometry(34.9, 0.5, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0xdd8a1a });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    return mesh;
}
const musuGroup = (group: THREE.Group) => {
    const msGroup = new THREE.Group();
    for (let i = 0; i < 38; i++) {
        const ms = musu();
        ms.position.set(17.45 + 36, 0.25 + 1.5, i * 1.06 + 20.55);
        group.add(ms);
    }
    for (let i = 0; i < 38; i++) {
        const ms = musu();
        ms.position.set(17.45 + 36 + 35, 0.25 + 1.5, i * 1.06 + 20.55);
        group.add(ms);
    }
    group.add(msGroup);
}
// const dizhuan = () => {
//     const points = new Float32Array([
//         0, 0, 0,
//         36, 0, 0,
//         0, 0, 20,
//         36, 0, 0,
//         36, 0, 10,
//         0, 0, 20,
//         36, 0, 10,
//         106, 0, 20,
//         0, 0, 20,
//         36, 0, 10,
//         106, 0, 10,
//         106, 0, 20,
//         0, 0, 0,
//         0, 0, 20,
//         0, 2, 20,
//         0, 2, 20,
//         0, 2, 0,
//         0, 0, 0,
//         0, 0, 20,
//         106, 0, 20,
//         106, 2, 20,
//         106, 2, 20,
//         0, 2, 20,
//         0, 0, 20,
//         106, 0, 20,
//         106, 0, 10,
//         106, 2, 10,
//         106, 2, 10,
//         106, 2, 20,
//         106, 0, 20,
//         106, 0, 10,
//         36, 0, 10,
//         36, 2, 10,
//         36, 2, 10,
//         106, 2, 10,
//         106, 0, 10,
//         36, 0, 10,
//         36, 0, 0,
//         36, 2, 0,
//         36, 2, 0,
//         36, 2, 10,
//         36, 0, 10,
//         36, 0, 0,
//         0, 0, 0,
//         0, 2, 0,
//         0, 2, 0,
//         36, 2, 0,
//         36, 0, 0,
//         0, 2, 0,
//         0, 2, 20,
//         36, 2, 0,
//         36, 2, 0,
//         0, 2, 20,
//         36, 2, 10,
//         36, 2, 10,
//         0, 2, 20,
//         106, 2, 20,
//         36, 2, 10,
//         106, 2, 20,
//         106, 2, 10,
//     ]);
//     var vertices = new THREE.BufferAttribute(points, 3);
//     var geometry = new THREE.BufferGeometry();
//     geometry.setAttribute("position", vertices);
//     geometry.computeVertexNormals();

//     var texture = new THREE.TextureLoader().load(dizhuanUrl);
//     texture.wrapS = THREE.RepeatWrapping;
//     texture.wrapT = THREE.RepeatWrapping;
//     texture.repeat.set(1, 1);
//     const material = new THREE.MeshPhysicalMaterial({ map: texture, side: THREE.DoubleSide });
//     const mesh = new THREE.Mesh(geometry, material);
//     return mesh;
// }

export const createYinghua = () => {
    const group = new THREE.Group();
    group.add(GenerateMesh(dizhuanModel));
    diping(group);
    musuGroup(group);
    // group.add(dizhuan());
    // group.position.z = 500;
    return group;
}