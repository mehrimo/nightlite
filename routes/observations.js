'use strict';

const express = require('express');
const router = express.Router();
const ev = require('express-validation');
const validations = require('../validations/comments');
const knex = require('../knex');
const {decamelizeKeys, camelizeKeys} = require('humps');

router.get('/observations', (req, res, next) => {

});

router.get('/observations/:id', (req, res, next) => {

});

router.post('/observations', ev(validations.post), (req, res, next) => {

});

router.patch('/observations', ev(validations.patch), (req, res, next) => {

});

router.delete('/observations', ev(validations.delete), (req, res, next) => {

});

module.exports = router;