import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cm.kapexpert.fastgaz',
  appName: 'FastGaz',
  webDir: 'www',
  "server": {
		"url": "https://kapexpert.cloud:30004/",
		"cleartext": true
	},
};

export default config;
