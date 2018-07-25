export const LIKE_HOUSE = 'LIKE_HOUSE'
export const DISLIKE_HOUSE = 'DISLIKE_HOUSE'
export const THINK_HOUSE = 'THINK_HOUSE'

export function likeHOUSE(ownerID) {
  return {
    type: LIKE_HOUSE,
    payload: (
      ownerID
    )
  }
}

export function dislikeHOUSE(ownerID) {
  return {
    type: DISLIKE_HOUSE,
    payload: (
      ownerID
    )
  }
}

export function thinkHOUSE(ownerID) {
    return {
      type: THINK_HOUSE,
      payload: (
        ownerID
      )
    }
  }