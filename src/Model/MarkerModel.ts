/*
 * @Author: jianan
 * @Description: 坐标标记模型
 * @Date: 2019-09-03 19:16:19
 * @Last Modified by: jianan
 * @Last Modified time: 2019-09-03 19:26:47
 */
import CoordModel from './CoordModel'

/**
 * 坐标标记模型
 */
export default class MarkerModel {
    // 设备id
    deviceId?: number
    // 抓拍标识Id
    faceId: number
    /**
     * 坐标
     */
    coord: CoordModel
    /**
     * 地图标记图标
     */
    markerSrc: string
    /**
     * 抓拍人脸图片
     */
    captureFaceSrc: string
    /**
     * 摄像级地址
     */
    deviceName: string
    /**
     * 抓拍次数
     */
    captureNum?: number
    // 抓拍时间
    time?: string
    // 相同坐标信息集合
    conformityList?: MarkerModel[]
    // 最大抓拍次数
    isMax?: boolean

    constructor() {
        this.faceId = 0
        this.coord = new CoordModel(0, 0)
        this.markerSrc = ''
        this.captureFaceSrc = ''
        this.deviceName = ''
        this.captureNum = 0
        this.time = ''
    }
}
