var Botkit = require('botkit')
var Witbot = require('witbot')

var slackToken = process.env.SLACK_TOKEN
var witToken = process.env.WIT_TOKEN

var controller = Botkit.slackbot({
    debug: true
  })
  
  //GET API
  controller.spawn({
    token: 'xoxb-388918796598-389306507652-01lI7M7Zt0JvzQKFvcmh5UiQ',
  }).startRTM()