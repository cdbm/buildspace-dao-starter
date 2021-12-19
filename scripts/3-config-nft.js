import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0xb1F66d351c8fD8dDA9D5f717aB25052206162C46",
);

(async () => {
    try {
        await bundleDrop.createBatch([{
            name: "Peaky Blinders Haircut",
            description: "This NFT will give you access to PeakyBlindersDAO",
            image: readFileSync("scripts/assets/haircut.jpg"),
        },
        ]);

        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()