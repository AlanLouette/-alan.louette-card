#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");
const ora = require("ora");
const figures = require("figures");

const data = {
  name: chalk.bold("Alan's skills"),
  OldF: chalk.red.bold("Old") + " formation : ",
  Progra: "✓ Language C, Java",
  Progra2: "✓ Excel(+ Macros), Word, Powerpoint, Access",
  NewF: chalk.green.bold("Becode's") + " formation : ",
  Dev: "✓ HTML, Javascript, CSS, Bootstrap",
  DevPgs: "x " + chalk.green("In progress") + ".. SQL, node.js, Wordpress",
  Others: chalk.blue.bold("Others.."),
  OtSk: "✓ English, Mutual aid, Team work, Handle stress,",
  OtSk2: "Good writing skills, Self-assessment",
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
  chalk.white(
    boxen(
      [
        `${data.name}`,
        EMPTYLINE,
        `${data.OldF}`,
        EMPTYLINE,
        `${data.Progra}`,
        EMPTYLINE,
        `${data.Progra2}`,
        EMPTYLINE,
        `${data.NewF}`,
        EMPTYLINE,
        `${data.Dev}`,
        EMPTYLINE,
        `${data.DevPgs}`,
        EMPTYLINE,
        `${data.Others}`,
        EMPTYLINE,
        `${data.OtSk}`,
        `${data.OtSk2}`,
      ].join(NEWLINE),
      {
        padding: 1,
        margin: 1,
        borderStyle: "round",
      }
    )
  )
);
