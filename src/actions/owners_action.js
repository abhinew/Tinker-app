export const LIKE_TENANT = 'LIKE_TENANT'
export const DISLIKE_TENANT = 'DISLIKE_TENANT'
export const LIKE_HOUSE = 'LIKE_HOUSE'

export function likeTenant(tenantID) {
  return {
    type: LIKE_TENANT,
    payload: (
      tenantID
    )
  }
}

export function dislikeTenant(tenantID) {
  return {
    type: DISLIKE_TENANT,
    payload: (
      tenantID
    )
  }
}

export function likeHouse(tenantID) {
  return {
    type: LIKE_HOUSE,
    payload: (
      tenantID
    )
  }
}