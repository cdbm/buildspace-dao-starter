import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xcF5a0Fe3AcB2406205687f159C52A004806949B6");

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            name: "PeakyBlindersDAO Membership",
            description: "A DAO for the Peaky Blinders",
            image: readFileSync("scripts/assets/peakyblinders.jpg"),
            primarySaleRecipientAddress: ethers.constants.AddressZero
        });

        console.log("✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address);
        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
        );
    } catch (error) {
        console.log("failed to deploy bundleDrop module", error);
    }
})()