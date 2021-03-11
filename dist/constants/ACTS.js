"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LATEST_SEASON_NAME = exports.LATEST_SEASON_ID = exports.ACTS_NAME_ID_MAP = exports.ACTS_ID_NAME_MAP = void 0;
var ACTS_ID_NAME_MAP = {
  '3f61c772-4560-cd3f-5d3f-a7ab5abda6b3': 'act1',
  '0530b9c4-4980-f2ee-df5d-09864cd00542': 'act2',
  '46ea6166-4573-1128-9cea-60a15640059b': 'act3',
  '97b6e739-44cc-ffa7-49ad-398ba502ceb0': 'e2act1',
  'ab57ef51-4e59-da91-cc8d-51a5a2b9b8ff': 'e2act2'
};
exports.ACTS_ID_NAME_MAP = ACTS_ID_NAME_MAP;
var ACTS_NAME_ID_MAP = {
  act1: '3f61c772-4560-cd3f-5d3f-a7ab5abda6b3',
  act2: '0530b9c4-4980-f2ee-df5d-09864cd00542',
  act3: '46ea6166-4573-1128-9cea-60a15640059b',
  e2act1: '97b6e739-44cc-ffa7-49ad-398ba502ceb0',
  e2act2: 'ab57ef51-4e59-da91-cc8d-51a5a2b9b8ff'
};
exports.ACTS_NAME_ID_MAP = ACTS_NAME_ID_MAP;
var LATEST_SEASON_ID = ACTS_NAME_ID_MAP.e2act2;
exports.LATEST_SEASON_ID = LATEST_SEASON_ID;
var LATEST_SEASON_NAME = ACTS_ID_NAME_MAP[LATEST_SEASON_ID];
exports.LATEST_SEASON_NAME = LATEST_SEASON_NAME;