/*
 * == BSD2 LICENSE ==
 * Copyright (c) 2014, Tidepool Project
 * 
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the associated License, which is identical to the BSD 2-Clause
 * License as published by the Open Source Initiative at opensource.org.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the License for more details.
 * 
 * You should have received a copy of the License along with this program; if
 * not, you can obtain one from Tidepool Project at tidepool.org.
 * == BSD2 LICENSE ==
 */

 /* global describe, before, beforeEach, it, after */

'use strict';

var _ = require('lodash');
var expect = require('salinity').expect;

var helper = require('./schemaTestHelper.js');

var goodObject = {
  type: 'food',
  time: '2014-01-01T01:00:00.000Z',
  timezoneOffset: 120,
  conversionOffset: 0,
  deviceId: 'test',
  uploadId: 'test',
  carbs: 73,
  _groupId: 'g'
};

describe('schema/food.js', function(){
  describe('carbs', function(){
    helper.rejectIfAbsent(goodObject, 'carbs');
    helper.expectNumericalField(goodObject, 'carbs');

  });

  helper.testCommonFields(goodObject);
});