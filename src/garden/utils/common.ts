import { IModel } from "../../models/IModel";
import * as THREE from 'three';
export const BasicPoint: {
    normals: {
        index: number,
        normal: [number, number, number]
    }[],
    uvs: {
        index: number,
        uv: [number, number]
    }[]
} = {
    normals: [
        //x=1
        { index: 0, normal: [1, 0, 0] },
        //x=-1
        { index: 1, normal: [-1, 0, 0] },
        //y=1
        { index: 2, normal: [0, 1, 0] },
        //y=-1
        { index: 3, normal: [0, -1, 0] },
        //z=1
        { index: 4, normal: [0, 0, 1] },
        //z=-1
        { index: 5, normal: [0, 0, -1] },
    ], uvs: [
        { index: 0, uv: [0, 0] },
        { index: 1, uv: [0, 1] },
        { index: 2, uv: [1, 1] },
        { index: 3, uv: [1, 0] }
    ]
}
export const GenerateMesh = (data: IModel) => {
    var points: number[] = [];
    var normals: number[] = [];
    var uvs: number[] = [];
    data.points.forEach(p => {
        points.push(...data.vertexs[p.vertexIndex].vertex);
        normals.push(...BasicPoint.normals[p.normalIndex].normal);
        uvs.push(...BasicPoint.uvs[p.uvIndex].uv);
    })
    var faces: number[] = [];
    data.faces.forEach(f => {
        faces.push(...f);
    })
    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(points), 3));
    geometry.setAttribute("normal", new THREE.BufferAttribute(new Float32Array(normals), 3));
    geometry.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(uvs), 2));
    geometry.setIndex(faces);

    const materials: THREE.Material[] = [];
    data.materisls.forEach(m => {
        const tp = m.transparent != undefined ? m.transparent : true;
        const side = m.side != undefined ? m.side : THREE.FrontSide;
        if (m.texture != undefined) {
            const texture = new THREE.TextureLoader().load(m.texture.url);
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(m.texture.repeatX, m.texture.repeatY);
            const material = new THREE.MeshStandardMaterial({
                color: m.color,
                map: texture,
                transparent: tp,
                opacity: m.opacity,
                side: side
            });
            materials.push(material);
        }
        else {
            const material = new THREE.MeshStandardMaterial({
                color: m.color,
                transparent: tp,
                opacity: m.opacity,
                side: side
            });
            materials.push(material);
        }
    });
    data.drawGroups.forEach(d => {
        const count = d.pointCount != undefined ? d.pointCount : 6;
        const start = d.faceIndex * count;
        geometry.addGroup(start, count, d.materialIndex);
    });
    const mesh = new THREE.Mesh(geometry, materials);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
}