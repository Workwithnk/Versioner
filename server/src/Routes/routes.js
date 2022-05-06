const express = require("express");
const routes = express.Router();
const cheerio = require("cheerio");
const axios = require("axios");
// const sgMail = require("@sendgrid/mail");

//react js
routes.get("/react", async (req, res) => {
  let responce = await axios.get(`${process.env.URL_REACT}`);
  let result = await responce.data;
  const $ = cheerio.load(result);
  let versionNum = [];
  $("tr", result).each(function () {
    let id = $(this).find("tr > td:first").text();
    let version = $(this).find("tr > td:first").next().text();
    let date = $(this).find("tr > td:first").next().next().text();
    let details = $(this).find("tr > td:last").text();
    versionNum.push({ id, version, date, details });
  });
  versionNum.splice(0, 3);
  res.send(versionNum);
});

// python
routes.get("/python", async (req, res) => {
  let responce = await axios.get(`${process.env.URL_PYTHON}`);
  let result = await responce.data;

  const $ = cheerio.load(result);
  let versionNum = [];
  $("tr", result).each(function () {
    let id = $(this).find("tr > td:first").text().replace(/\n/g, "").trim();
    let version = $(this)
      .find("tr > td:first")
      .text()
      .replace(/\n/g, "")
      .trim();
    let date = $(this)
      .find("tr > td:first")
      .next()
      .text()
      .replace(/\n/g, "")
      .trim();
    let details = $(this).find("tr > td:last").text().replace(/\n/g, "").trim();
    versionNum.push({ id, version, date, details });
  });
  versionNum.splice(0, 1);
  res.send(versionNum);
});

//c
routes.get("/c", async (req, res) => {
  let responce = await axios.get(`${process.env.URL_C}`);
  let result = await responce.data;
  const $ = cheerio.load(result);
  let versionNum = [];
  $("tr", result).each(function () {
    let language = $(this).find("tr > td:first").text();
    let year = $(this).find("tr > td:first").next().text();
    let developedby = $(this).find("tr > td:first").next().next().text();
    versionNum.push({ language, year, developedby });
  });
  versionNum.splice(0, 3);
  res.send(versionNum);
});

//typescript
routes.get("/typescript", async (req, res) => {
  let responce = await axios.get(`${process.env.URL_TYPESCRIPT}`);
  let result = await responce.data;
  const $ = cheerio.load(result);
  let versionNum = [];
  $("tr", result).each(function () {
    let id = $(this).find("tr > td:first").text();
    let version = $(this).find("tr > td:first").next().text();
    let date = $(this).find("tr > td:first").next().next().text();
    let details = $(this).find("tr > td:last").text();
    versionNum.push({ id, version, date, details });
  });
  versionNum.splice(0, 3);
  res.send(versionNum);
});

//c++

routes.get("/Cplusplus", async (req, res) => {
  let responce = await axios.get(`${process.env.URL_Cplusplus}`);
  let result = await responce.data;
  const $ = cheerio.load(result);
  let dataArr = [];
  $("tr", result).each(function () {
    let id = $(this).find("tr > td:first").text();
    let versionName = $(this).find("tr > td:first").text();
    let date = $(this).find("tr > td:first").next().text();
    let desription = $(this).find("tr > td:first").next().next().text();
    dataArr.push({ id, versionName, date, desription });
  });
  dataArr.splice(0, 1);
  res.send(dataArr);
});

//javascript
routes.get("/javascript", async (req, res) => {
  let responce = await axios.get(`${process.env.URL_JAVASCRIPT}`);
  let result = await responce.data;
  const $ = cheerio.load(result);
  let dataArr = [];
  $("tr", result).each(function () {
    let id = $(this).find("tr > td:first").text();
    let versionName = $(this).find("tr > td:first").next().next().text();
    let date = $(this).find("tr > td:first").next().text();
    let desription = $(this).find("tr > td:first").next().next().next().text();
    dataArr.push({ id, versionName, date, desription });
  });
  dataArr.splice(0, 3);
  res.send(dataArr);
});
//php
routes.get("/php", async (req, res) => {
  let responce = await axios.get(`${process.env.URL_PHP}`);
  let result = await responce.data;
  const $ = cheerio.load(result);
  let dataArr = [];
  $("tr", result).each(function () {
    let id = $(this).find("tr > td:first").text();
    let versionName = $(this).find("tr > td:first").text();
    let date = $(this).find("tr > td:first").next().text();
    let desription = $(this).find("tr > td:first").next().next().next().text();
    dataArr.push({ id, versionName, date, desription });
  });
  dataArr.splice(0, 23);
  dataArr.splice(23, 50);

  res.send(dataArr);
});

//html

routes.get("/html", async (req, res) => {
  let responce = await axios.get(`${process.env.URL_HTML}`);
  let result = await responce.data;
  const $ = cheerio.load(result);
  let dataArr = [];
  $(".heading", result).each(function () {
    let id = $(this).text();
    let versionName = $(this).text();
    // let date = $(this).find("tr > td:first").next().text();
    let desription = $(this).next().text();
    dataArr.push({ id, versionName, desription });
  });

  res.send(dataArr);
});

// Java
routes.get("/java", async (req, res) => {
  let responce = await axios.get(`${process.env.URL_JAVA}`);
  let result = await responce.data;
  const $ = cheerio.load(result);
  let dataArr = [];
  $("tr", result).each(function () {
    let id = $(this).find("tr > td:first").text();
    let versionName = $(this).find("tr > td:first").text();
    let date = $(this).find("tr > td:first").next().text();
    let desription = $(this).find("tr > td:first").next().next().text();
    dataArr.push({ id, versionName, date, desription });
  });
  dataArr.splice(0, 1);

  res.send(dataArr);
});

//R
routes.get("/r", async (req, res) => {
  let responce = await axios.get(`${process.env.URL_R}`);
  let result = await responce.data;
  const $ = cheerio.load(result);
  let dataArr = [];
  $("tr", result).each(function () {
    let id = $(this).find("tr > th").text();
    let versionName = $(this).find("tr > th").text();
    let date = $(this).find("tr > td:first").text();
    let desription = $(this).find("tr > td:first").next().text();
    dataArr.push({ id, versionName, date, desription });
  });
  dataArr.splice(0, 22);
  dataArr.splice(19, 50);
  res.send(dataArr);
});

//go
routes.get("/go", async (req, res) => {
  let responce = await axios.get(`${process.env.URL_GO}`);
  let result = await responce.data;
  const $ = cheerio.load(result);
  let dataArr = [];
  $("h2", result).each(function () {
    let h2 = $(this).text();
    dataArr.push({ h2 });
  });
  res.send(dataArr);
});

//sql

routes.get("/sql", async (req, res) => {
  let responce = await axios.get(`${process.env.URL_SQL}`);
  let result = await responce.data;
  const $ = cheerio.load(result);
  let dataArr = [];
  $("h2", result).each(function () {
    let h2 = $(this).text();
    // let p = $(this).find("p").text();
    dataArr.push({ h2 });
  });
  res.send(dataArr);
});

routes.get("/insta", async (req, res) => {
  let responce = await axios.get("https://www.instagram.com/naughty_meme143/");
  let result = await responce.data;
  const $ = cheerio.load(result);
  let dataArr = [];
  $("div", result).each(function () {
    const url = $(this).find(`div > div > a`).attr("href");
    dataArr.push({ url });
  });
  res.send(dataArr);
});

module.exports = routes;
