export const SERVICES_UPDATE_USER = 'SERVICES_UPDATE_USER'

export const servicesActions = {
  updateUser: (payload: { phone: string; password: string } | null) => ({
    type: SERVICES_UPDATE_USER,
    payload,
  }),
}
