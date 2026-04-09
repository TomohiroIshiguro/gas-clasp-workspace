const properties = PropertiesService.getScriptProperties();

/**
 * スクリプトプロパティを取得する。値が存在しない場合はエラーをスローする。
 */
function getRequiredProperty(key: string): string {
  const value = properties.getProperty(key);
  if (value === null) {
    throw new Error(`スクリプトプロパティ "${key}" が設定されていません。`);
  }
  return value;
}

// Slack Bot
const slackApiBaseURL: string = "https://slack.com/api/";
const slackToken: string = getRequiredProperty("SLACK_BOT_TOKEN");

// Spreadsheet (DEBUG ログ用)
const spreadsheetId: string = getRequiredProperty("SPREADSHEET_ID");
const ssSheetName: string = getRequiredProperty("SS_SHEET_NAME");
