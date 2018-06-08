"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Path = tslib_1.__importStar(require("path"));
const fs_1 = require("fs");
console.log("p1@1.0.1");
const localCwd = process.cwd();
const topCwd = process.env.INIT_CWD;
console.log(`Topd dir is ${localCwd} & ${topCwd}`);
if (topCwd) {
    const topPackageJson = Path.join(topCwd, "package.json");
    console.log(`opening file ${topPackageJson}`);
    const packageFile = fs_1.readFileSync(topPackageJson).toString();
    const pkg = JSON.parse(packageFile);
    const scripts = pkg.scripts || {};
    if (scripts.jakets !== "bla bla") {
        scripts.jakets = `jake ${Path.relative(topCwd, Path.join(localCwd, "p1.js"))}`;
        pkg.scripts = scripts;
        console.log(`writing to file ${topPackageJson}`);
        fs_1.writeFileSync(topPackageJson, JSON.stringify(pkg));
    }
}
