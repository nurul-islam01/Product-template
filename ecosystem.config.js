module.exports = {
  /**
   * @author Nurul Islam
   * @description PM2 Application Configuration
   */
  apps: [
    {
      name: 'nurulislam.dev',
      script: 'server/deploy.js',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      combine_logs: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
