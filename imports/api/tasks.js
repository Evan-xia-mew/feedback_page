import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Infos = new Mongo.Collection('infos');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('infos', function infosPublication() {
    return Infos.find();
  });
}

var isNotEmpty = function(value, inputName) {
  if (value && value != '') {
    return true;
  }
  alert('Please fill in ' + inputName + ' field in this form');
  return false;
}

var isEmailFormat = function(value) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(value).toLowerCase())) {
      return true;
    }
    alert('Email is not right format');
    return false;
}

var isPhoneFormat = function(value) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (re.test(String(value))) {
    return true;
  }
  alert('Phone is not right format, must be 10-digital number.');
  return false;
}

var isZipFormat = function(value) {
  var re = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  if (re.test(String(value))) {
    return true;
  }
  alert('Zip is not right format, must be 10-digital number.');
  return false;
}


Meteor.methods({
  'infos.insert'(fn,ln,email,tel,add,city,state,zip,country,comments) {
    check(comments, String);

    if (!(isNotEmpty(fn,'firstname') && isNotEmpty(ln,'lastname') && isNotEmpty(email,'email') && isNotEmpty(tel,'phone') && isNotEmpty(add,'address') && isNotEmpty(city,'city') && isNotEmpty(state,'state') && isNotEmpty(zip,'zip') && isNotEmpty(country,'country') && isNotEmpty(comments,'comments') && isEmailFormat(email) && isPhoneFormat(tel) && isZipFormat(zip))) {
      throw new Meteor.Error('format-issue');
    }
    // Make sure the user is logged in before inserting a task
     if (! this.userId) {
       throw new Meteor.Error('not-authorized');
     }

    Infos.insert({
      firstname: fn,
      lastname: ln,
      email: email,
      tel: tel,
      address: add,
      city: city,
      state: state,
      zip: zip,
      country: country,
      comments: comments,
      createdAt: new Date(),
    });
  },

});
