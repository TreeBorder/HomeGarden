import * as THREE from 'three'
import { createQiang } from './Qiang';
import { createDingAndZhuan } from './Dinghezhuan';
import { createChuanghu } from './Chuanghu';
import { createDengguang } from './Dengguang';
import { createChuanglian } from './Chuanglian';

export const createRoom = () => {
    const room = new THREE.Group();
    room.add(createQiang());
    room.add(createDingAndZhuan());
    room.add(createChuanghu());
    room.add(createChuanglian());
    room.add(createDengguang());
    return room;
}