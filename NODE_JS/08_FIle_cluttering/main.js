import fs from "fs/promises";
import path from "path";
import fsn from "fs";

const basePath = "d:/my codes/web devlopment/NODE_JS/FIle_cluttering";

try {
    let files = await fs.readdir(basePath);
    console.log(files);

    for (const item of files) {
        console.log("running for", item);
        let ext = item.split(".")[item.split(".").length - 1];
        if (ext !== "js" && ext !== "json" && item.split(".").length > 1) {
            const extDir = path.join(basePath, ext);
            if (fsn.existsSync(extDir)) {
                // Move the file to this directory if it's not a js or json file
                await fs.rename(path.join(basePath, item), path.join(extDir, item));

                //  join(basePath, item)=>     "d:/my codes/web development/NODE_JS/FIle_cluttering/image.jpg",
                //  path.join(extDir, item)=>  "d:/my codes/web development/NODE_JS/FIle_cluttering/jpg/image.jpg"
            } else {
                await fs.mkdir(extDir);
                await fs.rename(path.join(basePath, item), path.join(extDir, item));
            }
        }
    }
} catch (error) {
    console.error("Error organizing files:", error);
}
