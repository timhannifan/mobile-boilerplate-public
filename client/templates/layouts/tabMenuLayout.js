Template.tabMenuLayout.rendered = function () {
  Session.set('currentTab', 'trending');
};

Template.tabMenuLayout.events({
  'click [data-action=share-product]': function (event, template) {
    IonActionSheet.show({
      titleText: 'Share Product',
      buttons: [
        { text: '<i class="icon ion-social-twitter"></i> Tweet' },
        { text: '<i class="icon ion-ios-email"></i> Email' },
      ],
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        if (index === 0) {
          console.log('Tweet!');
        }
        if (index === 1) {
          console.log('Email!');
        }
        return true;
      }
    });
  }
});
