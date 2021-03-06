import {NativeModules} from 'react-native';

var RNLocalNotifications = {
  createNotification: function(id, title, text, datetime, sound, hiddendata='') {
        NativeModules.RNLocalNotifications.createNotification(id,title, text, datetime, sound, hiddendata);
  },
  deleteNotification: function(id) {
        NativeModules.RNLocalNotifications.deleteNotification(id);
  },
  updateNotification: function(id, title, text, datetime, sound, hiddendata='') {
        NativeModules.RNLocalNotifications.updateNotification(id,title, text, datetime, sound, hiddendata);
  },
  setAndroidIcons: function(largeIconName, largeIconType, smallIconName, smallIconType) {
        NativeModules.RNLocalNotifications.setAndroidIcons(largeIconName, largeIconType, smallIconName, smallIconType);
  },
};

export default RNLocalNotifications;
