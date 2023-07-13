import * as THREE from 'three';

const room = () => {
    //0 // 0, 0, 0,
    //1 // 0, 0, 68,
    //2 // 36, 0, 68,
    //3 // 36, 0, 78,
    //4 // 106, 0, 78,
    //5 // 106, 0, -53,
    //6 // 8, 0, -53,
    //7 // 8, 0, 0,

    //8 // 0, 29, 0,
    //9 // 0, 29, 68,
    //10 // 36, 29, 68,
    //11 // 36, 29, 78,
    //12 // 106, 29, 78,
    //13 // 106, 29, -53,
    //14 // 8, 29, -53,
    //15 // 8, 29, 0,
    const points = new Float32Array([
        0, 0, 0,
        36, 0, 68,
        0, 0, 68,

        8, 0, 0,
        36, 0, 68,
        0, 0, 0,

        8, 0, -53,
        36, 0, 68,
        8, 0, 0,

        106, 0, -53,
        36, 0, 68,
        8, 0, -53,

        106, 0, 78,
        36, 0, 68,
        106, 0, -53,

        36, 0, 78,
        36, 0, 68,
        106, 0, 78,

        0, 0, 0,
        0, 0, 68,
        0, 29, 68,

        0, 29, 68,
        0, 29, 0,
        0, 0, 0,

        0, 0, 68,
        36, 0, 68,
        36, 29, 68,

        36, 29, 68,
        0, 29, 68,
        0, 0, 68,

        36, 0, 68,
        36, 0, 78,
        36, 29, 78,
        36, 29, 78,
        36, 29, 68,
        36, 0, 68,
        36, 0, 78,
        106, 0, 78,
        106, 29, 78,
        106, 29, 78,
        36, 29, 78,
        36, 0, 78,
        106, 0, 78,
        106, 0, -53,
        106, 29, -53,
        106, 29, -53,
        106, 29, 78,
        106, 0, 78,
        106, 0, -53,
        8, 0, -53,
        8, 29, -53,
        8, 29, -53,
        106, 29, -53,
        106, 0, -53,
        8, 0, -53,
        8, 0, 0,
        8, 29, 0,
        8, 29, 0,
        8, 29, -53,
        8, 0, -53,
        8, 0, 0,
        0, 0, 0,
        0, 29, 0,
        0, 29, 0,
        8, 29, 0,
        8, 0, 0,

        0, 29, 0,
        0, 29, 68,
        36, 29, 68,
        0, 29, 0,
        36, 29, 68,
        8, 29, 0,
        8, 29, 0,
        36, 29, 68,
        8, 29, -53,
        8, 29, -53,
        36, 29, 68,
        106, 29, -53,
        106, 29, -53,
        36, 29, 68,
        106, 29, 78,
        106, 29, 78,
        36, 29, 68,
        36, 29, 78,
    ]);
    var vertices = new THREE.BufferAttribute(points, 3);
    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", vertices);
    geometry.computeVertexNormals();
    const material = new THREE.MeshPhysicalMaterial({ color: 0x888888, transparent: false, opacity: 1 });
    const mesh = new THREE.Mesh(geometry, material);
    // mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
}
export const createBuilding = () => {
    const group = new THREE.Group();
    const xiRoom = room();
    const dongRoom = xiRoom.clone();
    dongRoom.rotateZ(Math.PI);
    dongRoom.position.y = 29;
    dongRoom.position.x = 106;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 11; j++) {
            if (i == 2 && j == 0) continue;
            const r = xiRoom.clone();
            r.position.x += 106 * i * 2;
            r.position.y += 29 * j;
            group.add(r);
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 11; j++) {
            const r = dongRoom.clone();
            r.position.x += 106 * (i * 2 + 1);
            r.position.y += 29 * j;
            group.add(r);
        }
    }

    group.position.x = -106 * 4;
    group.position.y = 2.05;
    group.position.z = -68.1;

    return group;
}