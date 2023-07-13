import * as THREE from 'three'
import { CSG } from 'three-csg-ts'

const Qiang = (x: number, y: number, z: number) => {
    const geometry = new THREE.BoxGeometry(x, y, z);
    geometry.translate(x / 2, y / 2, -z / 2);
    const material = new THREE.MeshPhongMaterial({ color: 0xe6e6e6 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    return mesh;
}

const Chuanghu = (len: number) => {
    const geometry = new THREE.BoxGeometry(len, 12, 2.4);
    geometry.translate(len / 2, 6 + 9, 0);
    const material = new THREE.MeshPhysicalMaterial({ color: 0xe6e6e6 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    // mesh.translateOnAxis.set(len / 2, 14.5, 1.2);
    return mesh;
}

const Luodichuang = () => {
    const geometry = new THREE.BoxGeometry(54, 22, 2.4);
    geometry.translate(27, 11 + 1, 0);
    const material = new THREE.MeshPhysicalMaterial({ color: 0xe6e6e6 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    // mesh.translateOnAxis.set(len / 2, 14.5, 1.2);
    return mesh;
}
const Men = (deep: number) => {
    const geometry = new THREE.BoxGeometry(8, 20, deep);
    geometry.translate(4, 10, 0);
    const material = new THREE.MeshPhysicalMaterial({ color: 0xe6e6e6 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    return mesh;
}
const DaMen = () => {
    const geometry = new THREE.BoxGeometry(10, 20, 2.4);
    geometry.translate(5, 10, 0);
    const material = new THREE.MeshPhysicalMaterial({ color: 0xe6e6e6 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    return mesh;
}
const MenDong = (len: number) => {
    const geometry = new THREE.BoxGeometry(len, 22, 2.4);
    geometry.translate(len / 2, 11, 0);
    const material = new THREE.MeshPhysicalMaterial({ color: 0xe6e6e6 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    return mesh;
}


const Qiang24 = (len: number) => {
    // const geometry = new THREE.BoxGeometry(len + 2.4, 29, 2.4);
    const geometry = new THREE.BoxGeometry(len + 2.4, 29, 2.4);
    geometry.translate((len + 2.4) / 2 - 1.2, 14.5, 0);
    const material = new THREE.MeshPhongMaterial({ color: 0xe6e6e6 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    // var axisHelper = new THREE.AxesHelper(1000);
    // mesh.add(axisHelper);
    // mesh.translateOnAxis.set(len / 2, 14.5, 1.2);
    return mesh;
}
const Qiang12 = (len: number) => {
    // const geometry = new THREE.BoxGeometry(len + 2.4, 29, 2.4);
    const geometry = new THREE.BoxGeometry(len + 1.2, 29, 1.2);
    geometry.translate((len + 1.2) / 2 - 0.6, 14.5, 0);
    const material = new THREE.MeshPhongMaterial({ color: 0xe6e6e6 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    // var axisHelper = new THREE.AxesHelper(1000);
    // mesh.add(axisHelper);
    // mesh.translateOnAxis.set(len / 2, 14.5, 1.2);
    return mesh;
}
const BeiWo = () => {
    const group = new THREE.Group();
    const beiwoW = Qiang24(53.5);
    const beiwoXC = Chuanghu(15);
    const beiwoDC = Chuanghu(15);
    beiwoXC.geometry.translate(5 + 1.2, 0, 0);
    beiwoDC.geometry.translate((53.5 - 4.8) / 2 + 8.35, 0, 0);

    const beiwoWc = CSG.subtract(CSG.subtract(beiwoW, beiwoXC), beiwoDC);
    beiwoWc.position.set(8.45, 0, -53 - 68);
    group.add(beiwoWc);

    const q34 = Qiang24(34 - 0.6);
    q34.rotateY(Math.PI / 2);
    q34.position.set(8.45 + 53.5, 0, -68 - 19 - 0.6);
    group.add(q34);

    const beiwoZ = Qiang12(34);
    beiwoZ.rotateY(Math.PI / 2);
    beiwoZ.position.set(36, 0, -68 - 19);
    group.add(beiwoZ);

    const beiwoN = Qiang12(53.5);
    const beiwoMenX = Men(1.2);
    beiwoMenX.geometry.translate(36 - 8.45 - 1 - 8, 0, 0);
    const beiwoMenD = Men(1.2);
    beiwoMenD.geometry.translate(36 - 8.45 + 1, 0, 0);
    const beiwoZm = CSG.subtract(CSG.subtract(beiwoN, beiwoMenX), beiwoMenD);
    beiwoZm.position.set(8.45, 0, -68 - 19);
    group.add(beiwoZm);

    group.position.y = 2;
    return group;
}
const KeiWei = () => {
    const group = new THREE.Group();

    const waiqiang = Qiang24(53);
    const chuanghu = Chuanghu(6.05);
    chuanghu.geometry.translate(9.5, 0, 0);
    const waiqiangC = CSG.subtract(waiqiang, chuanghu);
    waiqiangC.rotateY(Math.PI / 2);
    waiqiangC.position.set(8.45, 0, -68);
    group.add(waiqiangC);

    const neiqiang = Qiang12(19);
    const men = Men(12);
    men.geometry.translate(19 - 1.5 - 8, 0, 0);
    const neiqiangM = CSG.subtract(neiqiang, men);
    neiqiangM.rotateY(Math.PI / 2);
    neiqiangM.position.set(25, 0, -68);
    group.add(neiqiangM);

    const xishouchiqiang = Qiang12(6);
    xishouchiqiang.rotateY(Math.PI / 2);
    xishouchiqiang.position.set(36 + 0.6, 0, -68);
    group.add(xishouchiqiang);

    group.position.y = 2;
    return group;
}
const ZhuWo = () => {
    const group = new THREE.Group();

    const waiqiang = Qiang24(68);
    waiqiang.rotateY(Math.PI / 2);
    waiqiang.position.set(0, 0, 0);
    group.add(waiqiang);

    const nanqiang = Qiang24(36);
    const chuanghu = Chuanghu(20);
    chuanghu.geometry.translate(6 + 2, 0, 0);
    const nanqiangC = CSG.subtract(nanqiang, chuanghu);
    group.add(nanqiangC);

    const neiqiang = Qiang24(68);
    const men = Men(2.4);
    men.geometry.translate(68 - 5.6 - 8, 0, 0);

    const neiqiangM = CSG.subtract(neiqiang, men);
    neiqiangM.rotateY(Math.PI / 2);
    neiqiangM.position.set(36, 0, 0);

    group.add(neiqiangM);

    const zhuweiW = Qiang24(36);
    const zhuweiC = Chuanghu(6.05);
    zhuweiC.geometry.translate(1.2, 0, 0);
    const zhuweiWc = CSG.subtract(zhuweiW, zhuweiC);
    zhuweiWc.position.set(0, 0, -68);

    group.add(zhuweiWc);
    group.position.y = 2;
    return group;
}
const ZhuWei = () => {
    const group = new THREE.Group();

    const nanqiang = Qiang12(22);
    nanqiang.position.set(0, 0, -68 + 17);
    group.add(nanqiang);

    const dongqiang = Qiang12(17);
    const men = Men(1.2);
    men.geometry.translate(1.7, 0, 0);
    const dongqiangM = CSG.subtract(dongqiang, men);
    dongqiangM.rotateY(Math.PI / 2);
    dongqiangM.position.set(22, 0, -68 + 17);
    group.add(dongqiangM);



    group.position.y = 2;
    return group;
}
const KeTing = () => {
    const group = new THREE.Group();

    const nanqiang = Qiang24(70);
    const mendong1 = MenDong(22);
    mendong1.geometry.translate(10, 0, 0);
    const mendong2 = MenDong(20);
    mendong2.geometry.translate(42, 0, 0);
    const nanqiangD = CSG.subtract(CSG.subtract(nanqiang, mendong1), mendong2);
    nanqiangD.position.set(36, 0, -8);

    group.add(nanqiangD);

    const zhongqiang = Qiang24(44.5);
    const mendong3 = MenDong(44.5 - 14 - 1.2);
    mendong3.geometry.translate(14, 0, 0);
    const zhongqiangD = CSG.subtract(zhongqiang, mendong3);
    zhongqiangD.rotateY(Math.PI / 2);
    zhongqiangD.position.set(76, 0, -8);
    group.add(zhongqiangD);

    const dongqiang = Qiang24(36);
    dongqiang.rotateY(Math.PI / 2);
    dongqiang.position.set(106, 0, -8);
    group.add(dongqiang);

    const beiqiang = Qiang24(11.55);
    beiqiang.position.set(8.45 + 53.5 + 31 - 13.5 + 15, 0, -44);
    group.add(beiqiang);

    group.position.y = 2;
    return group;
}
const MenTing = () => {
    const group = new THREE.Group();

    const xiqiang = Qiang24(23);
    xiqiang.rotateY(Math.PI / 2);
    xiqiang.position.set(8.45 + 53.5 + 31 - 13.5, 0, -71);
    group.add(xiqiang);

    const beiqiang = Qiang24(15);
    const men = DaMen();
    men.geometry.translate(3, 0, 0);
    const beiqiangM = CSG.subtract(beiqiang, men);
    beiqiangM.position.set(8.45 + 53.5 + 31 - 13.5, 0, -71);
    group.add(beiqiangM);

    const dongqiang = Qiang24(27);
    dongqiang.rotateY(Math.PI / 2);
    dongqiang.position.set(8.45 + 53.5 + 31 - 13.5 + 15, 0, -44);
    group.add(dongqiang);

    const nanqiang = Qiang24(30 - 11.55);
    nanqiang.position.set(76, 0, -52.5);
    group.add(nanqiang);

    group.position.y = 2;
    return group;
}

const YangTai = () => {
    const group = new THREE.Group();

    const xiqiang = Qiang24(10);
    xiqiang.rotateY(Math.PI / 2);
    xiqiang.position.set(36, 0, 10);
    group.add(xiqiang);

    const nanqiang = Qiang24(70);
    const luodichuang = Luodichuang();
    luodichuang.geometry.translate(7, 0, 0);
    const nanqiangL = CSG.subtract(nanqiang, luodichuang);
    nanqiangL.position.set(36, 0, 10);
    group.add(nanqiangL);

    const dongqiang = Qiang24(18);
    dongqiang.rotateY(Math.PI / 2);
    dongqiang.position.set(106, 0, 10);
    group.add(dongqiang);

    const zhuzi = Qiang(7, 29, 10);
    zhuzi.position.set(99, 0, 10);
    group.add(zhuzi);

    group.position.y = 2;
    return group;
}
const ChuFang = () => {
    const group = new THREE.Group();

    const beiqiang = Qiang24(31);
    const chuanghu = Chuanghu(14);
    chuanghu.geometry.translate(11, 0, 0);
    const beiqiangC = CSG.subtract(beiqiang, chuanghu);
    beiqiangC.position.set(8.45 + 53.5, 0, -68 - 53 + 7);
    group.add(beiqiangC);

    const dongqiang = Qiang24(20);
    dongqiang.rotateY(Math.PI / 2);
    dongqiang.position.set(8.45 + 53.5 + 31, 0, -68 - 53 + 7 + 20);
    group.add(dongqiang);

    const nanqiang = Qiang24(13.5);
    nanqiang.position.set(8.45 + 53.5 + 31 - 13.5, 0, -68 - 53 + 7 + 20);
    group.add(nanqiang);


    group.position.y = 2;
    return group;
}
export const createQiang = () => {
    const group = new THREE.Group();
    group.add(ZhuWo());
    group.add(ZhuWei());
    group.add(BeiWo());
    group.add(KeiWei());
    group.add(ChuFang());
    group.add(MenTing());
    group.add(KeTing());
    group.add(YangTai());
    group.position.z = -1.2;
    return group;
}