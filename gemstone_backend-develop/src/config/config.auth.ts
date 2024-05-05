const authConfig = {
  accessToken: {
    secret: 'da43bd36805ba2b253570a63077233cf',
    ttl: 1800,
  },
  refreshToken: {
    ttl: 3600 * 12,
    ttlLong: 86400 * 365 * 10,
    remainTimeToRenew: 3600 * 2,
  },
};

export default authConfig;
