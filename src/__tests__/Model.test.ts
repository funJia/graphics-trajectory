import Model from '../index'
const MarkerModel = Model.MarkerModel
test('MarkerModel', () => {
    const mm = new MarkerModel()
    mm.deviceName = '大门右侧'
    expect(mm.deviceName).toBe('大门右侧')
})
