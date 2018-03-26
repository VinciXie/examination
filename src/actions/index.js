export const TOGGLE_LEFT_SIDEBAR = 'TOGGLE_LEFT_SIDEBAR'
export const TOGGLE_RIGHT_SIDEBAR = 'TOGGLE_RIGHT_SIDEBAR'



export const toggleLeftSidebar = (active) => ({
  type: TOGGLE_LEFT_SIDEBAR,
  active
})

export const toggleRightSidebar = (active) => ({
  type: TOGGLE_RIGHT_SIDEBAR,
  active
})
