export const LIKE_TENANT = 'LIKE_TENANT'
export const DISLIKE_TENANT = 'DISLIKE_TENANT'
export const LIKE_HOUSE = 'LIKE_HOUSE'
export const ADD_OWNER = 'ADD_OWNER'


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

export function addOwner(user) {
  return {
    type: ADD_OWNER,
    payload: [
      user.name,
      user.location,
      user.pricePerMonth,
      user.size,
      user.bathromms,
      user.bedrooms,
      user.url,
      user.likeByTenant,
      user.like,
      user.dislike,
      user.lastTenantIDSeen
    ]
  }
} 