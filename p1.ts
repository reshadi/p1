import * as Path from "path";
import { readFileSync, writeFileSync } from 'fs';

console.log("p1@1.0.1");

const localCwd = process.cwd();
const topCwd = process.env.INIT_CWD;

console.log(`Topd dir is ${localCwd} & ${topCwd}`);

if (topCwd) {
    const topPackageJson = Path.join(topCwd, "package.json");
    console.log(`opening file ${topPackageJson}`)
    const packageFile = readFileSync(topPackageJson).toString();
    const pkg = JSON.parse(packageFile);
    const scripts = pkg.scripts || {};
    if (scripts.jakets !== "bla bla") {
        scripts.jakets = `jake ${Path.relative(topCwd, Path.join(localCwd, "p1.js"))}`;
        pkg.scripts = scripts;
        console.log(`writing to file ${topPackageJson}`);
        writeFileSync(topPackageJson, JSON.stringify(pkg));
    }
}
