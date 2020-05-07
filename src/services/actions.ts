export const SERVICES_SET_USER = 'SERVICES_SET_USER'
export const SERVICES_EXEC_USER = 'SERVICES_EXEC_USER'

export const servicesActions = {
  setUser: (payload: { phone: string; password: string }) => ({
    type: SERVICES_SET_USER,
    payload,
  }),
  execUser: () => ({
    type: SERVICES_EXEC_USER,
  }),
}
