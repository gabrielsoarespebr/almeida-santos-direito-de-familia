export const environment = {
  production: true,
  googleSheetsScriptUrl: (window as any)['env']?.NG_APP_GOOGLE_SHEETS_SCRIPT_URL || ''
};
