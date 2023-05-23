function replySlackMessage(data: any) {
  if (data.event.subtype) {
    return;
  }
  if (data.event.bot_id) {
    return;
  }

  const token: string = data.token;
  const channel: string = data.event.channel;
  const text: string = data.event.text;

  // スレッドが存在しない場合はtimestamp(ts)を利用してsendSlackで新規作成
  const threadTs: string = data.event.thread_ts || data.event.ts;

  sendSlack(token, channel, threadTs, text);

  console.log(JSON.stringify(data, null, 2));
}

// SlackBotsを通してメッセージを指定されたスレッドに送信する
// スレッドが無ければ自動的に新しく作成する(thread_ts = params.event.thread_ts || params.event.ts)
type SlackMessage = {
  channel: string;
  thread_ts: string;
  text: string;
};
type Headers = {
  Authorization: string;
};
type ApiParams = {
  method: string;
  headers: Headers;
  payload: SlackMessage;
};

function sendSlack(
  token: string,
  channel: string,
  threadTs: string
  message: string,
) {
  const url: string = slackApiBaseURL + "chat.postMessage";
  const payload: SlackMessage = {
    channel: channel,
    thread_ts: threadTs,
    text: message,
  };
  const apiHeaders: Headers = {
    Authorization: "Bearer " + slackToken;
  };
  const params: ApiParams = {
    method: "POST",
    headers: apiHeaders,
    payload: payload,
  };

  log(JSON.stringify(params, null, 2));
  const response = UrlFetchApp.fetch(url, params);
  return response.ok;
}
