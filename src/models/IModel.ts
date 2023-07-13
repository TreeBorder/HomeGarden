export interface IModel {
    vertexs: {
        index: number,
        vertex: [number, number, number]
    }[],
    points: {
        index: number,
        vertexIndex: number,
        normalIndex: number,
        uvIndex: number
    }[],
    faces: [number, number, number][],
    materisls: {
        color?: number,
        transparent?: boolean,
        opacity?: number,
        side?: THREE.Side,
        texture?: {
            url: string,
            repeatX: number,
            repeatY: number
        }
    }[]
    drawGroups: {
        faceIndex: number,
        pointCount?: number,
        materialIndex: number
    }[]
}