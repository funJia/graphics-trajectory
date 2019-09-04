import { MarkerModel } from '../index'
test('MarkerModel', () => {
    const mm = new MarkerModel()
    mm.deviceName = '大门右侧'
    expect(mm.deviceName).toBe('大门右侧')
})
