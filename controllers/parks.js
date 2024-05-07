const express = require("express");
const { Park } = require("../models");

const Index = async (req, res, next) => {
  try {
    res.json(await Park.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
};
