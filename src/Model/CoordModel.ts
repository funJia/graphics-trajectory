/*
 * @Author: jianan
 * @Description: 坐标模型
 * @Date: 2019-09-03 19:17:04
 * @Last Modified by: jianan
 * @Last Modified time: 2019-09-03 19:17:32
 */
/**
 * 坐标模型
 */
export default class CoordModel {
    // 纬度
    lat: number
    // 经度
    lng: number

    constructor(lat: number, lng: number) {
        this.lat = lat
        this.lng = lng
    }
}
