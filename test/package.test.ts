import pkg from '../src/package'

describe('package', () => {
  it('should have package name', () => {
    expect(pkg.name).toBe('amazon-advertising-api-sdk')
  })

  it('should have package version', () => {
    expect(pkg.version).toMatch(/^\d+\.\d+\.\d+$/)
  })
})
