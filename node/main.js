/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const webPush = require('web-push');

const pushSubscription2 = {"endpoint":"https://android.googleapis.com/gcm/send/dNTOnt5B-aY:APA91bFLRqX_XaKFG7p-3KYkRn_HfWuzzg69lSW9wvG_QMzvJAL8RqpEXhVS8avA2AQVt62XvopZRN3vNUiUEp4oXT4Pt6ckWmHagHPV3boAnJE698uXKxVeXAXZPIDJdRqZ7pvbwKwT","expirationTime":null,"keys":{"p256dh":"BK4u--2jzuw6YrOxzbY-dVpMlPw9pYT4VpsJXSFRchMA8AeNCcLOVqQenB2SLW-XjUklbekB5XoiVBSPbKxxSzA","auth":"J1mBdVBFgtKNbfo6T1kzvg"}};
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/cR6SGXaWYlY:APA91bE3fZ4ppabY5M2Bf3H63RSlD0OnZ3R-os4VTZk1Qp6UzMWOANSw0FbT_uSl-wGi1d18aM_6j41tCulT6NrfurUtRYUKdfUVkEn3uwGFZOldVxmdDoIBUyz__Tu7Mk69SIv9j6sM","expirationTime":null,"keys":{"p256dh":"BA67dnjjMFlS_CN8sIJdGiQkqx952p2pW8DZFzxprNrHn0oFIFV6s-2R3qhEYruPyV8hDd8BBp2rzcm263-u44Y","auth":"W1oWRczjDMZAZWZYIzNxaw"}};

const vapidPublicKey = 'BGZrWhUdk00dbHVqLHoCbhL9snct3HpgoSHk-jh4soVOH3xbGkf-ctJcDL9pqPKGvpmifqp8QvGKxdcwiHHOihU';
const vapidPrivateKey = 'ahPgoW2m5qFsSumyjsqw3NOsY-iHTqCfrXo2ZqNpQxY';

const payload = 'Here is a payload 10!';

const options = {
  //gcmAPIKey: 'AAAA5Q9Ud9I:APA91bGOJdoQHkwLQEV5mTWcGbeeGVAmM34qh7N68AGbZ9APE5LRSqe1_gadOEEFrO2cTinE6VhASot5LXCzCFTNiLOhqtZbWMcYYDYFwoTnbizOZJKapO9ysiTXcZPpARTr_aiAdOMh',
  TTL: 60,

  vapidDetails: {
    subject: 'mailto: oleksandr.lytvyn@gmail.com',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  }

};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
