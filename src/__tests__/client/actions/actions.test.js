import { setCurrentUser } from '../../../client/actions/actions'

describe('actions', () => {

  describe('setCurrentUser', () => {
    it('should have a type of SET_CURRENT_USER', () => {
      expect(setCurrentUser().type).toEqual('SET_CURRENT_USER')
    })

    it('should pass on the user we pass in', () => {
      let currentUser = 'Peter'
      expect(setCurrentUser(currentUser).currentUser).toEqual(currentUser)
    })
  })
})
