/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.29.148'],
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

