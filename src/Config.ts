const properties = PropertiesService.getScriptProperties();

// Slack Bot
const slackApiBaseURL: string = "https://slack.com/api/";
const slackToken: string = properties.getProperty("SLACK_BOT_TOKEN");

// Spreadsheet (DEBUG ログ用)
const spreadsheetId: string = properties.getProperty("SPREADSHEET_ID");
const ssSheetName: string = properties.getProperty("SS_SHEET_NAME");
