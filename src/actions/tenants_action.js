export const LIKE_HOUSE = 'LIKE_HOUSE'
export const DISLIKE_HOUSE = 'DISLIKE_HOUSE'
export const THINK_HOUSE = 'THINK_HOUSE'

export function likeHOUSE(tenantID, ownerID) {
  return {
    type: LIKE_HOUSE,
    payload: [
      tenantID, ownerID
    ]
  }
}

export function dislikeHOUSE(tenantID, ownerID) {
  return {
    type: DISLIKE_HOUSE,
    payload: [
      tenantID, ownerID
    ]
  }
}

export function thinkHOUSE(tenantID, ownerID) {
  return {
    type: THINK_HOUSE,
    payload: [
      tenantID, ownerID
    ]
  }
}