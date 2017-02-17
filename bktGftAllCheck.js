(function($){
  'use strict';
  $.fn.bktGftAllCheck = $.fn.bktGftAllCheck || function() {
    var SWITCH_EVENT_NAMES = Object.freeze({
      ON  : 'bktGftCheckOn',
      OFF : 'bktGftCheckOff',
      ALL : {
        ON  : 'bktGftCheckAllOn',
        OFF : 'bktGftCheckAllOff'
      }
    });
    var fps = 10;
    var checkName = $(this).attr('name');
    if(!checkName) return;
    var items = $('input[name='+checkName+']').not(this);
    var currentStatus;

    var checked = function(state) {
      return function() {
        $(this).prop('checked', state);
      };
    };

    var allChecked = function(state) {
      items.prop('checked', state);
    };

    var eventTrigger = function(target, eventName) {
      $(target).trigger(eventName);
      currentStatus = eventName;
    };

    var eventTriggerForCheckbox = function() {
      $(this).on('click', function() {
        if($(this).prop('checked')) {
          eventTrigger(this, SWITCH_EVENT_NAMES.ON);
        }else{
          eventTrigger(this, SWITCH_EVENT_NAMES.OFF);
        }
      });
    };

    var eventTriggerForAllCheckbox = function() {
      var _this = this;
      setInterval(function() {
        if(currentStatus !== SWITCH_EVENT_NAMES.ALL.ON &&
          items.filter(':checked').length >= items.length) {
          eventTrigger(_this, SWITCH_EVENT_NAMES.ALL.ON);
        }
        if(currentStatus !== SWITCH_EVENT_NAMES.ALL.OFF &&
          items.not(':checked').length > 0){
          checked(false).call(_this);
        }
        if(currentStatus !== SWITCH_EVENT_NAMES.ALL.OFF &&
          items.filter(':checked').length < 1){
          eventTrigger(_this, SWITCH_EVENT_NAMES.ALL.OFF);
        }
      }, 1000 / fps);
    };

    var addEvent = function() {
      var _this = this;
      $(_this).on('click', function() {
        var _state = $(_this).prop('checked');
        allChecked(_state);
      });
      $(_this).on(SWITCH_EVENT_NAMES.ALL.ON, checked(true));
      $(_this).on(SWITCH_EVENT_NAMES.OFF, checked(false));
      items.map(eventTriggerForCheckbox);
    };

    eventTriggerForAllCheckbox.call(this);
    addEvent.call(this);
  };
})(jQuery);