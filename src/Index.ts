function doPost(e: any) {
  // Slack からの API サーバの存在チェックへ回答する (初回のみ)
  log(e.postData.getDataAsString());
  const params: any = JSON.parse(e.postData.getDataAsString());
  if (params.type === "url_verification") {
    return ContentService.createTextOutput(params.challenge);
  }

  // API の本来の処理は以下
  try {
    replySlackMessage(params);
  } catch (err) {
    log(JSON.stringify(err, null, 2));
    console.log(err);
  }
}

// DEBUG ログを Spreadsheet に出力する関数
const ss = SpreadsheetApp.openById(spreadsheetId);
const sheet = ss.getSheetByName(ssSheetName);

function log(message: string) {
  const lastRow = sheet.getLastRow();
  sheet.getRange(lastRow + 1, 1).setValue(message);
}
