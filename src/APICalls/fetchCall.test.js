import { fetchCall } from './fetchCall.js'

describe('fetchCall', () => {
  it('throws an error if status code is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500,
      statusText: 'Something went wrong'
    }))

    await expect(fetchCall()).rejects.toEqual(Error('Something went wrong'))
  })

  it('throws an error if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))

    await expect(fetchCall()).rejects.toEqual(Error('Something went wrong'))
  })

  it('should return some data if the reponse is ok', async () => {
    const mockData = [{title: 'Cake Boss'}]

    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      })
    )

    const data = await fetchCall()

    expect(data).toEqual(mockData)
  })
})