export const LIKE_TENANT = 'LIKE_TENANT'
export const DISLIKE_TENANT = 'DISLIKE_TENANT'
export const LIKE_HOUSE = 'LIKE_HOUSE'

export function likeTENANT(tenantID, ownerID) {
  return {
    type: LIKE_TENANT,
    payload: [
      tenantID, ownerID
    ]
  }
}

export function dislikeTENANT(tenantID, ownerID) {
  return {
    type: DISLIKE_TENANT,
    payload: [
      tenantID, ownerID
    ]
  }
}

export function likeHOUSE(tenantID, ownerID) {
  return {
    type: LIKE_HOUSE,
    payload: [
      tenantID, ownerID
    ]
  }
}